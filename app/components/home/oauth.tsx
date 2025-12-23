import { useMutation } from "@tanstack/react-query";
import type React from "react";
import { useEffect, type SetStateAction } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { TOKEN_KEY, useAuth } from "../../context/auth-context";
import { googleSignIn } from "../../lib/auth";
import { errorStyle } from "../../lib/http";
import token from "../../lib/token";
import type { FormType } from "../../types";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

interface GoogleCredentialResponse {
  credential: string;
  select_by: string;
  clientId: string;
}

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: any) => void;
          renderButton: (parent: HTMLElement, options: any) => void;
          prompt: (notification?: (notification: any) => void) => void;
        };
      };
    };
  }
}

export default function Oauth({
  formType,
  setFormType,
}: {
  formType: FormType;
  setFormType: React.Dispatch<SetStateAction<FormType>>;
}) {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationFn: googleSignIn,
    onSuccess: (data) => {
      setUser(data.user);
      token.set(TOKEN_KEY, data.data.token, data.data.expired_at);
      navigate("/dashboard");
    },
  });

  useEffect(() => {
    const handleCredentialResponse = (response: GoogleCredentialResponse) => {
      if (response.credential) {
        mutate(response.credential);
      } else {
        toast.error("No credential received", { style: errorStyle });
      }
    };

    const initializeGoogleSignIn = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse,
          cancel_on_tap_outside: true,
          use_fedcm_for_prompt: true,
          use_fedcm_for_button: true,
        });
      }
    };

    if (window.google) {
      initializeGoogleSignIn();
    } else {
      const checkGoogleLoaded = setInterval(() => {
        if (window.google) {
          clearInterval(checkGoogleLoaded);
          initializeGoogleSignIn();
        }
      }, 100);

      return () => clearInterval(checkGoogleLoaded);
    }
  }, []);

  function handleGoogleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (window.google) {
      window.google.accounts.id.prompt();
    }
  }

  return (
    <div className="font-inter flex w-full flex-col gap-4 text-sm font-medium text-[#101928]">
      <form onSubmit={handleGoogleSignIn} className="w-full">
        <Button
          type="submit"
          disabled={isPending}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#F0F2F5] bg-transparent p-3 text-[#101928] hover:bg-transparent"
        >
          {isPending ? (
            <Spinner className="text-[#101928]" />
          ) : (
            <>
              <img src={"/google.png"} alt="google image" className="size-4" />
              Continue with Google
            </>
          )}
        </Button>
      </form>
      <button
        type="button"
        className="flex cursor-pointer justify-center rounded-full border border-[#F0F2F5] bg-transparent p-3"
        onClick={() =>
          setFormType(formType === "magicLink" ? "password" : "magicLink")
        }
      >
        Continue with {formType === "password" ? "magic link" : "password"}
      </button>
    </div>
  );
}
