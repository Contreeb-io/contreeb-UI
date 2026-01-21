import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "sonner";
import { Spinner } from "../components/ui/spinner";
import { TOKEN_KEY, useAuth } from "../context/auth-context";
import { magicLinkVerification } from "../lib/auth";
import { successStyle } from "../lib/http";
import token from "../lib/token";

export default function VerifyMagicLink() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const hasAttempted = useRef(false);
  const { setUser } = useAuth();

  const { mutate, isPending } = useMutation({
    mutationFn: magicLinkVerification,
    mutationKey: ["verify magic link"],
    onSuccess: (data) => {
      if (data) {
        toast(data.message, { style: successStyle });
        setUser(data.user);
        token.set(TOKEN_KEY, data.token, data.expires_at);
        navigate("/dashboard");
        return;
      }
      navigate("/");
    },
  });

  useEffect(() => {
    if (hasAttempted.current) return;
    hasAttempted.current = true;
    const token = searchParams.get("token") as string;
    mutate(token);
  }, [mutate]);

  if (isPending) {
    return (
      <section className="sidebar flex h-screen items-center justify-center px-6">
        <article className="flex w-full flex-col items-center gap-4 rounded-md py-6 shadow-sm md:w-125">
          <Spinner color="#06052A" className="size-6" />
          <div className="text-center">
            <h1 className="text-lg font-semibold text-[#06052A]">
              Verifying Magic link
            </h1>
            <p className="text-sm text-[#0a0a0a]">
              Hold tight let's verify your token 😊
            </p>
          </div>
        </article>
      </section>
    );
  }

  return null;
}
