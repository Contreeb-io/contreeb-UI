import { ArrowRight, PenLine, X } from "lucide-react";
import { useState } from "react";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useMultiStepForm } from "../../context/multi-step-context";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function MomoForm() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const { form } = useMultiStepForm();

  const walletData = form.watch(["account_name", "network", "number"]);
  const [accountName, network, number] = walletData;

  const hasWalletData = accountName && network && number;

  async function handleSubmit() {
    const isValid = await form.trigger(["account_name", "network", "number"]);
    if (isValid) {
      setShowPaymentModal(false);
    }
  }

  return (
    <article>
      <p className="text-sm font-medium text-[#150524]">Payment wallet</p>
      <div className="flex w-full flex-col items-center justify-center gap-6 rounded-[8px] bg-white p-4 backdrop-blur-sm md:flex-row md:gap-16">
        {!hasWalletData && (
          <div className="flex flex-col items-center gap-4">
            <h5 className="text-sm font-medium text-[#404040]">
              Link your wallet to receive payments from your donors
            </h5>
            <button
              type="button"
              onClick={() => setShowPaymentModal(true)}
              className="flex items-center gap-2 text-sm font-medium text-[#6360F0]"
            >
              Link wallet <ArrowRight size={14} />
            </button>
          </div>
        )}
        {hasWalletData && (
          <div className="flex w-full items-start justify-between font-sans">
            <div className="space-y-2">
              <div>
                <h5 className="text-sm text-[#737373]">Network provider</h5>
                <p className="font-medium text-[#404040]">{network}</p>
              </div>
              <div>
                <h5 className="text-sm text-[#737373]">Account name</h5>
                <p className="font-medium text-[#404040]">{accountName}</p>
              </div>
              <div>
                <h5 className="text-sm text-[#737373]">Account number</h5>
                <p className="font-medium text-[#404040]">{number}</p>
              </div>
            </div>
            <div
              className="flex items-center justify-center gap-2 rounded-full bg-[#F0F2F5] px-3 py-2 text-sm"
              onClick={() => setShowPaymentModal(true)}
            >
              Change <PenLine size={14} />
            </div>
          </div>
        )}
      </div>

      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        {/* <DialogTrigger></DialogTrigger> */}

        <DialogContent
          className="flex w-[96%] flex-col gap-8 rounded-2xl p-8 md:max-w-[586px]"
          showCloseButton={false}
        >
          <article className="flex items-center justify-between">
            <DialogHeader>
              <DialogTitle className="font-mackinac text-left text-xl font-bold text-[#010040]">
                Link Payment Wallet
              </DialogTitle>
              <DialogDescription className="text-left font-sans text-[#5D5757]">
                Add a payment wallet to receive money from donors
              </DialogDescription>
            </DialogHeader>
            <div
              className="size-9 cursor-pointer rounded-full bg-[#E3EFFC] p-2"
              onClick={() => setShowPaymentModal(false)}
            >
              <X size={18} color="#101928" />
            </div>
          </article>
          <FieldGroup>
            {" "}
            <Controller
              name="network"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  orientation="vertical"
                  className="gap-1"
                >
                  <FieldLabel
                    htmlFor="network"
                    className="text-sm text-[#150524]"
                  >
                    Account name
                  </FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="network"
                      aria-invalid={fieldState.invalid}
                      className="flex w-[220px] border border-[#F0F2F5] bg-white shadow-none"
                    >
                      <SelectValue placeholder="Select your network provider" />
                    </SelectTrigger>
                    <SelectContent
                      position="item-aligned"
                      className="w-full text-sm font-medium text-[#150524]"
                    >
                      <SelectItem value="mtn">MTN</SelectItem>
                      <SelectItem value="telecel">Telecel</SelectItem>
                      <SelectItem value="at">Airtel Tigo</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="number"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel
                    htmlFor="number"
                    className="text-sm text-[#150524]"
                  >
                    Phone number
                  </FieldLabel>
                  <PhoneInput
                    international
                    autoComplete="off"
                    placeholder="Enter phone number"
                    defaultCountry="GH"
                    {...field}
                    inputComponent={Input}
                    className="border-input g flex items-center rounded-md border bg-white px-2 shadow-none"
                    numberInputProps={{
                      className:
                        "flex-1 bg-transparent outline-none shadow-none border-none focus:ring-0 focus:outline-none",
                    }}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="account_name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel
                    htmlFor="account_name"
                    className="text-sm text-[#150524]"
                  >
                    Account name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="account_name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Kwaku Krah"
                    autoComplete="off"
                    className="shadow-none"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <button
              onClick={handleSubmit}
              className="mt-4 w-full rounded-full bg-[#6360F0] px-4 py-3 text-sm font-semibold text-white"
            >
              Add wallet
            </button>
          </FieldGroup>
        </DialogContent>
      </Dialog>
    </article>
  );
}
