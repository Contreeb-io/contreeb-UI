import type { PasswordSignUp } from "../components/auth/password-form";
import http from "./http";

export async function passwordLogin(values: PasswordSignUp) {
  const res = await http.post("/login", values);
  return res;
}
