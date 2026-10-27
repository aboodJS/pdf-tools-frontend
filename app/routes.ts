import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/word-to-pdf", "./routes/WordtToPdf.tsx"),
] satisfies RouteConfig;
