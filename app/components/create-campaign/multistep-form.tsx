import { useMultiStepForm } from "~/context/multi-step-context";
import AccountForm from "./account-form";
import CampaignDetails from "./campaign-details";
import CampaignItems from "./campaign-items";
import FormLayout from "./layout";

export default function MulltistepForm() {
  const { currentStep } = useMultiStepForm();

  return (
    <FormLayout>
      {currentStep === 1 && <CampaignDetails />}
      {currentStep === 2 && <CampaignItems />}
      {currentStep === 3 && <AccountForm />}
    </FormLayout>
  );
}
