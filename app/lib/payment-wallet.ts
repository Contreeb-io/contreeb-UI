import http from "./http";

export async function getAllWallets() {
  const res = await http.get("all_wallets");
  return res.wallets;
}

export async function deleteWallet(id: number) {
  const res = await http.destroy("delete_wallet", { id });
  return res;
}
