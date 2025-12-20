import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useEffect, type ReactNode, type SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod/v3";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Attachment from "./attachment";
import type { Item } from "./campaign-items";

const formSchema = z.object({
  name: z.string().min(3, "name should be at least 3 characters"),
  amount: z.string().min(1, "price is required"),
  description: z.string().optional(),
  images: z.instanceof(File).optional(),
});

export type ItemType = z.infer<typeof formSchema>;

export default function EditItemForm({
  children,
  setItems,
  idx,
  selectedItem,
}: {
  children: ReactNode;
  setItems: React.Dispatch<SetStateAction<Item[]>>;
  idx: number | null;
  selectedItem: Item;
  items: Item[];
}) {
  const form = useForm<ItemType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: "",
      description: "",
      images: undefined,
    },
  });

  useEffect(() => {
    if (selectedItem) {
      form.reset({
        name: selectedItem.name || "",
        amount: String(selectedItem.amount) || "",
        description: selectedItem.description || "",
        images: selectedItem.images || undefined,
      });
    } else {
      form.reset({
        name: "",
        amount: "",
        description: "",
        images: undefined,
      });
    }
  }, [selectedItem, form]);

  const onSubmit = (data: ItemType) => {
    if (idx !== null) {
      setItems((prev) => {
        const updatedItems = [...prev];
        updatedItems[idx] = { ...data, amount: Number(data.amount) };
        return updatedItems;
      });
    }

    document.getElementById("close")?.click();
    form.reset();
  };

  return (
    <Dialog>
      {children}
      <DialogContent
        className="top-[95%] flex max-h-[98%] w-[96%] translate-y-[-95%] flex-col gap-8 overflow-y-auto rounded-2xl p-8 pb-10 md:top-[50%] md:max-w-[603px] md:translate-y-[-50%]"
        showCloseButton={false}
      >
        <article className="flex items-center justify-between">
          <div>
            <DialogTitle className="font-mackinac text-2xl font-bold text-[#0E021A]">
              Edit Item
            </DialogTitle>
            <DialogDescription className="font-sans text-[#5D5757]">
              Edit your campaign details
            </DialogDescription>
          </div>

          <DialogClose
            id="close"
            className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-[#E3EFFC] p-2"
          >
            <X size={16} color="#101928" />
          </DialogClose>
        </article>
        <form id="add-item" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="space-y-2">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel
                    htmlFor="item-name"
                    className="text-sm text-[#150524]"
                  >
                    Item name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="item-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Gaming Laptop"
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
              name="amount"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel
                    htmlFor="item-price"
                    className="text-sm text-[#150524]"
                  >
                    Price (GHS)
                  </FieldLabel>
                  <Input
                    {...field}
                    id="item-price"
                    aria-invalid={fieldState.invalid}
                    placeholder="1000"
                    autoComplete="off"
                    className="shadow-none"
                    type="number"
                    min={1}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel
                    htmlFor="item-description"
                    className="text-sm text-[#150524]"
                  >
                    Item description{" "}
                    <span className="text-[#150524B2]">(Optional)</span>
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="item-description"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter description..."
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
              name="images"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel
                    htmlFor="item-image"
                    className="text-sm text-[#150524]"
                  >
                    Item image{" "}
                    <span className="text-[#150524B2]">(Optional)</span>
                  </FieldLabel>
                  <Input
                    id="item-image"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter description..."
                    autoComplete="off"
                    className="hidden shadow-none"
                    type="file"
                    accept=".png,.jpg,.jpeg,.svg,.gif,image/svg+xml,image/gif"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                    ref={field.ref}
                  />
                  <Attachment form={form} />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <button className="font-inter mt-5 w-full cursor-pointer rounded-full bg-[#6360F0] px-4 py-3 text-sm font-semibold text-white">
            Add Item
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
