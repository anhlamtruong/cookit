"use client";

import React from "react";
import Container from "../../_components/container";
import useOrigin from "@/hooks/store/use_origin";
import useAsyncDataFetcher from "@/hooks/store/useAsyncDataFetcher";
import { Store } from "@/generated/mysql/@prisma-client-mysql";
import { ClimbingBoxLoader } from "react-spinners";
import ErrorComponent from "@/components/ui/error";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import StoreCardContent from "../../_components/ui/store_card_content";
const MainStoreUserPage: React.FC = ({}) => {
  const url = useOrigin();
  const { data, isLoading } = useAsyncDataFetcher<Store[]>(
    `${url}/api/user_store/stores`
  );

  return isLoading ? (
    <ClimbingBoxLoader></ClimbingBoxLoader>
  ) : !data ? (
    <ErrorComponent message="Don't have any store running ╰（‵□′）╯"></ErrorComponent>
  ) : (
    <Container>
      <div className="space-y-10 p-10">
        {data.map((store) => (
          <>
            <Card className="">
              <CardHeader>
                <CardTitle>{`Store Name: ${store.name}`}</CardTitle>
                <CardDescription>{store.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <StoreCardContent data={store}></StoreCardContent>
              </CardContent>
              <CardFooter className="text-sm tex">{`Created from: ${
                format(store.updateAt, "MMMM do, yyyy") ??
                format(store.createAt, "MMMM do, yyyy")
              }`}</CardFooter>
            </Card>
          </>
        ))}
      </div>
    </Container>
  );
};
export default MainStoreUserPage;
