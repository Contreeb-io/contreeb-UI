import http from "./http";

export async function getRecentDonations(id: string) {
  const res = await http.post("recent_donations", { campaign_id: id });
  return res;
}

export async function getTotalDonors(id: string) {
  const res = await http.post("total_donors", { campaign_id: id });
  return res;
}

export async function getTotalDonationReceived(id: string) {
  const res = await http.post("total_donations", { campaign_id: id });

  return res;
}

export async function allDonations(id: string) {
  const res = await http.post("all_donations", { campaign_id: id });

  return res;
}
