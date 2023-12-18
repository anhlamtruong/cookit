"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import NavigationBar from "@/app/(admin)/_components/admin_navigation_bar";
import LoadingCarrot from "@/components/ui/loading/loading-carrot";
import { Skeleton } from "@/components/ui/skeleton";

import useAsyncDataFetcher from "@/hooks/useAsyncDataFetcher";

import { Store } from "@prisma-client-mysql";
import { User } from "@prisma-client-mongo";
import { DashBoardPageProps } from "@/app/(admin)/(routes)/admin/(dashboard)/[storeId]/(routes)/page";
import { useStoreData } from "@/hooks/useStore";

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
  const {
    data: storeData,
    isLoading: isStoreLoading,
    error: storeError,
  } = useAsyncDataFetcher<Store>(`/api/admin/${storeId}`);
  const {
    data: userData,
    isLoading: isUserLoading,
    error: userError,
  } = useAsyncDataFetcher<User>("/api/user");

  useEffect(() => {
    if (!storeData?.id || storeError) {
      router.push(`/admin`);
    }
    if (!userData?.id || storeError) {
      router.push(`/sign-in`);
    }
    setStoreData(storeData as Store);
  }, [storeData, storeError, router, userData, setStoreData]);

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
      <div>This is nav bar</div>
      {children}
    </>
  );
}
