import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInputWithCountrySelect, {
  isValidPhoneNumber,
} from "react-phone-number-input";
import { useSubmit } from "react-router";
import z from "zod/v3";
import { useMultiStepForm } from "../../context/multi-step-context";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import Back from "./back";
import Header from "./header";

const formSchema = z
  .object({
    name: z.string().min(3, "name should be at least 3 characters"),
    email: z.string().email("invalid email"),
    phone_number: z
      .string()
      .min(1, "invalid phone number")
      .refine(
        (value) => {
          try {
            return isValidPhoneNumber(value, "GH");
          } catch {
            return false;
          }
        },
        { message: "invalid Ghana phone number" },
      ),
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

export default function AccountForm() {
  const { form: F } = useMultiStepForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const submit = useSubmit();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
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

      <form
        className="relative z-10 mt-8 rounded-2xl bg-white/50 p-6 font-sans"
        onSubmit={form.handleSubmit(onSubmit)}
        id="signup"
      >
        <FieldGroup className="space-y-2">
          <Controller
            name="name"
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
                  className="z-10 shadow-none"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                {F.getValues("type") === "public" && (
                  <div className="rounded-[5px] bg-[#FEF3C7] px-4 py-2 font-sans text-sm font-medium text-[#5D5757]">
                    Your name should appear as it is on your national ID
                  </div>
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
            name="phone_number"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1">
                <FieldLabel htmlFor="number" className="text-sm text-[#150524]">
                  Phone number
                </FieldLabel>
                <PhoneInputWithCountrySelect
                  international
                  autoComplete="off"
                  placeholder="Enter phone number"
                  defaultCountry="GH"
                  {...field}
                  inputComponent={Input}
                  className="border-input flex items-center rounded-md border bg-white! px-2 shadow-none"
                  numberInputProps={{
                    className:
                      "flex-1 bg-transparent relative bg-white z-10 outline-none shadow-none border-none focus:ring-0 focus:outline-none",
                  }}
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

        <div className="relative z-10 md:max-w-[226px] md:flex-1">
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
