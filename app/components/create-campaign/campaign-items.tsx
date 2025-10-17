import { ArrowLeft, Plus } from "lucide-react";
import { useMultiStepForm } from "~/context/multi-step-context";
import emptyState from "../../../public/empty-state.webp";

export default function CampaignItems() {
  const { currentStep, totalSteps, nextStep } = useMultiStepForm();
  return (
    <section className="mx-auto max-w-[902px] space-y-6">
      <article className="flex items-start justify-between">
        <div className="space-y-2 md:max-w-[439px]">
          <h3 className="font-bold text-[#0E021A] md:text-xl">
            Add Campaign Items
          </h3>
          <p className="text-sm text-[#5D5757] md:text-base">
            Add items to your campaign. Drag to reorder.
          </p>
        </div>

        <p className="text-[#5D5757]">
          {currentStep} of {totalSteps}
        </p>
      </article>

      <section className="flex h-[552px] items-center justify-center overflow-y-scroll rounded-2xl border border-red-500 md:h-[402px]">
        <article className="flex max-w-[238px] flex-col items-center gap-y-6">
          <img src={emptyState} alt="empty-state" />

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
        <button
          className="flex items-center gap-2 bg-transparent text-sm font-semibold text-[#505050]"
          type="button"
        >
          <ArrowLeft size={20} />
          Back
        </button>

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
    </section>
  );
}
