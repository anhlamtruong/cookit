import UserInfo from "@/authentication/components/auth/user_info";
import { currentUser } from "@/authentication/lib/auth";

const ServerPage = async () => {
  const user = await currentUser();

  return <UserInfo user={user} label="Server component" />;
};

export default ServerPage;
