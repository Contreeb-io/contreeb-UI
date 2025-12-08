import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, X } from "lucide-react";
import { useState, type SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

const formSchema = z.object({
  email: z.email("Invalid email"),
});

type FormType = z.infer<typeof formSchema>;

export default function ResetPassword({
  isResetPasswordOpen,
  setIsResetPasswordOpen,
  showForm,
}: {
  isResetPasswordOpen: boolean;
  setIsResetPasswordOpen: React.Dispatch<SetStateAction<boolean>>;
  showForm: () => void;
}) {
  const [isSuccess] = useState(false);
  const [submittedEmail] = useState("");

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: FormType) {
    console.log(values);
  }

  return (
    <Dialog open={isResetPasswordOpen} onOpenChange={setIsResetPasswordOpen}>
      <DialogContent
        className="flex w-[96%] flex-col gap-5 rounded-2xl p-8 md:max-w-[477px]"
        showCloseButton={false}
      >
        {isSuccess ? (
          <>
            <div
              onClick={() => setIsResetPasswordOpen(false)}
              className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-[#E3EFFC]"
            >
              <X color="#343330" size={18} />
            </div>
            <DialogHeader>
              <DialogTitle className="font-mackinac text-xl font-bold text-[#010040]">
                Verification email sent
              </DialogTitle>
              <DialogDescription className="text-[#5D5757]">
                A verification link has been sent to your email,{" "}
                <span className="font-medium text-[#010040]">
                  {submittedEmail}
                </span>
                . Kindly click on the link to reset your password.
              </DialogDescription>
            </DialogHeader>
            <div className="text-sm text-[#5D5757]">
              Didn't receive any link?{" "}
              <button
                // onClick={handleResend}
                className="font-semibold text-[#010040] hover:underline"
              >
                Resend
              </button>
            </div>
          </>
        ) : (
          <>
            <div
              onClick={showForm}
              className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-[#E3EFFC]"
            >
              <ArrowLeft color="#343330" size={18} />
            </div>
            <DialogHeader>
              <DialogTitle className="font-mackinac text-xl font-bold text-[#010040]">
                Reset password
              </DialogTitle>
              <DialogDescription className="text-[#5D5757]">
                Enter your email address and we will send you a link to reset
                your password
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              id="reset-password"
              className="font-sans"
            >
              <FieldGroup>
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="gap-1">
                      <FieldLabel
                        htmlFor="reset-password-email"
                        className="text-sm text-[#150524]"
                      >
                        Email
                      </FieldLabel>
                      <Input
                        {...field}
                        id="reset-password-email"
                        aria-invalid={fieldState.invalid}
                        placeholder="Nessa.Linn@contreeb.io"
                        autoComplete="off"
                        className="shadow-none"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
              <Button type="submit" variant="custom">
                Send reset link
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
