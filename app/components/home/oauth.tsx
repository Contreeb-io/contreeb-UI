import { useMutation } from "@tanstack/react-query";
import type React from "react";
import { useEffect, useRef, type SetStateAction } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { TOKEN_KEY, useAuth } from "../../context/auth-context";
import { googleSignIn } from "../../lib/auth";
import { errorStyle } from "../../lib/http";
import token from "../../lib/token";
import type { FormType } from "../../types";
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
  const googleButtonRef = useRef<HTMLDivElement>(null);

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
      if (window.google && googleButtonRef.current) {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse,
          auto_select: true,
          cancel_on_tap_outside: true,
        });

        window.google.accounts.id.renderButton(googleButtonRef.current, {
          theme: "outline",
          size: "large",
          width: googleButtonRef.current.offsetWidth,
          text: "continue_with",
          shape: "pill",
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
  }, [mutate]);

  const handleGoogleClick = () => {
    const googleBtn = googleButtonRef.current?.querySelector(
      'div[role="button"]',
    ) as HTMLElement;
    if (googleBtn) {
      googleBtn.click();
    }
  };

  return (
    <div className="font-inter flex w-full flex-col gap-4 text-sm font-medium text-[#101928]">
      <div ref={googleButtonRef} className="hidden" />

      <button
        type="button"
        onClick={handleGoogleClick}
        disabled={isPending}
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#F0F2F5] bg-transparent p-3 text-[#101928] hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? (
          <Spinner className="text-[#101928]" />
        ) : (
          <>
            <img src={"/google.png"} alt="google image" className="size-4" />
            Continue with Google
          </>
        )}
      </button>

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
