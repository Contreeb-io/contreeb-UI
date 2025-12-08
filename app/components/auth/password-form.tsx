import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import z from "zod";
import { TOKEN_KEY, useAuth } from "../../context/auth-context";
import { passwordLogin } from "../../lib/auth";
import token from "../../lib/token";
import { Button } from "../ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

const formSchema = z.object({
  email: z.email("Invalid email"),
  password: z
    .string()
    .min(8, "password must be at least 8 characters.")
    .max(100, "password must be at most 100 characters.")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
      "password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.",
    ),
});

export type PasswordSignUp = z.infer<typeof formSchema>;

export default function PasswordForm({
  showResetPassword,
}: {
  showResetPassword: () => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const form = useForm<PasswordSignUp>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: passwordLogin,
    onSuccess: (res) => {
      if (res) {
        token.set(TOKEN_KEY, res.data.token, res.data.expired_at);
        setUser(res.user);
        navigate("/dashboard");
      }
    },
  });

  function onSubmit(data: PasswordSignUp) {
    mutate(data);
  }

  return (
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
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
                    <Eye color="#667185" size={20} className="cursor-pointer" />
                  ) : (
                    <EyeOff
                      color="#667185"
                      size={20}
                      className="cursor-pointer"
                    />
                  )}
                </button>
              </div>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <p
          onClick={() => showResetPassword()}
          className="-mt-2 ml-auto cursor-pointer font-medium text-[#6360F0] underline"
        >
          Forgot password?
        </p>
      </FieldGroup>
      <Button
        disabled={isPending}
        isLoading={isPending}
        type="submit"
        variant="custom"
      >
        Submit
      </Button>
    </form>
  );
}
