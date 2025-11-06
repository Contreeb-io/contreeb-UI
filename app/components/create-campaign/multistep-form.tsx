import { useMultiStepForm } from "~/context/multi-step-context";
import AccountForm from "./account-form";
import CampaignDetails from "./campaign-details";
import CampaignItems from "./campaign-items";
import FormLayout from "./layout";
import PublicCampaignFiles from "./public-campaign-files";

export default function MultistepForm() {
  const { currentStep, form } = useMultiStepForm();

  return (
    <FormLayout>
      {currentStep === 1 && <CampaignDetails />}
      {currentStep === 2 && (
        <div>
          {form.getValues("type") === "personal" && <CampaignItems />}{" "}
          {form.getValues("type") === "public" && <PublicCampaignFiles />}
        </div>
      )}
      {currentStep === 3 && <AccountForm />}
    </FormLayout>
  );
}
