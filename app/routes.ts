import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/create-campaign", "routes/create-campaign.tsx"),
] satisfies RouteConfig;
