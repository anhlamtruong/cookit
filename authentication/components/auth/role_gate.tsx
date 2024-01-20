"use client";

import { useCurrentRole } from "@/authentication/hooks/use_current_role";
import { UserRole } from "@/generated/@prisma-client-authenticate";
import { FormError } from "../form_error";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content!" />
    );
  }

  return <>{children}</>;
};
