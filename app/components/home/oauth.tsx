import { GoogleLogin } from "@react-oauth/google";
import { useMutation } from "@tanstack/react-query";
import type React from "react";
import { type SetStateAction } from "react";
import { googleSignIn } from "../../lib/auth";
import type { FormType } from "../../types";

export default function Oauth({
  formType,
  setFormType,
}: {
  formType: FormType;
  setFormType: React.Dispatch<SetStateAction<FormType>>;
}) {
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

  const loginWithGoogle = () => {
    console.log("hello");
  };

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    loginWithGoogle();
  }

  const handleSuccess = async (credentialResponse: any) => {
    console.log(credentialResponse);
  };

  return (
    <div className="font-inter flex w-full flex-col gap-4 text-sm font-medium text-[#101928]">
      <form onSubmit={onSubmit} className="w-full">
        {/* <Button
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
        </Button> */}
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => {
            console.error("Google Sign In failed");
          }}
          useOneTap
        />
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
