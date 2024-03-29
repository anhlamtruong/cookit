"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { SizeColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data_table";
import { ApiList } from "@/components/ui/api_list";
interface SizesClientProps {
  data: SizeColumn[];
}

export const SizesClient: React.FC<SizesClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
        />
        <Button
          onClick={() =>
            router.push(`/store_admin/${params.storeId}/sizes/new`)
          }
        >
          <Plus className=" mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey={"name"} columns={columns} data={data} />
      <Heading title="API" description="API Calls for Sizes" />
      <Separator />
      <ApiList entityName="sizes" entityIdName="sizes" />
    </>
  );
};
