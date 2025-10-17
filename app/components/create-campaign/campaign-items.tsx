import { Plus } from "lucide-react";
import { useMultiStepForm } from "~/context/multi-step-context";
import Back from "./back";
import Header from "./header";
import SuccessDialog from "./success-dialog";

export default function CampaignItems() {
  const { nextStep, prevStep } = useMultiStepForm();
  return (
    <section className="mx-auto max-w-[902px] space-y-6">
      <Header
        header="Add Campaign Items"
        desc="Add items to your campaign. Drag to reorder."
      />

      <section className="flex h-[372px] items-center justify-center overflow-y-auto rounded-2xl border border-red-500 md:h-[402px]">
        <article className="flex max-w-[238px] flex-col items-center gap-y-6">
          <img src={"/empty-state.webp"} alt="empty-state" />

          <div className="space-y-2 text-center">
            <h5 className="font-bold text-[#0E021A]">No Item(s) added</h5>
            <p className="text-sm text-[#595959]">
              Add item(s) to your campaign and they appear here
            </p>
          </div>

          <button className="flex cursor-pointer items-center justify-center gap-2.5 bg-transparent p-3 text-sm font-semibold text-[#5C59ED]">
            <Plus />
            Add item
          </button>
        </article>
      </section>

      <article className="flex items-center justify-between">
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
