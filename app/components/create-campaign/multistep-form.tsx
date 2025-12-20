import { useMultiStepForm } from "../../context/multi-step-context";
import AccountForm from "./account-form";
import CampaignDetails from "./campaign-details";
import CampaignItems from "./campaign-items";
import FormLayout from "./layout";

export default function MultistepForm() {
  const { currentStep, form } = useMultiStepForm();

  return (
    <FormLayout>
      {currentStep === 1 && <CampaignDetails />}
      {currentStep === 2 && (
        <div>
          {form.getValues("campaign_type") === "personal_campaign" && (
            <CampaignItems />
          )}{" "}
          {/* {form.getValues("campaign_type") === "public_campaign" && (
            <PublicCampaignFiles />
          )} */}
        </div>
      )}
      {currentStep === 3 && <AccountForm />}
    </FormLayout>
  );
}
