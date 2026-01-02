import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { X } from "lucide-react";
import { useEffect, type SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { queryClient } from "../../app";
import { queryKeys } from "../../constant";
import { successStyle } from "../../lib/http";
import { addWallet, editWallet } from "../../lib/payment-wallet";
import type { Wallet } from "../../types";
import { Button } from "../ui/button";
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

const formSchema = z.object({
  account_name: z.string().min(3, "name should be at least 3 characters"),
  momo_number: z
    .string()
    .min(10, "number should be at should be 10 characters")
    .max(10, "number should be at should be 10 characters"),
  network: z.enum(["AIRTELTIGO", "MTN", "TELECEL"]),
});

export type WalletType = z.infer<typeof formSchema>;

export default function PaymentModal({
  showModal,
  setShowModal,
  walletToEdit,
  setWalletToEdit,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  walletToEdit: Wallet | null;
  setWalletToEdit: React.Dispatch<SetStateAction<Wallet | null>>;
}) {
  const form = useForm<WalletType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      account_name: walletToEdit?.account_name || "",
      momo_number: walletToEdit?.momo_number || "",
      network: walletToEdit?.network || "MTN",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: addWallet,
    onSuccess: (data) => {
      setShowModal(false);
      form.reset();
      toast.success(data?.message || "payment wallet added successfully", {
        style: successStyle,
      });
      queryClient.invalidateQueries({ queryKey: queryKeys.wallets });
    },
  });

  const { mutate: edit, isPending: isEditing } = useMutation({
    mutationFn: editWallet,
    onSuccess: (data) => {
      setShowModal(false);
      form.reset();
      toast.success(data?.message || "payment wallet added successfully", {
        style: successStyle,
      });
      queryClient.invalidateQueries({ queryKey: queryKeys.wallets });
    },
  });

  const onSubmit = (data: WalletType) => {
    if (walletToEdit) {
      edit({ ...data, id: walletToEdit.id });
    } else {
      mutate(data);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setShowModal(open);
    if (!open) {
      setWalletToEdit(null);
    }
  };

  useEffect(() => {
    if (walletToEdit) {
      form.reset({
        account_name: walletToEdit.account_name,
        momo_number: walletToEdit.momo_number,
        network: walletToEdit.network,
      });
    } else {
      form.reset({
        account_name: "",
        momo_number: "",
        network: "MTN",
      });
    }
  }, [walletToEdit, form]);

  return (
    <Dialog open={showModal} onOpenChange={handleOpenChange}>
      <DialogContent
        className="flex w-[96%] flex-col gap-8 rounded-2xl p-8 md:max-w-146.5"
        showCloseButton={false}
      >
        <article className="flex items-center justify-between gap-3">
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
            onClick={() => handleOpenChange(false)}
          >
            <X size={18} color="#101928" />
          </div>
        </article>
        <form onSubmit={form.handleSubmit(onSubmit)} id="wallet-form">
          <FieldGroup>
            <Field className="gap-1">
              <FieldLabel htmlFor="network" className="text-sm text-[#150524]">
                Network provider
              </FieldLabel>
              <Controller
                control={form.control}
                name="network"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
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
                )}
              />
            </Field>

            <Controller
              name="momo_number"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel
                    htmlFor="momo-number"
                    className="text-sm text-[#150524]"
                  >
                    Phone number
                  </FieldLabel>
                  <Input
                    {...field}
                    id="momo-number"
                    aria-invalid={fieldState.invalid}
                    placeholder="02XXXXXXXX"
                    autoComplete="off"
                    className="z-10 shadow-none"
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
                    htmlFor="momo-name"
                    className="text-sm text-[#150524]"
                  >
                    Account name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="momo-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Kwaku Krah"
                    autoComplete="off"
                    className="z-10 shadow-none"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Button
              disabled={isPending || isEditing}
              isLoading={isPending || isEditing}
              variant="custom"
              type="submit"
            >
              {walletToEdit ? "Edit wallet" : "Add wallet"}
            </Button>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
}
