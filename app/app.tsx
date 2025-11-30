import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/dashboard/layout";
import CreateCampaign from "./routes/create-campaign";
import Dashboard from "./routes/dashboard";
import Donate from "./routes/donate";
import Donations from "./routes/donations";
import Home from "./routes/home";
import PrivacyPolicy from "./routes/privacy-policy";
import Settings from "./routes/settings";
import Terms from "./routes/terms";
import UserGuide from "./routes/user-guide";

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

export default function App() {
  return <RouterProvider router={router} />;
}
