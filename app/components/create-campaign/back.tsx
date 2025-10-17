import { ArrowLeft } from "lucide-react";
import { useMultiStepForm } from "~/context/multi-step-context";

export default function Back() {
  const { prevStep } = useMultiStepForm();
  return (
    <button
      className="flex cursor-pointer items-center gap-2 bg-transparent text-sm font-semibold text-[#505050]"
      type="button"
      onClick={prevStep}
    >
      <ArrowLeft size={20} />
      Back
    </button>
  );
}
