import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

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
  { path: "/create-campaign", element: <CreateCampaign /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "donations", element: <Donations /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  { path: "/donate/:id", element: <Donate /> },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}
