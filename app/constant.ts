import type { ColumnDef } from "@tanstack/react-table";

interface ObjectType {
  [x: string]: string;
}

export const typesColumns: ColumnDef<ObjectType>[] = [
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "for",
    header: "For",
  },
  {
    accessorKey: "verification",
    header: "Verification",
  },
  {
    accessorKey: "fee",
    header: "Fee",
  },
];

export const feesColumns: ColumnDef<ObjectType>[] = [
  { accessorKey: "campaign", header: "Campaign" },
  { accessorKey: "raise", header: "You Raise" },
  { accessorKey: "days", header: "Days" },
  { accessorKey: "fee", header: "Total Fee" },
  { accessorKey: "keep", header: "You Keep" },
];

export const dashboard1Columns: ColumnDef<ObjectType>[] = [
  { accessorKey: "progress", header: "Progress" },
  { accessorKey: "amount", header: "GHS 3,200 of GHS 5,000" },
];

export const dashboard2Columns: ColumnDef<ObjectType>[] = [
  { accessorKey: "date", header: "Date" },
  { accessorKey: "donor", header: "Donor" },
  { accessorKey: "item", header: "Item" },
  { accessorKey: "amount", header: "Amount" },
];

export const safetyColumns: ColumnDef<ObjectType>[] = [
  {
    accessorKey: "protection",
    header: "Protection",
  },
  {
    accessorKey: "help",
    header: "How We Help",
  },
];

export const userFeeColumns: ColumnDef<ObjectType>[] = [
  { accessorKey: "campaign", header: "Campaign" },
  { accessorKey: "pfee", header: "Platform Fee" },
  { accessorKey: "dfee", header: "Daily Fee" },
];

export const privacyColumns: ColumnDef<ObjectType>[] = [
  { accessorKey: "when", header: "When you…" },
  { accessorKey: "what", header: "We collect…" },
  { accessorKey: "why", header: "Why we need it" },
];

export const typeData = [
  {
    type: "Personal",
    for: "Birthdays, goals, gifts",
    verification: "No documents needed",
    fee: "6% + GHS 8/day",
  },
  {
    type: "Public",
    for: "Medical, education, charity",
    verification: "We verify within 24 hours.",
    fee: "4% + GHS 4/day",
  },
];

export const feesData = [
  {
    campaign: "Personal",
    raise: "GHS 5,000",
    days: "5",
    fee: "GHS 340",
    keep: "GHS 4,660",
  },
  {
    campaign: "Public",
    raise: "GHS 5,000",
    days: "5",
    fee: "GHS 220",
    keep: "GHS 4,780",
  },
];

export const dashboard1Data = [
  { progress: "Donors", amount: "42 kind people" },
  { progress: "Updates", amount: "Post photos, thank donors" },
];

export const dashboard2Data = [
  { date: "May 12", donor: "Ama Serwaa", item: "Laptop", amount: "GHS 500" },
  { date: "May 13", donor: "Kofi", item: "_", amount: "GHS 100" },
];

export const safetyData = [
  {
    protection: "Verified Public Dreamers",
    help: "Public campaigns show proof",
  },
  {
    protection: "Secure Payments",
    help: "Paystack encrypts everything",
  },
  {
    protection: "Fraud Watch",
    help: "We pause suspicious activity",
  },
  {
    protection: "Refund Promise",
    help: "If rules are broken, donors are protected",
  },
  {
    protection: "Your Privacy",
    help: "Documents deleted after verification",
  },
];

export const userFeeData = [
  { campaign: "Personal", pfee: "6% of total raised", dfee: "GHS 8/day" },
  { campaign: "Public", pfee: "4% of total raised", dfee: "GHS 4/day" },
];

export const privacyData = [
  {
    when: "Sign up",
    what: "Name, email, phone, password",
    why: "Name, email, phone, password	So you can log in & we can message you",
  },
  {
    when: "Create any campaign",
    what: "Campaign story, goal",
    why: "To show donors your dream",
  },
  {
    when: "Create Public campaign",
    what: "Ghana Card (front) + proof (bill/letter)",
    why: "To verify & protect everyone",
  },
  {
    when: "Receive money",
    what: "MoMo number OR bank details",
    why: "To send your money safely",
  },
  {
    when: "Donate",
    what: "Name (or “Anonymous”), phone/email",
    why: "So creator can say thank you",
  },
  {
    when: "Browse the site",
    what: "IP address, browser type",
    why: "To keep the site fast & block bad guys",
  },
];

export const queryKeys = {
  campaigns: ["campaigns"],
  singleCampaign: (id: string) => ["campaigns", id],
  wallets: ["wallets"],
  recentDonations: (id: string) => ["recent_donations", id],
  dashboardData: (id: string) => ["dashboard_data", id],
  allDonations: (id: string) => ["all_donations", id],
};
