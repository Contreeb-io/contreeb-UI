import MulltistepForm from "~/components/create-campaign/multistep-form";
import { MultiStepFormProvider } from "~/context/multi-step-context";
import type { Route } from "../+types/root";

export const links: Route.LinksFunction = () => [
  { rel: "preload", as: "image", href: "/top.webp" },
  { rel: "preload", as: "image", href: "/empty-state.webp" },
];

export default function CreateCampaign() {
  return (
    <MultiStepFormProvider totalSteps={3}>
      <MulltistepForm />
    </MultiStepFormProvider>
  );
}
