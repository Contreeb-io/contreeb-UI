import { clsx, type ClassValue } from "clsx";
import { redirect } from "react-router";
import { twMerge } from "tailwind-merge";
import { queryClient } from "../app";
import { queryKeys } from "../constant";
import { TOKEN_KEY } from "../context/auth-context";
import type { CampaignSelectType } from "../types";
import http, { getAuthToken } from "./http";
import token from "./token";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function dashboardLoader() {
  const userToken = getAuthToken?.() || token.get(TOKEN_KEY);
  if (!userToken) {
    throw redirect("/");
  }

  const data = await queryClient.ensureQueryData({
    queryKey: queryKeys.campaigns,
    queryFn: async () => {
      const res = await http.get("campaigns");
      return res;
    },
  });

  return data;
}

export async function emptyDashboardLoader() {
  const cachedData = queryClient.getQueryData(
    queryKeys.campaigns,
  ) as CampaignSelectType[];
  if (cachedData && cachedData.length > 0) {
    throw redirect(`/dashboard/${cachedData[0].id}`);
  }

  const data = await queryClient.ensureQueryData({
    queryKey: queryKeys.campaigns,
    queryFn: async () => {
      const res = await http.get("campaigns");
      return res;
    },
  });

  if (data && data.length > 0) {
    throw redirect(`/dashboard/${data[0].id}`);
  }

  return null;
}

export function formatDateForSubmission(date: Date | undefined) {
  if (!date) {
    return "";
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function capitalizeFirst(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
