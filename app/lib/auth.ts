import type { PasswordSignUp } from "../components/auth/password-form";
import type { AccountType } from "../components/create-campaign/account-form";
import http from "./http";

export async function passwordLogin(values: PasswordSignUp) {
  const res = await http.post("/login", values);
  return res;
}

export async function createAccount(values: AccountType) {
  const res = await http.post("/users", {
    user: { ...values, role: "regular" },
  });
  return res;
}

export async function magicLinkVerification(token: string) {
  const res = await http.post("magic_links/verify", { token });
  return res;
}

export async function requestMagicLink(values: { email: string }) {
  const res = await http.post("magic_links", values);
  return res;
}

export async function forgotPassword(values: { email: string }) {
  const res = await http.post("password/forgot", values);
  return res;
}
