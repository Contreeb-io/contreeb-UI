import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
// @ts-ignore
import "./app.css";
import { Toaster } from "./components/ui/sonner";
import { AuthProvider } from "./context/auth-context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <AuthProvider>
        <App />
      </AuthProvider>
      <Toaster position="top-right" />
    </>
  </StrictMode>,
);
