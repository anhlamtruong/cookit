"use server";
import * as z from "zod";

import { signIn } from "@/auth";
import prismaAuthenticate from "@/authentication/lib/db/authenticate_db";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

import { LoginSchema } from "@/authentication/schemas";
import { getUserByEmail } from "@/authentication/data/user";
import {
  generateTwoFactorToken,
  generateVerificationToken,
} from "@/authentication/lib/tokens";
import {
  sendTwoFactorTokenEmail,
  sendVerificationEmail,
} from "@/authentication/lib/mail";
import { getTwoFactorTokenByEmail } from "@/authentication/data/two_factor_token";
import { getTwoFactorConfirmationByUserId } from "@/authentication/data/two_factor_confirmation";

export const login = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string
) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, code } = validatedFields.data;
  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist!" };
  }
  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );
    return { success: "Confirmation email sent !" };
  }
  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);

      if (!twoFactorToken) {
        return { error: "Invalid Code!" };
      }
      if (twoFactorToken.token !== code) {
        return { error: "Not the right code ╰（‵□′）╯" };
      }
      const hasExpired = new Date(twoFactorToken.expires) < new Date();
      if (hasExpired) {
        return { error: "Code Expired (っ °Д °;)っ" };
      }
      await prismaAuthenticate.twoFactorToken.delete({
        where: { id: twoFactorToken.id },
      });
      const existingConfirmation = await getTwoFactorConfirmationByUserId(
        existingUser.id
      );
      if (existingConfirmation) {
        await prismaAuthenticate.twoFactorConfirmation.delete({
          where: { id: existingConfirmation.id },
        });
      }
      await prismaAuthenticate.twoFactorConfirmation.create({
        data: { userId: existingUser.id },
      });
    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email);
      await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);
      return { twoFactor: true };
    }
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: " Invalid credentials !" };
        default: {
          return { error: "Something went wrong :(" };
        }
      }
    }
    throw error;
  }

  await generateVerificationToken(email);

  return { success: "Email sent !" };
};