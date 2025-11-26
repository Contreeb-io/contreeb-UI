import { X } from "lucide-react";
import { Link } from "react-router";

const faqSections = [
  {
    question: "What Is Contreebute?",
    link: "#what-is-contreebute",
  },
  {
    question: "Two Types of Campaigns (Choose What Fits Your Heart)",
    link: "#two-types-of-campaigns",
  },
  {
    question: "How to Create a Campaign (It's Free & Easy)",
    link: "#how-to-create-campaign",
  },
  {
    question: "How Donors Give (So Simple, So Kind)",
    link: "#how-donors-give",
  },
  {
    question: "Fees: Only If You Win (And You Keep Most of It)",
    link: "#fees",
  },
  {
    question: "When & How You Get Paid",
    link: "#when-how-paid",
  },
  {
    question: "Your Dashboard: Stay Close to Your Progress",
    link: "#your-dashboard",
  },
  {
    question: "Trust & Safety (We've Got Your Back)",
    link: "#trust-and-safety",
  },
  {
    question: "Need Help? We're Here (Like Always)",
    link: "#need-help",
  },
  {
    question: "Frequently Asked Questions (FAQ)",
    link: "#faq",
  },
];

export default function UserGuide() {
  return (
    <main className="relative isolate min-h-svh pb-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(125,68,182,0.5)_0%,rgba(183,111,255,0.43)_100%)] blur-[70px] md:blur-[490px]" />
      <div className="fixed top-0 z-10 w-full bg-[#FFFFFF29]">
        <header className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-[#010040]">Contreebute.io</h1>

            <div className="hidden h-[32px] border border-[#C1C1C1] md:block"></div>

            <h3 className="mt-1 hidden text-sm font-medium text-[#2B2B2B] md:block">
              Contreebute - User Guide
            </h3>
          </div>

          <Link
            to={"/"}
            className="flex items-center rounded-full bg-[#E3EFFC] p-2 text-sm text-[#2B2B2B]"
          >
            <X size={20} color="#101928" /> close
          </Link>
        </header>
      </div>

      <section className="mx-auto mt-20 flex max-w-[1500px] px-6">
        <section className="max-w-[780px] flex-1 space-y-6">
          <article className="space-y-2">
            <h1 className="font-mackinac text-xl font-bold text-[#0E021A]">
              Hi there, we’re Contreebute!
            </h1>
            <div className="text-sm text-[#5D5757]">
              A trusted, simple and warm place where dreamers meet givers.
              <br />
              Whether you’re asking for help, giving with love or cheering
              someone on, you’re safe here!
            </div>
            <div className="text-sm text-[#5D5757]">
              We started with birthday wishes.
              <br />
              You showed us that giving can heal, educate and unite.
            </div>
            <div className="text-sm text-[#5D5757]">
              Now, we’re Contreebute!
              <br />
              Same purpose, bigger impact!.
              <br />
              <p className="mt-1.5">
                Let’s walk through everything together, step by gentle step. No
                rush. No pressure. Just soft life things…
              </p>
            </div>
          </article>

          <article className="space-y-2" id="what-is-contreebute">
            <h1 className="font-mackinac font-medium text-[#0E021A]">
              1. What Is Contreebute?
            </h1>
            <div className="space-y-1.5 text-sm text-[#5D5757]">
              <p>
                {" "}
                Family, friends and strangers already help each other every day.
                It's just done the hard way. <br /> Contreebute removes the
                shame of begging, getting ignored, delays in gifting and high
                fees. This makes the same people who already want to help you…
                actually do!
              </p>
              <p>Easier, faster and in bigger amounts!</p>
              <p>Whether it’s:</p>
              <ul className="list-inside list-disc space-y-0.5 font-bold">
                <li>
                  Personal dreams (new laptop, birthday surprise, travel fund)
                </li>
                <li>
                  Public causes (medical bills, school fees, community relief)
                </li>
              </ul>
              <p>
                …you create one beautiful page, share it with everybody, and
                watch your dreams become a reality in your MoMo or bank account.
              </p>
              <p>
                You never pay to start.
                <br />
                You only pay a tiny fee if you receive funds; even then, you
                keep 94-96% of every cedi.
              </p>
              <div className="border-l-2 border-[#404040] pl-2">
                “We only win when you do.”
              </div>
              <p>
                That’s Contreebute. <br /> Where dreamers meet givers.
              </p>
            </div>
          </article>

          <article className="space-y-4" id="two-types-of-campaigns">
            <h1 className="font-mackinac font-medium text-[#0E021A]">
              2. Two Types of Campaigns (Choose What Fits Your Heart)
            </h1>

            <table className="w-full rounded-md bg-[#FFFFFF57] px-4">
              <tr className="[&>th]:border-b [&>th]:border-b-[#E3E4E5] [&>th]:py-3 [&>th]:text-left [&>th]:text-sm [&>th]:font-semibold [&>th]:text-[#4D595A]">
                <th className="pl-4">Type</th>
                <th>For</th>
                <th>Verification</th>
                <th>Fees</th>
              </tr>
              <tr className="[&>td]:border-b [&>td]:border-b-[#E3E4E5] [&>td]:py-3 [&>td]:text-xs">
                <td className="pl-4">Personal</td>
                <td>Birthdays, goals, gifts</td>
                <td>No documents needed</td>
                <td>6% + GHS 8/day</td>
              </tr>
              <tr className="[&>td]:border-b [&>td]:border-b-[#E3E4E5] [&>td]:py-3 [&>td]:text-xs">
                <td className="pl-4">Personal</td>
                <td>Birthdays, goals, gifts</td>
                <td>No documents needed</td>
                <td>6% + GHS 8/day</td>
              </tr>
            </table>

            <p className="text-sm">
              Why lower fees for Public? <br /> Because a child’s surgery
              shouldn’t cost more than a birthday gift. <br /> We lower fees for
              causes so more love reaches those who need it most.
            </p>
          </article>
        </section>
        <aside className="fixed right-10 hidden flex-col gap-3 rounded-[8px] border border-[#F0F0F0] bg-white/50 p-2 md:flex">
          <h5 className="text-sm font-medium text-[#0A0A0A]">
            Welcome Home, Friend
          </h5>
          <ul className="space-y-3">
            {faqSections.map((item, index) => (
              <li
                key={index}
                className="list-inside list-decimal px-2 text-sm text-[#525252]"
              >
                <Link to={item.link}>{item.question}</Link>
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#525252]">You’re Ready to Begin</p>
        </aside>
      </section>
    </main>
  );
}
