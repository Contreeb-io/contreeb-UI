import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/create-campaign", "routes/create-campaign.tsx"),
  layout("./components/dashboard/layout.tsx", [
    route("/dashboard", "routes/dashboard.tsx"),
    route("/donations", "routes/donations.tsx"),
    route("/settings", "routes/settings.tsx"),
  ]),
  route("/donate/:id", "routes/donate.tsx"),
] satisfies RouteConfig;
