import { Store } from "@/generated/mysql/@prisma-client-mysql";
import axios from "axios";

export const fetchStores = async (): Promise<Store[]> => {
  const { data } = await axios.get<Store[]>("/api/admin/stores");

  return data;
};

export const createNewStore = async ({
  newStore,
}: {
  newStore: Store;
}): Promise<Store> => {
  return newStore;
};
