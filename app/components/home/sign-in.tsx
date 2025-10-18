import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import OrDivider from "../ui/or-divider";
import Oauth from "./oauth";

const formSchema = z.object({
  email: z.email("email is invalid"),
  password: z
    .string()
    .min(8, "password must be at least 8 characters.")
    .max(100, "password must be at most 100 characters.")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
      "password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.",
    ),
});

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

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
              Sign in to Contreeb.io
            </DialogTitle>
            <DialogDescription className="text-left font-sans text-[#5D5757]">
              Don’t have an account?{" "}
              <Link to={"#"} className="font-medium text-[#6360F0] underline">
                Sign up
              </Link>
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            id="signin"
            className="font-sans"
          >
            {" "}
            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-1">
                    <FieldLabel
                      htmlFor="signin-email"
                      className="text-sm text-[#150524]"
                    >
                      Email
                    </FieldLabel>
                    <Input
                      {...field}
                      id="signin-email"
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
              <Link
                to={"#"}
                className="-mt-2 ml-auto font-medium text-[#6360F0] underline"
              >
                Forgot password?
              </Link>
            </FieldGroup>
            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-[#6360F0] px-4 py-3 text-sm font-semibold text-white"
            >
              Submit
            </button>
          </form>
        </article>

        <OrDivider />
        <Oauth />
      </DialogContent>
    </Dialog>
  );
}
