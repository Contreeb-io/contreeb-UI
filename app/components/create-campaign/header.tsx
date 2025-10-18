import { useMultiStepForm } from "~/context/multi-step-context";

export default function Header({
  header,
  desc,
}: {
  header: string;
  desc: string;
}) {
  const { currentStep, totalSteps } = useMultiStepForm();

  return (
    <article className="flex items-start justify-between">
      <div className="space-y-2 md:max-w-[439px]">
        <h3 className="font-mackinac font-bold text-[#0E021A] md:text-xl">
          {header}
        </h3>
        <p className="font-sans text-sm text-[#5D5757] md:text-base">{desc}</p>
      </div>

      <div className="min-w-fit font-sans text-[#5D5757]">
        {currentStep} of {totalSteps}
      </div>
    </article>
  );
}
