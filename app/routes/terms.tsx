import { Helmet } from "react-helmet-async";
import { GuideDataTable } from "../components/donations/guide-table";
import NavBar from "../components/ui/nav-bar";
import { userFeeColumns, userFeeData } from "../constant";

const termsOfService = [
  {
    question: "The Short Version (TL;DR)",
    link: "#short-version",
  },
  {
    question: "Who We Are",
    link: "#who-we-are",
  },
  {
    question: "What You Can Do on Contreebute",
    link: "#what-you-can-do",
  },
  {
    question: "What You CANNOT Do (Please Don't)",
    link: "#what-you-cannot-do",
  },
  {
    question: "Fees – Same As On The Website",
    link: "#fees",
  },
  {
    question: "Payouts – When & How",
    link: "#payouts",
  },
  {
    question: "Refunds",
    link: "#refunds",
  },
  {
    question: "Verification (Public Campaigns)",
    link: "#verification",
  },
  {
    question: "Your Data: We Protect it.",
    link: "#your-data",
  },
  {
    question: "Intellectual Property",
    link: "#intellectual-property",
  },
  {
    question: "If Something Goes Wrong",
    link: "#if-something-goes-wrong",
  },
  {
    question: "We Can Change These Terms",
    link: "#we-can-change-terms",
  },
  {
    question: "How to Reach Us",
    link: "#how-to-reach-us",
  },
];

export default function Terms() {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.8"
        ></meta>
      </Helmet>
      <main className="relative min-h-screen pb-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(125,68,182,0.5)_0%,rgba(183,111,255,0.43)_100%)] blur-[70px] md:blur-[490px]" />
        <NavBar text="Terms of Service" closeText />

        <section className="z-20 mx-auto mt-20 flex max-w-[1500px] px-6">
          <section className="max-w-[780px] flex-1 space-y-6">
            <article
              className="space-y-2 border-b border-white pb-3"
              id="short-version"
            >
              <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
                1. The Short Version (TL;DR)
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <ul className="list-inside list-disc space-y-1">
                  <li>You must be 16+ to use Contreebute.</li>
                  <li>Be honest. No scams. No lies.</li>
                  <li>
                    We only take fees when you raise money (4–6% + small daily
                    user fees).
                  </li>
                  <li>No money raised = zero fees.</li>
                  <li>We don’t snitch! We keep your data safe like family.</li>
                  <li>Break the rules → we pause or close your account.</li>
                </ul>
                <p>If you keep scrolling, you agree to everything below. </p>
              </div>
            </article>
            <article
              className="space-y-2 border-b border-white pb-3"
              id="who-we-are"
            >
              <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
                2. Who We Are
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <p>
                  Contreebute is a crowdfunding app that aims to provide a
                  platform{" "}
                  <span className="font-bold">where dreamers meet givers.</span>
                  <br />
                  We remove the shame, friction, delays, and high fees. So the
                  same people who already want to help you can actually do so,
                  faster and in larger amounts.
                  <br />
                  From laptops to medical bills, birthdays to boreholes, we turn
                  kindness into real money in your MoMo or bank.
                  <br />
                  Owned and run by Contreebute Technologies, a registered
                  Ghanaian company.
                  <br />
                  We only win when you do. ❤️
                </p>
              </div>
            </article>
            <article
              className="space-y-2 border-b border-white pb-3"
              id="what-you-can-do"
            >
              <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
                3. What You Can Do on Contreebute
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <ul className="list-inside list-disc space-y-1.5">
                  <li>Create Personal or Public campaigns</li>
                  <li>Donate with Mobile Money, card, Apple Pay or bank</li>
                  <li>
                    Share campaigns on WhatsApp, X, Instagram, Snapchat, etc.
                  </li>
                  <li>Withdraw straight to MoMo or any Ghana bank</li>
                </ul>
              </div>
            </article>
            <article
              className="space-y-2 border-b border-white pb-3"
              id="what-you-cannot-do"
            >
              <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
                4. What You CANNOT Do (Please Don’t)
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <ul className="list-inside list-disc space-y-1.5">
                  <li>Lie about who you are or what the money is for</li>
                  <li>
                    Run scams, gambling, drugs, weapons or fund anything police
                    will get involved.
                  </li>
                  <li>
                    Copy our design or code (you can mmom but add your touch
                    hehe)
                  </li>
                  <li>Spam people</li>
                  <li>Use bots to donate or create accounts</li>
                  <li>Raise money for hate, violence, or illegal things</li>
                </ul>
                <p>
                  If we see this, we freeze everything and report to the police
                  if needed.
                </p>
              </div>
            </article>
            <article className="space-y-2 border-b border-white pb-3" id="fees">
              <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
                5. Fees – Same As On The Website
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <p>No upfront cost. Ever.</p>

                <GuideDataTable columns={userFeeColumns} data={userFeeData} />

                <ul className="list-inside list-disc">
                  <li>Minimum fee GHS 50 (we waive if lower)</li>
                  <li>No money raised = GHS 0 charged</li>
                  <li>
                    Paystack charges = Almost 2% (so our actual charges are 4%
                    for personal campaigns and 2% for Public campaigns)
                  </li>
                </ul>
                <p>We can change fees with 14 days’ notice.</p>
              </div>
            </article>
            <article
              className="space-y-2 border-b border-white pb-3"
              id="payouts"
            >
              <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
                6. Payouts – When & How
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    Campaign ends → money lands in your MoMo/Bank in 1–3
                    business days
                  </li>
                  <li>We hold funds up to 30 days if we smell fraud</li>
                  <li>
                    You are responsible for any taxes (we don’t collect tax)
                  </li>
                </ul>
              </div>
            </article>
            <article
              className="space-y-2 border-b border-white pb-3"
              id="refunds"
            >
              <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
                7. Refunds
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    Donors can ask for a refund within 14 days if campaign
                    breaks rules
                  </li>
                  <li>
                    If campaign is fake, we refund everyone and ban the creator
                  </li>
                  <li>
                    No refunds just because you change your mind after 14 days
                  </li>
                </ul>
              </div>
            </article>
            <article
              className="space-y-2 border-b border-white pb-3"
              id="verification"
            >
              <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
                8. Verification (Public Campaigns)
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    You MUST upload a real Ghana Card + proof documentation of
                    need
                  </li>
                  <li>We delete documents after verification</li>
                  <li>Fake documents = permanent ban</li>
                </ul>
              </div>
            </article>
            <article
              className="space-y-2 border-b border-white pb-3"
              id="your-data"
            >
              <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
                9. Your Data: We Protect it.
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <ul className="list-inside list-disc space-y-1">
                  We collect:
                  <li>Name, phone, email, MoMo/bank details</li>
                  <li>Ghana Card (only for Public verification)</li>
                  We use it to:
                  <li>Run the platform</li>
                  <li>Stop fraud</li>
                  <li>Send you updates</li>
                </ul>
                <p>
                  We NEVER sell your data.
                  <br />
                  You can ask us to delete everything (email
                  hello@contreebute.io).
                </p>
              </div>
            </article>
            <article
              className="space-y-2 border-b border-white pb-3"
              id="intellectual-property"
            >
              <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
                10. Intellectual Property
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <ul className="list-inside list-disc space-y-1">
                  <li>Your campaign photos/text belong to you</li>
                  <li>Our logo, design, code belong to us</li>
                </ul>
              </div>
            </article>
            <article
              className="space-y-2 border-b border-white pb-3"
              id="if-something-goes-wrong"
            >
              <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
                11. If Something Goes Wrong
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    We’re not responsible if your phone dies or the network
                    fails (I wanted to sub a certain network, but you all know
                    which one, hehe😅)
                  </li>
                  <li>Ghana law applies. Any fight goes to the courts</li>
                </ul>
              </div>
            </article>
            <article
              className="space-y-2 border-b border-white pb-3"
              id="we-can-change-terms"
            >
              <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
                12. We Can Change These Terms
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                We’ll email you or post on the site 14 days before big changes.
                If you keep using Contreebute after that, you accept the new
                rules.
              </div>
            </article>
            <article
              className="space-y-2 border-b border-white pb-3"
              id="how-to-reach-us"
            >
              <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
                13. How to Reach Us
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <p>
                  Email:{" "}
                  <a href="mailto:hello@contreebute.io">hello@contreebute.io</a>
                </p>
                <p>Contreebute: All platforms</p>
              </div>
            </article>
            <article className="space-y-2 border-b border-white pb-3 text-sm text-[#5D5757]">
              <p className="font-bold">
                By using Contreebute.io, you agree to all the above.
              </p>
              <p>
                Thank you for trusting us with your dreams and your kindness.
                Walahi, we no go disappoint you. 🙏🏽💜
              </p>
              <div className="">
                With impact, <br />{" "}
                <span className="font-bold">The Contreebute Team</span>
              </div>
            </article>
          </section>
          <aside className="fixed right-10 z-20 hidden flex-col gap-3 rounded-[8px] border border-[#F0F0F0] bg-white/50 p-2 md:flex">
            <ul className="space-y-3">
              {termsOfService.map((item, index) => (
                <li
                  key={index}
                  className="list-inside list-decimal px-2 text-sm text-[#525252] first:font-medium first:text-[#0A0A0A]"
                >
                  <a href={item.link}>{item.question}</a>
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </main>
    </>
  );
}
