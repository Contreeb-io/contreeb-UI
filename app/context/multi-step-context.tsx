import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, type ReactNode, useContext, useState } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import z from "zod";

const completeFormSchema = z.object({
  campaign_type: z.enum(["public_campaign", "personal_campaign"]),
  title: z.string(),
  description: z.string(),
  goal_amount: z.string(),
  start_date: z.date(),
  end_date: z.date(),
  // start_time: z.string(),
  // end_time: z.string(),
  network: z.string(),
  number: z.string(),
  account_name: z.string(), //an min later,
  campaign_items_attributes: z.array(
    z.object({
      name: z.string().min(3, "name should be at least 3 characters"),
      amount: z.number().min(1, "amount is required"),
      description: z.string().optional(),
      image: z.instanceof(File).optional(),
    }),
  ),
  id_card: z.instanceof(File).optional(),
  proof_of_need: z.instanceof(File).optional(),
});

type FormData = z.infer<typeof completeFormSchema>;

interface MultiStepFormContextType {
  currentStep: number;
  totalSteps: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  nextStep: () => void;
  prevStep: () => void;
  form: UseFormReturn<FormData>;
}

const MultiStepFormContext = createContext<
  MultiStepFormContextType | undefined
>(undefined);

interface MultiStepFormProviderProps {
  children: ReactNode;
  totalSteps: number;
}

export function MultiStepFormProvider({
  children,
  totalSteps,
}: MultiStepFormProviderProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const form = useForm<FormData>({
    resolver: zodResolver(completeFormSchema),
    defaultValues: {
      title: "",
      campaign_type: "personal_campaign",
      description: "",
      goal_amount: "",
      start_date: new Date(),
      end_date: new Date(),
      // start_time: "",
      // end_time: "",
      // network: "",
      // number: "",
      // account_name: "",
      // id_card: undefined,
      // proof_of_need: undefined,
    },
  });

  const stepFields: Record<number, (keyof FormData)[]> = {
    1: [
      "title",
      "campaign_type",
      "description",
      "goal_amount",
      "start_date",
      "end_date",
    ],
    2: [],
  };

  const nextStep = async () => {
    const fieldsToValidate = stepFields[currentStep];
    const isValid = await form.trigger(fieldsToValidate);

    if (!isValid) {
      return;
    }

    if (isValid && currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <MultiStepFormContext.Provider
      value={{
        currentStep,
        totalSteps,
        isFirstStep,
        isLastStep,
        nextStep,
        prevStep,
        form,
      }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
}

export function useMultiStepForm() {
  const context = useContext(MultiStepFormContext);
  if (context === undefined) {
    throw new Error(
      "useMultiStepForm must be used within a MultiStepFormProvider",
    );
  }
  return context;
}
