import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/user_page/ThemeContext";
import ToasterContext from "@/contexts/user_page/ToasterContext";
import AuthContext from "@/contexts/authentication/AuthContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cookit",
  description:
    "Watch tutorials of cooking, or find the chief near by to others",
};
// const queryClient = new QueryClient();
// const queryClientUser = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <QueryClientProvider client={queryClientUser}> */}
      <html lang="en">
        <body className={inter.className}>
          <AuthContext>
            <ToasterContext></ToasterContext>
            {children}
          </AuthContext>
        </body>
      </html>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {/* </QueryClientProvider> */}
      {/* </QueryClientProvider> */}
    </ThemeProvider>
  );
}
