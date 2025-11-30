import { Link } from "react-router";
import DonationDetails from "../components/donate/donation-details";
import PaymentCard from "../components/donate/payment-card";

export default function Donate() {
  const donations = [
    {
      id: "1",
      type: "public",
      name: "Nana Nsanku Drums",
      title: "Highlife is Alive Crowdfunding",
      desc: "Highlife is 100 years old. To honor this legacy, Kwame Brenya and his Akɔm Band present HIGHLIFE IS ALIVE. A concert that tells the timeless story of Highlife music from its original sound to today’s vibrant rhythms. Featuring King Ayisoba, Nkyinkyim Band, Rama Blak and Megborna. This celebration brings together diverse cultural sounds that reflect the true heartbeat of Ghana.Your support can help make this historic moment possible. Donate any token toward the ₵20,000 goal to keep Highlife alive for the next generation.",
      target_amount: "GHS 90,000",
      raised_amount: "GHS 30,000",
      total_donations: "20",
    },
    {
      id: "2",
      type: "personal",
      name: "Nana Nsanku Drums",
      title: "25th Birthday",
      desc: "Your support can help make this birthday a historic moment possible. Donate any token toward any item help me achieve my dreams.",
      target_amount: "GHS 90,000",
      raised_amount: "GHS 30,000",
      total_donations: "20",
    },
  ];

  console.log(donations);

  return (
    <main className="relative isolate min-h-svh px-5 pb-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(125,68,182,0.5)_0%,rgba(183,111,255,0.43)_100%)] blur-[70px] md:blur-[490px]" />

      <div className="font-mackinac w-full max-w-[1440px]">
        <div className="flex h-16 w-full items-center justify-between">
          <Link to={"/"}>
            <img src="/logo.svg" alt="Contreebute-logo" className="h-10 w-28" />
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to={"/sign-in"}
              className="font-sans text-sm font-medium text-[#404040]"
            >
              Sign in
            </Link>

            <Link
              to={"/create-campaign"}
              className="sing-in-btn rounded-full bg-[#FFDEDE1A] px-4 py-3 text-xs font-medium text-[#242424] md:text-base"
            >
              Create a campaign
            </Link>
          </div>
        </div>
      </div>

      <section className="mx-auto mt-16 flex max-w-[1131px] flex-col items-center justify-between gap-10 font-sans md:flex-row md:items-start">
        <DonationDetails />
        <PaymentCard />
      </section>
    </main>
  );
}
