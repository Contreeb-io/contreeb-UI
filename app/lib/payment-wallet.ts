import type { WalletType } from "../components/dashboard/payment-modal";
import type { Wallet } from "../types";
import http from "./http";

export async function addWallet(data: WalletType) {
  const res = await http.post("create_wallet", data);
  return res;
}

export async function getAllWallets() {
  const res = await http.get("all_wallets");
  return res.wallets;
}

export async function editWallet(data: Wallet) {
  const res = await http.update("update_wallet", data);
  return res;
}

export async function deleteWallet(id: number) {
  const res = await http.destroy("delete_wallet", { id });
  return res;
}
