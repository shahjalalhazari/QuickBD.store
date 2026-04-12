import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// PUBLIC ROUTES
const PUBLIC_ROUTES = [
  "/",
  "/products",
  "/categories",
  "/contact",
  "/auth/signin",
  "/auth/signup",
];

// ROLE BASED ROUTES ISOLATION
const ROLE_ROUTES = [
  { path: "/account", role: "USER" },
  { path: "/seller", role: "SELLER" },
  { path: "/staff", role: "STAFF" },
  { path: "/admin", role: "ADMIN" },
];

export async function middleware(request) {
  try {
    // GET PATH & TOKEN
    const { pathname, search } = request.nextUrl;
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    console.log("TOKEN:", token);
    console.log("COOKIES:", request.cookies.getAll());

    // SKIP SYSTEM FILES
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname.includes(".")
    ) {
      return NextResponse.next();
    }

    // ALLOW PUBLIC PAGES
    if (PUBLIC_ROUTES.some(route => pathname === route || pathname.startsWith(route + "/"))) {
      return NextResponse.next();
    }

    // CHECK IF ROUTE IS PROTECTED
    const matchedRoute = ROLE_ROUTES.find(route =>
      pathname.startsWith(route.path)
    );

    // IF ROUTE ISN'T PROTECTED, ALLOW ACCESS
    if (!matchedRoute) {
      return NextResponse.next();
    }

    // USER NOT AUTHENTICATED, REDIRECT TO SIGNIN
    if (!token) {
      const signInUrl = new URL("/auth/signin", request.url);
      const fullPath = pathname + search;
      signInUrl.searchParams.set("callbackUrl", fullPath);
      return NextResponse.redirect(signInUrl);
    }

    const userRole = token?.role || "USER";

    // ROLE BASED AUTHORIZATION
    if (userRole !== matchedRoute.role) {
      return NextResponse.redirect(
        new URL("/unauthorized", request.url)
      );
    }

    // FINALLY, ALLOW ACCESS
    return NextResponse.next();

  } catch (error) {
    console.error("Middleware Error:", error);
    return NextResponse.next();
  }
}

// MATCHER CONFIG
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/auth).*)",
    "/account/:path*",
    "/seller/:path*",
    "/staff/:path*",
    "/admin/:path*",
  ],
};
