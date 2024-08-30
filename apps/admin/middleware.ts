import { dashboardApi } from "apis/auth/dashboardApi";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/studies/:path*", "/participants/:path*"],
};

const middleware = async (req: NextRequest) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/not-found", req.url));
  }

  const { studyRole, manageRole } = await dashboardApi.getDashboardInfo();

  if (studyRole === "STUDENT" && manageRole === "NONE") {
    const url =
      process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
        ? process.env.NEXT_PUBLIC_CLIENT_PROD_URL
        : process.env.NEXT_PUBLIC_CLIENT_DEV_URL;

    return NextResponse.redirect(new URL("/auth", url));
  }

  return NextResponse.next();
};

export default middleware;
