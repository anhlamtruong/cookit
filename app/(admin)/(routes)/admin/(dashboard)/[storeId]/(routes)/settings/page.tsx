"use client";

import ErrorComponent from "@/components/ui/error";
import SettingsForm from "./_components/settings_form";
import useStoreData from "@/hooks/useStore";
import { useUserData } from "@/hooks/useUser";
import React from "react";
import { useRouter } from "next/navigation";

interface SettingsPageProps {
  params: {
    storeId: string;
  };
}

const AdminSettingPage: React.FC<SettingsPageProps> = ({ params }) => {
  const { userData } = useUserData();
  const { storeData } = useStoreData();
  const router = useRouter();
  if (!storeData) {
    router.push("/admin");
    return <ErrorComponent message="There is no store :(" />;
  }

  return (
    <div className=" flex-col">
      <div className=" flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialDataStore={storeData} />
      </div>
    </div>
  );
};

export default AdminSettingPage;
