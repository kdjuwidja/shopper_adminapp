import { type RouteConfig } from "@react-router/dev/routes";

export default [
  {
    path: "/health",
    file: "routes/health.tsx"
  },
  {
    path: "/",
    file: "routes/home.tsx"
  },
  {
    path: "/login",
    file: "login/login.tsx"
  },
  {
    path: "/callback",
    file: "callback/callback.tsx"
  },
  {
    path: "/home",
    file: "admin/adminHome.tsx"
  }
] satisfies RouteConfig; 