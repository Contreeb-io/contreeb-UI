import http from "./http";

export async function getCampaigns() {
  const response = await http.get("campaigns");
  console.log(response);
  return response.data;
}
