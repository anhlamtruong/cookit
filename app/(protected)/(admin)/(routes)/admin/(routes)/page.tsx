"use client";

import { Store } from "@/generated/@prisma-client-mysql";
import useAsyncDataFetcher from "@/hooks/useAsyncDataFetcher";
import { useStoreModal } from "@/hooks/useStoreModal";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { UserRole } from "@/generated/@prisma-client-authenticate";
import { useCurrentRole } from "@/authentication/hooks/use_current_role";
import { admin } from "@/actions/authenticate/admin";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/authentication/components/ui/card";
import { RoleGate } from "@/authentication/components/auth/role_gate";
import { FormSuccess } from "@/authentication/components/form_success";

const AdminPage: React.FC = ({}) => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const onClose = useStoreModal((state) => state.onClose);
  const isOpen = useStoreModal((state) => state.isOpen);
  const router = useRouter();

  const { data, isLoading, error } =
    useAsyncDataFetcher<Store>("api/admin/store");
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      }

      if (data.success) {
        toast.success(data.success);
      }
    });
  };

  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Allowed API Route!");
      } else {
        toast.error("Forbidden API Route!");
      }
    });
  };
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
    if (data?.id) {
      onClose();
      // router.push(`/admin/${data.id}`);
    }
  }, [onOpen, isOpen, data, onClose, router]);

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">🔑 Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see this content!" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only API Route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default AdminPage;
