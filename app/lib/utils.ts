import { clsx, type ClassValue } from "clsx";
import { redirect } from "react-router";
import { twMerge } from "tailwind-merge";
import { TOKEN_KEY } from "../context/auth-context";
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
  const res = await http.get("campaigns");
  return res;
}
