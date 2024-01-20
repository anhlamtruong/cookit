"use server";

import { getUserByEmail } from "@/authentication/data/user";
import { getVerificationTokenByToken } from "@/authentication/data/verification-token";
import prismaAuthenticate from "@/authentication/lib/db/authenticate_db";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Token does not exist!" };
  }
  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  await prismaAuthenticate.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingUser.email,
    },
  });
  await prismaAuthenticate.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Email Verified" };
};
