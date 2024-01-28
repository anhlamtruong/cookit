"use client";

import useStoreData from "@/hooks/store/useStore";

export interface DashBoardPageProps {}

const DashBoardPage: React.FC<DashBoardPageProps> = ({}) => {
  const { storeData } = useStoreData();

  return <div>This is a dash board page {`${storeData?.name ?? "name"}`}</div>;
};

export default DashBoardPage;
