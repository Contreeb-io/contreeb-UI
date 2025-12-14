import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router";

import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import DashboardEmpty from "./routes/dashboard-empty";
import ResetPassword from "./routes/reset-password";
import VerifyMagicLink from "./routes/verify_magic_link";

const Layout = lazy(() => import("./components/dashboard/layout"));
const CreateCampaign = lazy(() => import("./routes/create-campaign"));
const Dashboard = lazy(() => import("./routes/dashboard"));
const Donate = lazy(() => import("./routes/donate"));
const Donations = lazy(() => import("./routes/donations"));
const Home = lazy(() => import("./routes/home"));
const PrivacyPolicy = lazy(() => import("./routes/privacy-policy"));
const Settings = lazy(() => import("./routes/settings"));
const Terms = lazy(() => import("./routes/terms"));
const UserGuide = lazy(() => import("./routes/user-guide"));

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/user-guide", element: <UserGuide /> },
  { path: "/terms", element: <Terms /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  {
    path: "/magic_links/verify",
    element: <VerifyMagicLink />,
  },
  { path: "/create-campaign", element: <CreateCampaign /> },
  { path: "/reset_password", element: <ResetPassword /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "dashboard", element: <DashboardEmpty /> },
      { path: "dashboard/:id", element: <Dashboard /> },
      { path: "donations", element: <Donations /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  { path: "/donate/:id", element: <Donate /> },
]);

const queryClient = new QueryClient();

export default function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div></div>}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
