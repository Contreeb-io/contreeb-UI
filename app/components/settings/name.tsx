import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z from "zod/v3";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 5 characters.")
    .max(32, "Name title must be at most 32 characters."),
  bio: z
    .string()
    .min(5, "bio must be at least 20 characters.")
    .max(100, "bio must be at most 100 characters."),
});

export default function Name() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <form id="form-update-profile" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-0">
              <FieldLabel
                htmlFor="form-update-profile-name"
                className="text-sm font-medium text-[#150524]"
              >
                Name
              </FieldLabel>
              <Input
                {...field}
                id="form-update-profile-name"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your name"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="bio"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-0">
              <FieldLabel
                htmlFor="form-update-profile-bio"
                className="text-sm font-medium text-[#150524]"
              >
                Bio
              </FieldLabel>
              <Textarea
                {...field}
                id="form-update-profile-bio"
                aria-invalid={fieldState.invalid}
                placeholder="Add a cute story about yourself"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <button className="self-start rounded-full bg-[#6360F0] px-4 py-2 text-sm font-semibold text-white">
          Save changes
        </button>
      </FieldGroup>
    </form>
  );
}
