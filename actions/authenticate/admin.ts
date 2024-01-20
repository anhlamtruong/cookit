"use server";

import { currentRole } from "@/authentication/lib/auth";
import { UserRole } from "@/generated/@prisma-client-authenticate";

export const admin = async () => {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    return { success: "Allowed Server Action!" };
  }

  return { error: "Forbidden Server Action!" };
};
