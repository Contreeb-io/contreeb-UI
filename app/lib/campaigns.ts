import type { FormData } from "../context/multi-step-context";
import http from "./http";
import { formatDateForSubmission } from "./utils";

export async function getCampaigns() {
  const response = await http.get("campaigns");
  return response.data;
}

export async function createCampaign(values: FormData) {
  const formattedValues = {
    ...values,
    start_date: formatDateForSubmission(values.start_date),
    end_date: formatDateForSubmission(values.end_date),
  };

  const formData = new FormData();

  formData.append("campaign_type", formattedValues.campaign_type);
  formData.append("title", formattedValues.title);
  formData.append("description", formattedValues.description);
  formData.append("goal_amount", formattedValues.goal_amount);
  formData.append("start_date", formattedValues.start_date);
  formData.append("end_date", formattedValues.end_date);
  formData.append("start_time", formattedValues.start_time);
  formData.append("end_time", formattedValues.end_time);

  formattedValues.payment_wallets_attributes.forEach((wallet, index) => {
    formData.append(
      `payment_wallets_attributes[${index}][account_name]`,
      wallet.account_name,
    );
    formData.append(
      `payment_wallets_attributes[${index}][momo_number]`,
      wallet.momo_number,
    );
    formData.append(
      `payment_wallets_attributes[${index}][network]`,
      wallet.network,
    );
  });

  formattedValues.campaign_items_attributes.forEach((item, index) => {
    formData.append(`campaign_items_attributes[${index}][name]`, item.name);
    formData.append(
      `campaign_items_attributes[${index}][amount]`,
      item.amount.toString(),
    );

    if (item.description) {
      formData.append(
        `campaign_items_attributes[${index}][description]`,
        item.description,
      );
    }

    if (item.image) {
      formData.append(
        `campaign_items_attributes[${index}][images]`,
        item.image,
      );
    }
  });

  const response = await http.post("campaigns", formData, { formData: true });
  return response;
}
