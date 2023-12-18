import { ModalProvider } from "@/providers/modal_provider";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ModalProvider />
      {children}
    </>
  );
};

export default AdminLayout;
