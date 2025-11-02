import { useState } from "react";
import { Link } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import type { FormType } from "~/types";
import MagicLinkForm from "../auth/magic-link-form";
import PasswordForm from "../auth/password-form";
import OrDivider from "../ui/or-divider";
import Oauth from "./oauth";

export default function SignIn() {
  const [formType, setFormType] = useState<FormType>("password");

  return (
    <Dialog>
      <DialogTrigger className="sing-in-btn cursor-pointer rounded-[695px] bg-[#FFDEDE1A] px-4 py-3 text-sm font-medium text-[#242424] md:text-base">
        sign in
      </DialogTrigger>
      <DialogContent
        className="flex w-[96%] flex-col gap-8 rounded-2xl p-8 md:max-w-[477px]"
        showCloseButton={false}
      >
        <article className="space-y-6">
          <DialogHeader>
            <DialogTitle className="font-mackinac text-left text-xl font-bold text-[#010040]">
              Sign in to Contreebute.io
            </DialogTitle>
            <DialogDescription className="text-left font-sans text-[#5D5757]">
              Don’t have an account?{" "}
              <Link
                to={"/create-campaign"}
                className="font-medium text-[#6360F0] underline"
              >
                Create a campaign
              </Link>
            </DialogDescription>
          </DialogHeader>

          {formType === "password" && <PasswordForm />}
          {formType === "magicLink" && <MagicLinkForm />}
        </article>

        <OrDivider />
        <Oauth formType={formType} setFormType={setFormType} />
      </DialogContent>
    </Dialog>
  );
}
