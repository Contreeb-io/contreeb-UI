import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { TOKEN_KEY, useAuth } from "../context/auth-context";
import token from "../lib/token";

export default function VerifyMagicLink() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const {} = useAuth();

  useEffect(() => {
    if (!data) {
      navigate("/", { replace: true });
    }

    token.set(TOKEN_KEY, data?.session?.token, data?.session?.expired_at);
    //   set User
    navigate("/dashboard", { replace: true });
  }, []);

  return null;
}
