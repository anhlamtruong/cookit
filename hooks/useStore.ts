import { create } from "zustand";
import { Store } from "@prisma-client-mysql";
import { User } from "@prisma-client-mongo";
interface useStoreModalStore {
  storeData: null | Store;
  setStoreData: (data: Store) => void;
}

const useStore = create<useStoreModalStore>((set) => ({
  storeData: null,
  setStoreData: (data) => set({ storeData: data }),
}));

export default useStore;

export const useStoreData = () => {
  const storeData = useStore((state) => state.storeData);
  const setStoreData = useStore((state) => state.setStoreData);

  // Any additional logic or effects

  return { storeData, setStoreData };
};
