"use client";

// import useAsyncDataFetcher from "@/hooks/useAsyncDataFetcher";
// import { Store } from "@prisma-client-mysql";
// import { User } from "@prisma-client-mongo";
import { useStoreData } from "@/hooks/useStore";

export interface DashBoardPageProps {}

const DashBoardPage: React.FC<DashBoardPageProps> = ({}) => {
  const { storeData } = useStoreData();

  return <div>This is a dash board page {`${storeData?.name ?? "name"}`}</div>;
};

export default DashBoardPage;
