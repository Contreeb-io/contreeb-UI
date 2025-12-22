import { useMutation } from "@tanstack/react-query";
import type React from "react";
import { useEffect, type SetStateAction } from "react";
import { googleSignIn } from "../../lib/auth";
import type { FormType } from "../../types";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

// interface GoogleSignInProps {
//   onSuccess: (response: GoogleCredentialResponse) => void;
//   onError?: () => void;
//   clientId: string;
// }

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
          prompt: () => void;
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
  function loginWithGoogle() {
    console.log("clicked");
  }

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

  console.log(isPending);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    loginWithGoogle();
    window.google?.accounts.id.prompt();
  }

  useEffect(() => {
    // Wait for Google script to load
    const initializeGoogleSignIn = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse,
        });
      }
    };

    const handleCredentialResponse = (response: GoogleCredentialResponse) => {
      if (response.credential) {
        console.log(response);
      } else {
        console.log("error");
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

  return (
    <div className="font-inter flex w-full flex-col gap-4 text-sm font-medium text-[#101928]">
      <form onSubmit={onSubmit} className="w-full">
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
