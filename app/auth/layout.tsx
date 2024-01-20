"use client";

import { useStyles } from "@/authentication/hooks/use_styles";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const styles = useStyles();
  return (
    <div
      style={styles.container}
      className=" h-screen flex items-center justify-center w-full"
    >
      {children}
    </div>
  );
};

export default AuthLayout;
