import { ArrowRight, PenLine, X } from "lucide-react";
import { useState } from "react";
import { useFieldArray } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
// @ts-ignore
import "react-phone-number-input/style.css";
import { useMultiStepForm } from "../../context/multi-step-context";
import { capitalizeFirst } from "../../lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
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

  const { fields, append, update } = useFieldArray({
    control: form.control,
    name: "payment_wallets_attributes",
  });

  const hasWalletData = fields.length > 0;
  const walletData = hasWalletData ? fields[0] : null;

  const [accountName, setAccountName] = useState("");
  const [network, setNetwork] = useState("");
  const [momoNumber, setMomoNumber] = useState("");

  async function handleSubmit() {
    if (!accountName || !network || !momoNumber) {
      return;
    }

    let formattedNumber = momoNumber;
    if (momoNumber.startsWith("+233")) {
      formattedNumber = "0" + momoNumber.substring(4);
    } else if (momoNumber.startsWith("233")) {
      formattedNumber = "0" + momoNumber.substring(3);
    }

    const walletEntry = {
      account_name: accountName,
      network: network as "AIRTELTIGO" | "MTN" | "TELECEL",
      momo_number: formattedNumber,
    };

    if (hasWalletData) {
      update(0, walletEntry);
    } else {
      append(walletEntry);
    }

    setShowPaymentModal(false);
  }

  function handleOpenModal() {
    if (hasWalletData && walletData) {
      setAccountName(walletData.account_name);
      setNetwork(walletData.network);
      setMomoNumber(walletData.momo_number);
    } else {
      setAccountName("");
      setNetwork("");
      setMomoNumber("");
    }
    setShowPaymentModal(true);
  }

  return (
    <article>
      <p className="text-sm font-medium text-[#150524]">Payment wallet</p>
      <div className="mt-1.5 flex w-full flex-col items-center justify-center gap-6 rounded-xl bg-white p-4 backdrop-blur-sm md:flex-row md:gap-16">
        {!hasWalletData && (
          <div className="flex flex-col items-center gap-4">
            <h5 className="text-sm font-medium text-[#404040]">
              Link your wallet to receive payments from your donors
            </h5>
            <button
              type="button"
              onClick={handleOpenModal}
              className="flex items-center gap-2 text-sm font-medium text-[#6360F0]"
            >
              Link wallet <ArrowRight size={14} />
            </button>
          </div>
        )}
        {hasWalletData && walletData && (
          <div className="flex w-full items-start justify-between font-sans">
            <div className="space-y-2">
              <div>
                <h5 className="text-sm text-[#737373]">Network provider</h5>
                <p className="font-medium text-[#404040]">
                  {capitalizeFirst(walletData.network)}
                </p>
              </div>
              <div>
                <h5 className="text-sm text-[#737373]">Account name</h5>
                <p className="font-medium text-[#404040]">
                  {walletData.account_name}
                </p>
              </div>
              <div>
                <h5 className="text-sm text-[#737373]">Account number</h5>
                <p className="font-medium text-[#404040]">
                  {walletData.momo_number}
                </p>
              </div>
            </div>
            <div
              className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F0F2F5] px-3 py-2 text-sm"
              onClick={handleOpenModal}
            >
              Change <PenLine size={14} />
            </div>
          </div>
        )}
      </div>

      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent
          className="flex w-[96%] flex-col gap-8 rounded-2xl p-8 md:max-w-146.5"
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
            <Field className="gap-1">
              <FieldLabel htmlFor="network" className="text-sm text-[#150524]">
                Network provider
              </FieldLabel>
              <Select value={network} onValueChange={setNetwork}>
                <SelectTrigger
                  id="network"
                  className="flex w-full border border-[#F0F2F5] bg-white shadow-none"
                >
                  <SelectValue placeholder="Select your network provider" />
                </SelectTrigger>
                <SelectContent
                  position="item-aligned"
                  className="w-full text-sm font-medium text-[#150524]"
                >
                  <SelectItem value="MTN">MTN</SelectItem>
                  <SelectItem value="TELECEL">Telecel</SelectItem>
                  <SelectItem value="AIRTELTIGO">Airtel Tigo</SelectItem>
                </SelectContent>
              </Select>
            </Field>

            <Field className="gap-1">
              <FieldLabel htmlFor="number" className="text-sm text-[#150524]">
                Phone number
              </FieldLabel>
              <PhoneInput
                international
                autoComplete="off"
                placeholder="Enter phone number"
                defaultCountry="GH"
                value={momoNumber}
                onChange={(value) => setMomoNumber(value || "")}
                inputComponent={Input}
                className="border-input g flex items-center rounded-md border bg-white px-2 shadow-none"
                numberInputProps={{
                  className:
                    "flex-1 bg-transparent outline-none shadow-none border-none focus:ring-0 focus:outline-none",
                }}
              />
            </Field>

            <Field className="gap-1">
              <FieldLabel
                htmlFor="account_name"
                className="text-sm text-[#150524]"
              >
                Account name
              </FieldLabel>
              <Input
                id="account_name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                placeholder="Kwaku Krah"
                autoComplete="off"
                className="shadow-none"
              />
            </Field>

            <button
              type="button"
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
