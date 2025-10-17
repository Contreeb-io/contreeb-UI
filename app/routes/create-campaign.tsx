import MulltistepForm from "~/components/create-campaign/multistep-form";
import { MultiStepFormProvider } from "~/context/multi-step-context";

export default function CreateCampaign() {
  return (
    <MultiStepFormProvider totalSteps={3}>
      <MulltistepForm />
    </MultiStepFormProvider>
  );
}
