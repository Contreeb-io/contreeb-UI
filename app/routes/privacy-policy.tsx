import { Helmet } from "react-helmet-async";
import { GuideDataTable } from "../components/donations/guide-table";
import NavBar from "../components/ui/nav-bar";
import { privacyColumns, privacyData } from "../constant";

const privacyPolicy = [
  {
    question: "The Short Version (TL;DR)",
    link: "#short-version",
  },
  {
    question: "Who We Are",
    link: "#who-we-are",
  },
  {
    question: "What We Collect (And Why)",
    link: "#what-we-collect",
  },
  {
    question: "Ghana Card & Documents – Super Safe",
    link: "#ghana-card-documents",
  },
  {
    question: "How We Use Your Info",
    link: "#how-we-use-info",
  },
  {
    question: "Who Sees Your Info",
    link: "#who-sees-info",
  },
  {
    question: "Your Rights (Ghana Data Protection Act)",
    link: "#your-rights",
  },
  {
    question: "Cookies (Small Sweet Biscuits)",
    link: "#cookies",
  },
  {
    question: "Children",
    link: "#children",
  },
  {
    question: "Security – We No Dey Play",
    link: "#security",
  },
  {
    question: "Changes to This Policy",
    link: "#changes-to-policy",
  },
  {
    question: "How to Reach Us",
    link: "#how-to-reach-us",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.7"
        ></meta>
      </Helmet>
      <main className="relative isolate min-h-svh pb-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(125,68,182,0.5)_0%,rgba(183,111,255,0.43)_100%)] blur-[120px] [will-change:transform] md:blur-[650px]" />
        <NavBar text="Privacy Policy" closeText />

        <section className="mx-auto mt-20 flex max-w-[1500px] px-6">
          <section className="max-w-[800px] flex-1 space-y-6">
            <article className="space-y-2 pb-3" id="short-version">
              <h1 className="font-mackinac font-medium text-[#0E021A]">
                1. The Short TL;DR
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    We collect only what we need to make Contreebute work.
                  </li>
                  <li>We NEVER sell your data.</li>
                  <li>Ghana Card = deleted after 24 hrs.</li>
                  <li>You can delete everything anytime.</li>
                  <li>We use bank-level security (same as your MoMo).</li>
                </ul>
                <p>Keep reading if you want the full love letter.</p>
              </div>
            </article>
            <article className="space-y-2 pb-3" id="who-we-are">
              <h1 className="font-mackinac font-medium text-[#0E021A]">
                2. Who We Are
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <p>
                  Contreebute is a crowdfunding app that aims to provide a
                  platform where{" "}
                  <span className="font-bold">dreamers meet givers</span>.{" "}
                </p>
                <p>
                  We remove the shame, friction, delays, and high fees. So the
                  same people who already want to help you can actually do so,
                  faster and in larger amounts.
                </p>
                <p>
                  From laptops to medical bills, birthdays to boreholes, we turn
                  kindness into real money in your MoMo or bank.
                </p>
                <p>
                  Owned and run by Contreebute Technologies, a registered
                  Ghanaian company.
                </p>
                <p>We only win when you do. ❤️</p>
              </div>
            </article>
            <article className="space-y-2 pb-3" id="what-we-collect">
              <h1 className="font-mackinac font-medium text-[#0E021A]">
                3. What We Collect (And Why)
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <GuideDataTable columns={privacyColumns} data={privacyData} />
              </div>
            </article>
            <article className="space-y-2 pb-3" id="ghana-card-documents">
              <h1 className="font-mackinac font-medium text-[#0E021A]">
                4. Ghana Card & Documents – Super Safe
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <ul className="list-inside list-disc space-y-1.5">
                  <li>We store them for maximum 24 hours</li>
                  <li>After verification → auto-deleted forever</li>
                  <li>Only 2 humans can see them (our trust team)</li>
                  <li>Encrypted like your bank app</li>
                </ul>
              </div>
            </article>
            <article className="space-y-2 pb-3" id="how-we-use-info">
              <h1 className="font-mackinac font-medium text-[#0E021A]">
                5. How We Use Your Info
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <ul className="list-inside list-disc space-y-1.5">
                  <li>Run your campaign</li>
                  <li>Send payout alerts</li>
                  <li>Stop fraud</li>
                  <li>Improve the app</li>
                </ul>
              </div>
            </article>
            <article className="space-y-2 pb-3" id="who-sees-info">
              <h1 className="font-mackinac font-medium text-[#0E021A]">
                6. Who Sees Your Info
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <ul className="list-inside list-disc space-y-1.5">
                  <li>Our tiny team</li>
                  <li>Paystack (they move the money)</li>
                  <li>Our data center provider</li>
                  <li>Police (only if someone is stealing)</li>
                </ul>
                <ul className="list-inside space-y-1.5 [&>li]:before:mr-2 [&>li]:before:content-['x']">
                  <p className="font-bold">We will NEVER give your data to:</p>
                  <li>Advertisers</li>
                  <li>Political parties</li>
                  <li>Your ex</li>
                  <li>Anyone who pays us</li>
                </ul>
              </div>
            </article>
            <article className="space-y-2 pb-3" id="your-rights">
              <h1 className="font-mackinac font-medium text-[#0E021A]">
                7. Your Rights (Ghana Data Protection Act)
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <p>You can email hello@contreebute.io and say:</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    “Show me everything you have on me” → we send in 48 hrs
                  </li>
                  <li>“Delete everything” → gone in 72 hrs</li>
                  <li>“Stop emailing me” → done instantly</li>
                </ul>
              </div>
            </article>
            <article className="space-y-2 pb-3" id="cookies">
              <h1 className="font-mackinac font-medium text-[#0E021A]">
                8. Cookies (Small Sweet Biscuits)
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <ul className="list-inside list-disc space-y-1">
                  <p>We use tiny cookies to:</p>
                  <li>Remember you’re logged in</li>
                  <li>Know if you’re on MTN or Vodafone (loads faster)</li>
                  <li>Count how many people visit</li>
                  <p>
                    You can turn them off in your browser. Site still works!
                  </p>
                </ul>
              </div>
            </article>
            <article className="space-y-2 pb-3" id="children">
              <h1 className="font-mackinac font-medium text-[#0E021A]">
                9. Children
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                Nobody under 16 can create campaign or donate without an adult’s
                supervision.
                <br /> If we find out, we delete the account with love.
              </div>
            </article>
            <article className="space-y-2 pb-3" id="security">
              <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
                10. Security – We No Dey Play
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <ul className="list-inside list-disc space-y-1">
                  <li>256-bit encryption (same as Ecobank)</li>
                  <li>Two-factor for our own staff</li>
                  <li>Daily backups in two countries</li>
                  <li>If breach happen (God forbid), we tell you in 48 hrs</li>
                </ul>
              </div>
            </article>
            <article className="space-y-2 pb-3" id="changes-to-policy">
              <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
                11. Changes to This Policy
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                Big changes → we email you + put banner on site 14 days before.
                <br />
                Keep using Contreebute = you accept new rules.
              </div>
            </article>
            <article className="space-y-2 pb-3" id="how-to-reach-us">
              <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
                12. Contact Us (We Answer Fast)
              </h1>
              <div className="space-y-2 text-sm text-[#5D5757]">
                <p>
                  <a href="mailto:hello@contreebute.io">hello@contreebute.io</a>
                </p>

                <div className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/contreebute?igsh=MTBydHVibm45NHpieQ== "
                    target="_blank"
                  >
                    <img src="ig.png" alt="contreebute-instagram" />
                  </a>
                  <a href="" target="_blank">
                    <img
                      src="linkedin.png"
                      className="size-5 rounded-xs"
                      alt="contreebute-linkedin"
                    />
                  </a>
                  <a href="https://x.com/contreebute" target="_blank">
                    <img
                      src="x.jpg"
                      className="size-5 rounded-xs"
                      alt="contreebute-x"
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@contreebute?_r=1&_t=ZS-91mAw9lP8I3 "
                    target="_blank"
                  >
                    <img
                      src="tiktok.png"
                      className="size-5 rounded-xs"
                      alt="contreebute-tiktok"
                    />
                  </a>
                </div>

                <div>
                  By using Contreebute.io, you agree to this Privacy Policy.
                  <br />
                  Thank you for trusting us with your story, your money, and
                  your heart.
                  <br />
                  We no go leak. We no go sell. We go protect you like blood.
                  <br />
                </div>
                <div className="">
                  With impact, <br />{" "}
                  <span className="font-bold">The Contreebute Team</span>
                </div>
              </div>
            </article>
          </section>
          <aside className="fixed right-10 hidden flex-col gap-3 rounded-[8px] border border-[#F0F0F0] bg-white/50 p-2 md:flex">
            <ul className="space-y-3">
              {privacyPolicy.map((item, index) => (
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
