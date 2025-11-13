import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

const formSchema = z.object({
  amount: z.string().min(1, "amount is required"),
});

export default function PaymentCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <article className="w-full space-y-14 rounded-2xl border border-[#F0F0F0] bg-[#FFFFFF80] px-4 py-6 md:w-[400px]">
      <div className="space-y-3">
        <div className="space-y-1">
          <h6 className="text-[#5D5757]">Target</h6>
          <h1 className="font-mackinac text-xl font-bold text-[#0E021A] md:text-4xl">
            GHS 90,000
          </h1>
        </div>
        <div className="h-4 w-full rounded-full bg-[#FFD9C9]">
          <div
            className="h-full w-full rounded-full bg-[#FF7B42]"
            style={{ width: "50%" }}
          ></div>
        </div>
        <div className="flex items-center justify-between text-sm md:text-base">
          <p className="text-[#5D5757]">
            GHS 30,000 <span>raised so far</span>
          </p>

          <p className="text-[#5D5757]">
            30 <span>donations</span>
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            id="payment"
            className="font-sans"
          >
            <FieldGroup>
              <Controller
                name="amount"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-0.5">
                    <FieldLabel
                      htmlFor="payment"
                      className="text-sm font-medium text-[#0A0A0A]"
                    >
                      How much would you want to date?
                    </FieldLabel>
                    <div className="relative">
                      <Input
                        {...field}
                        id="payment"
                        aria-invalid={fieldState.invalid}
                        placeholder="0.00"
                        autoComplete="off"
                        className="pl-12 shadow-none"
                        type="amount"
                        min={1}
                      />
                      <p className="absolute top-2 left-2.5 text-sm font-medium text-[#0A0A0A]">
                        GHS
                      </p>
                    </div>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <button className="font-mackinac flex w-full cursor-pointer items-center justify-center gap-4 rounded-full bg-[#5C59ED] px-6 py-2 text-sm font-medium text-white md:text-lg">
                Donate
              </button>
            </FieldGroup>
          </form>
        </div>
      </div>
    </article>
  );
}
