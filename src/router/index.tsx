import { Outlet, RouterProvider, Link, createReactRouter, createRouteConfig } from "@tanstack/react-router";
import Home_page from "../pages/Home_page";

const rootRoute = createRouteConfig({
  component: () => <Outlet />,
});

const homeRoute = rootRoute.createRoute({
  path: "/",
  component: Home_page,
});

const routeConfig = rootRoute.addChildren([homeRoute]);

export const router = createReactRouter({ routeConfig });
