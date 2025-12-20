import { useMutation } from "@tanstack/react-query";
import type React from "react";
import { type SetStateAction, useEffect, useRef } from "react";
import { googleSignIn } from "../../lib/auth";
import type { FormType } from "../../types";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

// Extend Window interface for Google Identity Services
declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential: string }) => void;
            ux_mode?: "popup" | "redirect";
            auto_select?: boolean;
          }) => void;
          renderButton: (
            parent: HTMLElement,
            options: {
              theme?: "outline" | "filled_blue" | "filled_black";
              size?: "large" | "medium" | "small";
              type?: "standard" | "icon";
              shape?: "rectangular" | "pill" | "circle" | "square";
              text?: "signin_with" | "signup_with" | "continue_with" | "signin";
              width?: number;
            },
          ) => void;
        };
        oauth2: {
          initTokenClient: (config: {
            client_id: string;
            scope: string;
            callback: (response: {
              access_token: string;
              token_type: string;
              expires_in: number;
              scope: string;
              error?: string;
              error_description?: string;
            }) => void;
          }) => {
            requestAccessToken: (overrideConfig?: { prompt?: string }) => void;
          };
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
  const tokenClientRef = useRef<any>(null);

  const { isPending } = useMutation({
    mutationFn: googleSignIn,
    onSuccess: (data) => {
      // set token and user
      console.log("Sign in successful:", data);
      // Example: localStorage.setItem("token", data.token);
      // Example: localStorage.setItem("user", JSON.stringify(data.user));
    },
    onError: (error) => {
      console.error("Sign in failed:", error);
    },
  });

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google) {
        try {
          window.google.accounts.id.initialize({
            client_id:
              import.meta.env.VITE_GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID",
            callback: handleCredentialResponse,
            ux_mode: "popup",
            auto_select: false,
          });

          tokenClientRef.current =
            window.google.accounts.oauth2.initTokenClient({
              client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
              scope: "openid email profile",
              callback: handleOAuthResponse,
            });
        } catch (error) {
          console.error("Failed to initialize Google Sign-In:", error);
        }
      }
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = initializeGoogleSignIn;
      script.onerror = () => {
        console.error("Failed to load Google Identity Services script");
      };
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    } else {
      initializeGoogleSignIn();
    }
  }, []);

  const handleCredentialResponse = (response: { credential: string }) => {
    // The response.credential is a JWT token from Google
    console.log({ credential: response.credential });
  };

  const handleOAuthResponse = (response: {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    error?: string;
    error_description?: string;
  }) => {
    if (response.error) {
      console.error("OAuth error:", response.error, response.error_description);
      return;
    }

    // Use the access token to get user info or send to backend
    console.log({ accessToken: response.access_token });
  };

  const loginWithGoogle = () => {
    if (tokenClientRef.current) {
      try {
        tokenClientRef.current.requestAccessToken({ prompt: "select_account" });
      } catch (error) {
        console.error("Error showing Google Sign-In popup:", error);
      }
    } else {
      console.error("Google Identity Services not initialized");
    }
  };

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    loginWithGoogle();
  }

  return (
    <div className="font-inter flex w-full flex-col gap-4 text-sm font-medium text-[#101928]">
      <form onSubmit={onSubmit} className="w-full">
        <Button
          type="button"
          disabled={isPending}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#F0F2F5] bg-transparent p-3 text-[#101928] hover:bg-transparent"
          onClick={loginWithGoogle}
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
