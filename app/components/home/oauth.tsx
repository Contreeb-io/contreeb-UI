import { useMutation } from "@tanstack/react-query";
import type React from "react";
import type { SetStateAction } from "react";
import http from "../../lib/http";
import type { FormType } from "../../types";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

export default function Oauth({
  formType,
  setFormType,
}: {
  formType: FormType;
  setFormType: React.Dispatch<SetStateAction<FormType>>;
}) {
  async function googleSignIn() {
    const res = await http.post("auth/google", {
      id_token: import.meta.env.VITE_GOOGLE_TOKEN,
    });
    return res;
  }

  const { mutate, isPending } = useMutation({
    mutationFn: googleSignIn,
    onSuccess: (data) => {
      // set token and user
    },
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutate();
  }

  return (
    <div className="font-inter flex w-full flex-col gap-4 text-sm font-medium text-[#101928]">
      <form onSubmit={onSubmit} className="w-full">
        <Button
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
