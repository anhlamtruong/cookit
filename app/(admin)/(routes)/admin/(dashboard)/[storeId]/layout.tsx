"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import NavigationBar from "@/app/(admin)/_components/admin_navigation_bar";
import LoadingCarrot from "@/components/ui/loading/loading-carrot";
import { Skeleton } from "@/components/ui/skeleton";

import useAsyncDataFetcher from "@/hooks/useAsyncDataFetcher";

import { Store } from "@prisma-client-mysql";
import { User } from "@prisma-client-mongo";
import { useStoreData } from "@/hooks/useStore";
import { useUserData } from "@/hooks/useUser";

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const router = useRouter();
  const { storeId } = params;
  const { setStoreData } = useStoreData();
  const { setUserData } = useUserData();
  const {
    data: storeData,
    isLoading: isStoreLoading,
    error: storeError,
  } = useAsyncDataFetcher<Store>(`/api/admin/${storeId}`);
  const { data: userData } = useAsyncDataFetcher<User>("/api/user");

  useEffect(() => {
    if ((!storeData?.id || storeError) && !isStoreLoading) {
      router.push(`/admin`);
    }

    setStoreData(storeData as Store);
    setUserData(userData as User);
  }, [
    storeData,
    storeError,
    router,
    userData,
    setStoreData,
    isStoreLoading,
    setUserData,
  ]);

  if (isStoreLoading) {
    return <LoadingCarrot text={"Loading Admin Dashboard"}></LoadingCarrot>;
  }

  if (!storeData?.id) {
    return <Skeleton></Skeleton>;
  }

  return storeError ? (
    <div>{storeError.massage}</div>
  ) : (
    <>
      <NavigationBar className=""></NavigationBar>

      {children}
    </>
  );
}
