export type FormType = "password" | "magicLink";

export interface CampaignSelectType {
  title: string;
  id: string;
}

type Network = "MTN" | "TELECEL" | "AirtelTigo" | string;

type CampaignType = "personal_campaign" | "public_campaign";

type CampaignStatus = "draft" | "active" | "completed" | "cancelled" | string;

interface CampaignImage {
  id: number;
  url: string;
}

interface CampaignItem {
  id: number;
  name: string;
  description: string;
  amount: string;
  images: CampaignImage[];
}

interface PaymentWallet {
  network: Network;
  momo_number: string;
  account_name: string;
}

export interface Campaign {
  id: number;
  title: string;
  description: string;
  campaign_type: CampaignType;
  status: CampaignStatus;
  goal_amount: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  national_id: string | null;
  shareable_link: string;
  created_at: string;
  updated_at: string;
  campaign_items: CampaignItem[];
  payment_wallet: PaymentWallet[];
}

export interface Wallet {
  account_name: string;
  campaign_id: string | null;
  created_at: string;
  id: number;
  momo_number: string;
  network: string;
  updated_at: string;
  user_id: 36;
}
