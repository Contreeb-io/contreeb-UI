import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod/v3";
import { useMultiStepForm } from "~/context/multi-step-context";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import Back from "./back";
import Header from "./header";

const formSchema = z
  .object({
    name: z.string().min(3, "name should be at least 3 characters"),
    email: z.string().email("email is invalid"),
    password: z
      .string()
      .min(8, "password must be at least 8 characters.")
      .max(100, "password must be at most 100 characters.")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
        "password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.",
      ),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "passwords do not match",
    path: ["confirm_password"],
  });

export default function AccountForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { prevStep } = useMultiStepForm();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <section className="mx-auto max-w-[654px] space-y-6">
      <Header
        header="Finish creating your campaign"
        desc="Complete creating your campaign by setting up your  account "
      />

      <form className="mt-8" onSubmit={form.handleSubmit(onSubmit)} id="signup">
        <FieldGroup className="space-y-2">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1">
                <FieldLabel
                  htmlFor="signup-name"
                  className="text-sm text-[#150524]"
                >
                  Name
                </FieldLabel>
                <Input
                  {...field}
                  id="signup-name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Nessa.Linn"
                  autoComplete="off"
                  className="shadow-none"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1">
                <FieldLabel
                  htmlFor="signup-email"
                  className="text-sm text-[#150524]"
                >
                  Email
                </FieldLabel>
                <Input
                  {...field}
                  id="signup-email"
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
            name="confirm_password"
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
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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

        <button type="submit" className="hidden" id="submit">
          submit
        </button>
      </form>

      <article className="flex items-center justify-between">
        <Back />

        <div className="md:max-w-[226px] md:flex-1">
          {" "}
          <button
            onClick={() => {
              document.getElementById("submit")?.click();
            }}
            className="cursor-pointer rounded-full bg-[#6360F0] px-4 py-3 text-white disabled:bg-[#D7D0DD] disabled:text-white md:w-full"
          >
            Create campaign
          </button>
        </div>
      </article>
    </section>
  );
}
