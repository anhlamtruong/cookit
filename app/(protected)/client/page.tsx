"use client";

import UserInfo from "@/authentication/components/auth/user_info";
import { useCurrentUser } from "@/authentication/hooks/use_current_user";

const ClientPage = () => {
  const user = useCurrentUser();
  return <UserInfo label="📱 Client component" user={user} />;
};

export default ClientPage;
