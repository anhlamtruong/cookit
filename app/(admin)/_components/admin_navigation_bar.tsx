"use client";

import UserButton from "@/app/(auth)/_components/auth_account_button";
import MainNavigationBar from "@/app/(admin)/_components/admin_main_navigation_bar";
import StoreSwitcher from "@/app/(admin)/_components/store-switcher";

import { Store } from "@prisma-client-mysql";
import useAsyncDataFetcher from "@/hooks/useAsyncDataFetcher";
import { cn } from "@/lib/utils";
import { useStores } from "@/hooks/useStore";

interface NavigationBarProps {
  className: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ className = "" }) => {
  // const { data: storesData } = useAsyncDataFetcher<Store[]>("/api/stores");
  const { data: stores, isLoading } = useStores();
  // console.log(storesData);
  return (
    <div className={cn(" border-b", { className })}>
      <div className="flex h-18 items-center px-4">
        <div className=" mr-auto flex items-center space-x-4 justify-center content-center">
          {/* //TODO: Add redirect whenever signing out */}
          <UserButton initialData={null}></UserButton>
        </div>
        <div className="flex gap-3">
          <MainNavigationBar></MainNavigationBar>
          <StoreSwitcher items={stores ?? []} />
          {/* <StoreSwitcher items={storesData ?? []} /> */}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
