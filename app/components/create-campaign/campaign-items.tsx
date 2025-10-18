import { Plus } from "lucide-react";
import { useState } from "react";
import { useMultiStepForm } from "~/context/multi-step-context";
import { DialogTrigger } from "../ui/dialog";
import AddItemForm from "./add-item-form";
import Back from "./back";
import Header from "./header";
import SelectedItems from "./selected-items";
import SuccessDialog from "./success-dialog";

export interface Item {
  name: string;
  price: number;
  description?: string | undefined;
  image?: File | undefined;
}

export default function CampaignItems() {
  const { nextStep } = useMultiStepForm();
  const [items, setItems] = useState<Item[]>([]);
  return (
    <section className="mx-auto max-w-[902px] space-y-6">
      <Header
        header="Add Campaign Items"
        desc="Add items to your campaign. Drag to reorder."
      />

      <section className="flex flex-col gap-2">
        {items.length > 0 && (
          <AddItemForm setItems={setItems}>
            <DialogTrigger className="font-inter flex w-full cursor-pointer items-center justify-center gap-2 self-end rounded-full border border-[#6360F0] px-3 py-2.5 text-sm font-semibold text-[#6360F0] md:ml-auto md:max-w-[185px]">
              <Plus />
              Add new item
            </DialogTrigger>
          </AddItemForm>
        )}
        <article className="flex h-[372px] items-center justify-center overflow-y-auto rounded-2xl bg-white/50 px-6 pb-5 md:h-[402px]">
          {items.length === 0 ? (
            <article className="flex max-w-[238px] flex-col items-center gap-y-6">
              <img src={"/empty-state.webp"} alt="empty-state" />

              <div className="space-y-2 text-center">
                <h5 className="font-mackinac font-bold text-[#0E021A]">
                  No Item(s) added
                </h5>
                <p className="font-sans text-sm text-[#595959]">
                  Add item(s) to your campaign and they appear here
                </p>
              </div>

              <AddItemForm setItems={setItems}>
                <DialogTrigger className="font-inter flex cursor-pointer items-center justify-center gap-2.5 bg-transparent p-3 text-sm font-semibold text-[#5C59ED]">
                  <Plus />
                  Add item
                </DialogTrigger>
              </AddItemForm>
            </article>
          ) : (
            <SelectedItems items={items} setItems={setItems} />
          )}
        </article>
      </section>

      <article className="font-inter flex items-center justify-between">
        <Back />

        <div className="md:max-w-[443px] md:flex-1">
          {" "}
          <button
            onClick={nextStep}
            className="cursor-pointer rounded-full bg-[#6360F0] px-4 py-3 text-white disabled:bg-[#D7D0DD] disabled:text-white md:w-full"
          >
            Create campaign
          </button>
        </div>
      </article>

      <SuccessDialog />
    </section>
  );
}
