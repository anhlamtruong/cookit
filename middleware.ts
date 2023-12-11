import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/sign-in",
  },
});
export const config = {
  matcher: ["/profile/:path*", "/dashboard/:path*", "/admin/:path*"],
};