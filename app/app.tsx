import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { HydrateFallback } from "./components/dashboard/hydratefallback";
import { useAuth } from "./context/auth-context";
import { setAuthTokenGetter } from "./lib/http";
import { dashboardLoader, emptyDashboardLoader } from "./lib/utils";
import Dashboard from "./routes/dashboard";
import DashboardEmpty from "./routes/dashboard-empty";
import ErrorElement from "./routes/error-element";
import NotFound from "./routes/not-found";
import ResetPassword from "./routes/reset-password";
import VerifyMagicLink from "./routes/verify_magic_link";

const Layout = lazy(() => import("./components/dashboard/layout"));
const CreateCampaign = lazy(() => import("./routes/create-campaign"));
const Donate = lazy(() => import("./routes/donate"));
const Donations = lazy(() => import("./routes/donations"));
const Home = lazy(() => import("./routes/home"));
const PrivacyPolicy = lazy(() => import("./routes/privacy-policy"));
const Settings = lazy(() => import("./routes/settings"));
const Terms = lazy(() => import("./routes/terms"));
const UserGuide = lazy(() => import("./routes/user-guide"));

export const queryClient = new QueryClient();

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
    id: "dashboard-layout",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "dashboard",
        element: <DashboardEmpty />,
        loader: emptyDashboardLoader,
      },
      {
        path: "dashboard/:id",
        element: <Dashboard />,
      },
      { path: "donations", element: <DashboardEmpty /> },
      { path: "donations/:id", element: <Donations /> },
      { path: "payment-requests", element: <DashboardEmpty /> },
      {
        path: "payment-requests/:id",
        element: <h1>so you no go dash me the money?</h1>,
      },
      { path: "settings", element: <Settings /> },
    ],
    hydrateFallbackElement: <HydrateFallback />,
    loader: dashboardLoader,
  },
  { path: "/donate/:id", element: <Donate /> },

  { path: "*", element: <NotFound /> },
]);

export default function App() {
  const { token } = useAuth();

  useEffect(() => {
    setAuthTokenGetter(() => token);
  }, [token]);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div></div>}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
}
