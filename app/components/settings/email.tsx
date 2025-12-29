import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Ellipsis, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import z from "zod/v3";
import { useAuth } from "../../context/auth-context";
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

const formSchema = z.object({
  code: z
    .string()
    .min(8, "Verification code is 8 characters.")
    .max(8, "Verification code is 8 characters."),
});

export default function Email() {
  const { user } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <section className="space-y-6">
      <h5 className="font-mackinac font-bold text-[#0E021A] md:text-[22px]">
        Email address
      </h5>
      <article className="flex items-center justify-between gap-1.5 font-sans">
        <div className="space-y-2">
          <h6 className="font-medium text-[#150524]">{user?.email}</h6>
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
            <p className="text-sm font-medium text-[#667185]">
              Verify email address to keep your account secure
            </p>{" "}
            <Dialog>
              <DialogTrigger
                className={`flex items-center justify-center gap-2 rounded-[8px] px-2 py-0.5 text-xs font-medium ${
                  user?.email_verified
                    ? "bg-green-100 py-1 text-green-600"
                    : "bg-[#FBE2B7] text-[#865503]"
                }`}
              >
                {" "}
                {user?.email_verified ? (
                  "Verified"
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Verify <ArrowUpRight size={18} />
                  </span>
                )}
              </DialogTrigger>
              <DialogContent
                className="top-[95%] flex max-h-[98%] w-[96%] translate-y-[-95%] flex-col gap-8 overflow-y-auto rounded-2xl p-8 pb-10 md:top-[50%] md:max-w-[403px] md:translate-y-[-50%]"
                showCloseButton={false}
              >
                <article className="flex justify-between gap-8">
                  <div className="space-y-2">
                    <DialogTitle className="font-mackinac text-2xl font-bold text-[#0E021A]">
                      Verify email
                    </DialogTitle>
                    <DialogDescription className="font-sans text-[#5D5757]">
                      An 8-digit verification code has been sent to your email
                      address.
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
                  id="form-update-email"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FieldGroup>
                    <Controller
                      name="code"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field
                          data-invalid={fieldState.invalid}
                          className="gap-0"
                        >
                          <FieldLabel
                            htmlFor="form-update-email"
                            className="text-sm font-medium text-[#150524]"
                          >
                            Enter code
                          </FieldLabel>
                          <Input
                            {...field}
                            id="form-update-email"
                            aria-invalid={fieldState.invalid}
                            placeholder="0 0 0 0 - 0 0 0 0"
                            autoComplete="off"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />{" "}
                  </FieldGroup>

                  <button className="mt-8 w-full rounded-full bg-[#6360F0] px-4 py-3 text-sm font-semibold text-white">
                    Verify code
                  </button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <Ellipsis color="#0E021A" size={14} />
      </article>
    </section>
  );
}
