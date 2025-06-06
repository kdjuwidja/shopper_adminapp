import { type RouteConfig } from "@react-router/dev/routes";

export default [
  {
    path: "/",
    file: "routes/home.tsx"
  },
  {
    path: "/admin/login",
    file: "login/login.tsx"
  },
  {
    path: "/admin/callback",
    file: "callback/callback.tsx"
  },
  {
    path: "/admin/home",
    file: "admin/adminHome.tsx"
  }
] satisfies RouteConfig; 