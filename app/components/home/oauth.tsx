import type React from "react";
import type { SetStateAction } from "react";
import type { FormType } from "~/types";

export default function Oauth({
  formType,
  setFormType,
}: {
  formType: FormType;
  setFormType: React.Dispatch<SetStateAction<FormType>>;
}) {
  return (
    <div className="font-inter flex w-full flex-col gap-4 text-sm font-medium text-[#101928]">
      <button className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#F0F2F5] bg-transparent p-3">
        <img src={"/google.png"} alt="google image" />
        Continue with Google
      </button>
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
