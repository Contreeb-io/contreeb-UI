import { useMultiStepForm } from "~/context/multi-step-context";
import CampaignDetails from "./campaign-details";
import FormLayout from "./layout";

export default function MulltistepForm() {
  const { currentStep } = useMultiStepForm();

  return (
    <FormLayout>
      {currentStep === 1 && <CampaignDetails />}
      {currentStep === 2 && <div>2</div>}
      {currentStep === 3 && <div>3</div>}
    </FormLayout>
  );
}
