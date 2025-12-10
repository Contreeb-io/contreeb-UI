import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Spinner } from "../components/ui/spinner";
import { useAuth } from "../context/auth-context";
import { useQueryParams } from "../hooks/use-searchParams";
import { magicLinkVerification } from "../lib/auth";

export default function VerifyMagicLink() {
  const navigate = useNavigate();
  const hasAttempted = useRef(false);
  const {} = useAuth();

  const { query } = useQueryParams("token");

  const { mutate, isPending } = useMutation({
    mutationFn: magicLinkVerification,
    mutationKey: ["verify magic link"],
    onSuccess: (data) => {
      console.log(data);
      // set token and user here
    },
    onError: () => {
      navigate("/");
    },
  });

  useEffect(() => {
    if (hasAttempted.current) return;
    hasAttempted.current = true;
    mutate(query);
  }, [query, mutate]);

  if (isPending) {
    return (
      <section className="flex h-screen items-center justify-center px-6">
        <article className="flex w-full flex-col items-center gap-4 rounded-md py-6 shadow-sm md:w-[500px]">
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
