import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import z from "zod/v3";
import { useAuth } from "../../context/auth-context";
import { updatePassword } from "../../lib/auth";
import { successStyle } from "../../lib/http";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, "password must be at least 8 characters.")
      .max(100, "password must be at most 100 characters.")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
        "password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.",
      ),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "passwords do not match",
    path: ["password_confirmation"],
  });

export default function Password() {
  const { user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  const { isPending, mutate } = useMutation({
    mutationFn: updatePassword,
    onSuccess: (data) => {
      if (data.message) {
        toast.success(data.message, { style: successStyle });
        form.reset();
        document.getElementById("close")?.click();
      }
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    if (user) {
      mutate({ ...data, id: user?.id });
    }
  }

  return (
    <section className="space-y-6">
      {" "}
      <h5 className="font-mackinac font-bold text-[#0E021A] md:text-[22px]">
        Password
      </h5>
      <article className="flex flex-col items-start justify-between gap-x-6 gap-y-4 font-sans md:flex-row md:items-center">
        <div className="space-y-2">
          <h6 className="font-medium text-[#150524]">Account password</h6>
          <p className="text-sm font-medium text-[#667185]">
            Password keeps your account secure
          </p>
        </div>
        <Dialog>
          <DialogTrigger className="rounded-full bg-[#F0F2F5] px-4 py-2 font-medium text-[#0E021A]">
            Change password
          </DialogTrigger>
          <DialogContent
            className="top-[95%] flex max-h-[98%] w-[96%] translate-y-[-95%] flex-col gap-8 overflow-y-auto rounded-2xl p-8 pb-10 md:top-[50%] md:max-w-[484px] md:translate-y-[-50%]"
            showCloseButton={false}
          >
            <article className="flex justify-between gap-8">
              <div className="space-y-2">
                <DialogTitle className="font-mackinac text-2xl font-bold text-[#0E021A]">
                  Change password
                </DialogTitle>
                <DialogDescription className="font-sans text-[#5D5757]">
                  Update your password to secure account. Please choose a strong
                  password of at least 8 characters.
                </DialogDescription>
              </div>

              <DialogClose
                id="close"
                className="flex size-9 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#E3EFFC] p-2"
              >
                <X size={16} color="#101928" />
              </DialogClose>
            </article>

            <form
              id="form-update-password"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FieldGroup>
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="gap-1">
                      <FieldLabel
                        htmlFor="signin-password"
                        className="text-sm text-[#150524]"
                      >
                        Password
                      </FieldLabel>
                      <div className="relative">
                        <Input
                          {...field}
                          id="signin-password"
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter password"
                          autoComplete="off"
                          type={showPassword ? "text" : "password"}
                          className="shadow-none"
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-2 bottom-2"
                        >
                          {showPassword ? (
                            <Eye
                              color="#667185"
                              size={20}
                              className="cursor-pointer"
                            />
                          ) : (
                            <EyeOff
                              color="#667185"
                              size={20}
                              className="cursor-pointer"
                            />
                          )}
                        </button>
                      </div>

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="password_confirmation"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="gap-1">
                      <FieldLabel
                        htmlFor="signin-confirm-password"
                        className="text-sm text-[#150524]"
                      >
                        Confirm Password
                      </FieldLabel>
                      <div className="relative">
                        <Input
                          {...field}
                          id="signin-confirm-password"
                          aria-invalid={fieldState.invalid}
                          placeholder="Confirm password"
                          autoComplete="off"
                          type={showConfirmPassword ? "text" : "password"}
                          className="shadow-none"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-2 bottom-2"
                        >
                          {showConfirmPassword ? (
                            <Eye
                              color="#667185"
                              size={20}
                              className="cursor-pointer"
                            />
                          ) : (
                            <EyeOff
                              color="#667185"
                              size={20}
                              className="cursor-pointer"
                            />
                          )}
                        </button>
                      </div>

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
              <Button
                variant="custom"
                isLoading={isPending}
                disabled={isPending}
              >
                Update password
              </Button>
              <Link
                to={"/?forgot_password=true"}
                className="mt-3 flex justify-center py-3 text-[#667185]"
              >
                Forgot password?
              </Link>
            </form>
          </DialogContent>
        </Dialog>
      </article>
    </section>
  );
}
