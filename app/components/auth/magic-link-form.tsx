import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import type React from "react";
import type { SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import http, { successStyle } from "../../lib/http";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

const formSchema = z.object({
  email: z.email("Invalid email"),
});

export default function MagicLinkForm({
  setIsDialogOpen,
}: {
  setIsDialogOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function requestMagicLink(values: z.infer<typeof formSchema>) {
    const res = await http.post("magic_links", values);
    return res;
  }

  const { mutate, isPending } = useMutation({
    mutationFn: requestMagicLink,
    onSuccess: (data) => {
      toast.success(data.message, { style: successStyle });
      setIsDialogOpen(false);
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return (
    <div>
      <AlertDialog open={false}>
        <AlertDialogContent className="flex w-[98%] flex-col items-center gap-4 md:max-w-[477px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-xl font-bold text-[#010040] md:text-2xl">
              Contreebute.io
            </AlertDialogTitle>
            <AlertDialogDescription className="sr-only">
              confirmation modal for magic link form submission
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div>
            <img src="/mail.webp" alt="mail-success" />
          </div>
          <AlertDialogFooter className="gap-2 sm:flex-col">
            <h6 className="text-center font-medium text-[#010040] md:text-xl">
              Magic link has been sent to your email.
            </h6>
            <p className="text-center text-sm text-[#5D5757] md:text-base">
              A sign in link has been sent to your email, Linn@email.io. Kindly
              click on the link to sign in to your account.
            </p>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        id="signin-magicLink"
        className="font-sans"
      >
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
        </FieldGroup>
        <Button
          type="submit"
          variant="custom"
          disabled={isPending}
          isLoading={isPending}
        >
          Request magic link
        </Button>
      </form>
    </div>
  );
}
