import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import type { FormType } from "../../types";
import MagicLinkForm from "../auth/magic-link-form";
import PasswordForm from "../auth/password-form";
import OrDivider from "../ui/or-divider";
import Oauth from "./oauth";
import ResetPassword from "./reset-password";

export default function SignIn() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [formType, setFormType] = useState<FormType>("password");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isResetPasswordOpen, setIsResetPasswordOpen] = useState(false);

  useEffect(() => {
    const forgotPassword = searchParams.get("forgot_password");
    const signIn = searchParams.get("sign_in");
    if (forgotPassword === "true") {
      setIsResetPasswordOpen(true);
    }
    if (signIn === "true") {
      setIsDialogOpen(true);
    }
  }, [searchParams]);

  function showResetPassword() {
    setIsDialogOpen(false);
    setIsResetPasswordOpen(true);
  }

  function showForm() {
    setIsResetPasswordOpen(false);
    setIsDialogOpen(true);
  }

  function handleDialogClose(open: boolean) {
    setIsDialogOpen(open);
    if (!open) {
      setSearchParams({});
    }
  }

  function handleResetPasswordClose(open: boolean) {
    setIsResetPasswordOpen(open);
    if (!open) {
      setSearchParams({});
    }
  }

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
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
                Don't have an account?{" "}
                <Link
                  to={"/create-campaign"}
                  className="font-medium text-[#6360F0] underline"
                >
                  Sign up
                </Link>
              </DialogDescription>
            </DialogHeader>

            {formType === "password" && (
              <PasswordForm showResetPassword={showResetPassword} />
            )}
            {formType === "magicLink" && (
              <MagicLinkForm setIsDialogOpen={setIsDialogOpen} />
            )}
          </article>

          <OrDivider />
          <Oauth formType={formType} setFormType={setFormType} />
        </DialogContent>
      </Dialog>
      <ResetPassword
        isResetPasswordOpen={isResetPasswordOpen}
        setIsResetPasswordOpen={handleResetPasswordClose}
        showForm={showForm}
      />
    </>
  );
}
