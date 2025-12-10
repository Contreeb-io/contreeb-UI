import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Check, Eye, EyeOff, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";
import { Button } from "../components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "../components/ui/field";
import { Input } from "../components/ui/input";
import { useQueryParams } from "../hooks/use-searchParams";
import { resetPassword } from "../lib/auth";
import { successStyle } from "../lib/http";

const formSchema = z
  .object({
    token: z.string(),
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

export type ResetPasswordType = z.infer<typeof formSchema>;

function PasswordValidation({ password }: { password: string }) {
  const validations = [
    {
      label: "Minimum of 8 characters",
      isValid: password.length >= 8,
    },
    {
      label: "Both upper and lowercase characters",
      isValid: /(?=.*[a-z])(?=.*[A-Z])/.test(password),
    },
    {
      label: "One special character",
      isValid: /[^A-Za-z0-9]/.test(password),
    },
    {
      label: "Least one number",
      isValid: /\d/.test(password),
    },
  ];

  return (
    <div className="space-y-2 px-4">
      {validations.map((validation, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className={`flex h-4 w-4 items-center justify-center rounded-full ${
              validation.isValid
                ? "bg-[#16A34A]"
                : "border border-[#F0F0F0] bg-[#F0F0F0]"
            }`}
          >
            {validation.isValid && (
              <Check size={12} color="white" strokeWidth={3} />
            )}
          </div>
          <span
            className={`text-sm ${
              validation.isValid ? "text-[#16A34A]" : "text-[#6B7280]"
            }`}
          >
            {validation.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function PasswordMatchValidation({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) {
  const isMatch =
    password === confirmPassword &&
    password.length > 0 &&
    confirmPassword.length > 0;

  return (
    <div className="space-y-2 px-4">
      <div className="flex items-center gap-2">
        <div
          className={`flex h-4 w-4 items-center justify-center rounded-full ${
            isMatch ? "bg-[#16A34A]" : "border border-[#F0F0F0] bg-[#F0F0F0]"
          }`}
        >
          {isMatch && <Check size={12} color="white" strokeWidth={3} />}
        </div>
        <span
          className={`text-sm ${isMatch ? "text-[#16A34A]" : "text-[#6B7280]"}`}
        >
          Passwords must match
        </span>
      </div>
    </div>
  );
}

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const { query } = useQueryParams("token");

  const form = useForm<ResetPasswordType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      token: "",
      password: "",
      password_confirmation: "",
    },
  });

  function onSubmit(values: ResetPasswordType) {
    mutate(values);
  }

  const { mutate, isPending } = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      if (data) {
        toast.success(data.message, { style: successStyle });
        navigate("/");
      }
    },
  });

  const passwordValue = form.watch("password");
  const confirmPasswordValue = form.watch("password_confirmation");

  useEffect(() => {
    form.setValue("token", query);
  }, [query]);

  return (
    <section className="sidebar flex min-h-screen flex-col px-4 md:px-6">
      <nav className="flex h-16 items-center">
        <img src="/logo.svg" alt="Contreebute-logo" className="h-10 w-32" />
      </nav>
      <main className="mx-auto flex w-full flex-1 flex-col items-center justify-center gap-8 md:w-[413px]">
        <div className="w-full space-y-2">
          <h5 className="font-mackinac text-lg font-bold text-[#010040] md:text-xl">
            Reset password
          </h5>
          <p className="font-sans text-sm text-[#5D5757] md:text-base">
            Enter a new password to secure your account
          </p>
        </div>
        <form
          className="w-full font-sans"
          onSubmit={form.handleSubmit(onSubmit)}
          id="reset-password"
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
                      className="px-8 shadow-none"
                    />

                    <Lock
                      color="#525252"
                      size={16}
                      className="absolute bottom-2.5 left-2"
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
                      className="px-8 shadow-none"
                    />

                    <Lock
                      color="#525252"
                      size={16}
                      className="absolute bottom-2.5 left-2"
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
          <div className="my-6">
            <PasswordValidation password={passwordValue} />
            <PasswordMatchValidation
              password={passwordValue}
              confirmPassword={confirmPasswordValue}
            />
          </div>
          <Button
            variant="custom"
            className="button-shadow"
            disabled={isPending}
            isLoading={isPending}
          >
            Change password
          </Button>
        </form>
      </main>
    </section>
  );
}
