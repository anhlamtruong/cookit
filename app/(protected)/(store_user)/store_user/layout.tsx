"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavigationBar from "../_components/navigation_bar";
import Footer from "../_components/footer";

const queryClientUser = new QueryClient();
const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <QueryClientProvider client={queryClientUser}>
        <NavigationBar></NavigationBar>
        {children}
        <Footer></Footer>
      </QueryClientProvider>
    </>
  );
};

export default UserLayout;
