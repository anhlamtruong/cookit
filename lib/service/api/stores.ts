import axios from "axios";
import { Store } from "@prisma-client-mysql";

export const fetchStores = async (): Promise<Store[]> => {
  const { data } = await axios.get<Store[]>("/api/stores");

  return data;
};

export const createNewStore = async ({
  newStore,
}: {
  newStore: Store;
}): Promise<Store> => {
  return newStore;
};
