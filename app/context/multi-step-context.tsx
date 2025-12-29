import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createContext, type ReactNode, useContext, useState } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import z from "zod";
import { queryClient } from "../app";
import { queryKeys } from "../constant";
import { createCampaign } from "../lib/campaigns";

const completeFormSchema = z.object({
  campaign_type: z.enum(["public_campaign", "personal_campaign"]),
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must not exceed 100 characters")
    .trim()
    .refine((val) => val.length > 0, {
      message: "Title is required",
    }),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(1000, "Description must not exceed 1000 characters")
    .trim()
    .refine((val) => val.length > 0, {
      message: "Description is required",
    }),
  goal_amount: z
    .string()
    .trim()
    .refine((val) => val.length > 0, {
      message: "Goal amount is required",
    })
    .refine((val) => !isNaN(Number(val)), {
      message: "Goal amount must be a valid number",
    })
    .refine((val) => Number(val) > 0, {
      message: "Goal amount must be greater than 0",
    })
    .refine((val) => Number(val) <= 1000000000, {
      message: "Goal amount is too large",
    }),
  start_date: z.date(),
  end_date: z.date(),
  start_time: z.string(),
  end_time: z.string(),
  payment_wallets_attributes: z.array(
    z.object({
      account_name: z.string().min(3, "name should be at least 3 characters"),
      momo_number: z
        .string()
        .min(10, "number should be at should be 10 characters")
        .max(10, "number should be at should be 10 characters"),
      network: z.enum(["AIRTELTIGO", "MTN", "TELECEL"]),
    }),
  ),
  campaign_items_attributes: z.array(
    z.object({
      name: z.string().min(3, "name should be at least 3 characters"),
      amount: z.number().min(1, "amount is required"),
      description: z.string().optional(),
      image: z.instanceof(File).optional(),
    }),
  ),
});

export type FormData = z.infer<typeof completeFormSchema>;

interface MultiStepFormContextType {
  currentStep: number;
  totalSteps: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  nextStep: () => void;
  prevStep: () => void;
  form: UseFormReturn<FormData>;
  isPending: boolean;
  isSuccess: boolean;
  mutate: (values: FormData) => void;
  campaignDetails: {
    sharableLink: string;
    id: string;
  };
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [campaignDetails, setCampaignDetails] = useState({
    sharableLink: "",
    id: "",
  });

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
      end_date: (() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow;
      })(),
      start_time: "10:00:00",
      end_time: "10:00:00",
      payment_wallets_attributes: [],
      campaign_items_attributes: [],
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
      "start_time",
      "end_time",
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

  const { isPending, mutate } = useMutation({
    mutationFn: createCampaign,
    onSuccess: (data) => {
      if (data) {
        setCampaignDetails({ sharableLink: data.shareable_link, id: data.id });
        setIsSuccess(true);
        queryClient.invalidateQueries({ queryKey: queryKeys.campaigns });
      }
    },
  });

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
        isPending,
        isSuccess,
        mutate,
        campaignDetails,
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
