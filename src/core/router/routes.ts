import type { RouteObject } from "react-router";
import { authRoutes } from "@/features/auth/routes";
// import { lazy } from "react";
// import RootLayout from "@/shared/components/layout/RootLayout";

// const LoginPage = lazy(() => import('@/features/auth/pages/LoginPage'));
// const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export const routes: RouteObject[] = [
  {
    path: "/",
    // element: <RootLayout />,
    // Component: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      ...authRoutes,
      //   {
      //     path: ROUTES.LOGIN,
      //     element: <LoginPage />,
      //       --- or ---
      //     lazy: () => import("../features/auth/pages/LoginPage"),
      //   },
      // Catch all
      //   {
      //     path: "*",
      //     element: <NotFoundPage />,
      //   },
    ],
  },
];
