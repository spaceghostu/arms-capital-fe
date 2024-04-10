import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navigation from "../components/Navigation/Navigation";
import { ConfigProvider } from "antd";

export const Route = createRootRoute({
  component: () => (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#285382",
          borderRadius: 2,

          fontFamily: "Roboto, sans-serif",
        },
      }}
    >
      <Navigation />
      <Outlet />
      <TanStackRouterDevtools />
    </ConfigProvider>
  ),
});
