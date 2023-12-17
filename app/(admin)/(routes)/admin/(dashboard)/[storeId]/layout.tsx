"use client";

import getCurrentUser from "@/actions/getCurrentUser";
import getFirstStore from "@/actions/getFirstStore";

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  return (
    <>
      <div>This is nav bar</div>
      {children}
    </>
  );
}
