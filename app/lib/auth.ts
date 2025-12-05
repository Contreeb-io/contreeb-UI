import type { PasswordSignUp } from "../components/auth/password-form";
import type { AccountType } from "../components/create-campaign/account-form";
import http from "./http";

export async function passwordLogin(values: PasswordSignUp) {
  const res = await http.post("/login", values);
  return res;
}

export async function createAccount(values: AccountType) {
  const res = await http.post("/users", values);
  return res;
}
