"use client";

import ErrorComponent from "@/components/ui/error";
import SettingsForm from "./_components/settings_form";
import { useStoreData } from "@/hooks/useStore";
import { useUserData } from "@/hooks/useUser";
import React from "react";

interface SettingsPageProps {
  params: {
    storeId: string;
  };
}

const AdminSettingPage: React.FC<SettingsPageProps> = ({ params }) => {
  const { userData } = useUserData();
  const { storeData } = useStoreData();
  if (!storeData) {
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
