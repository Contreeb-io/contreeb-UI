import { X } from "lucide-react";
import { useEffect, useState } from "react";
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
  const [changeBg, setChangeBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setChangeBg(true);
      } else {
        setChangeBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {};
  }, []);

  return (
    <main className="relative isolate min-h-svh pb-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(125,68,182,0.5)_0%,rgba(183,111,255,0.43)_100%)] blur-[70px] md:blur-[490px]" />
      <div
        className={`fixed top-0 z-10 w-full ${!changeBg ? "bg-[#FFFFFF29]" : "bg-white/50"} `}
      >
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
            className="flex items-center gap-1 rounded-full bg-[#E3EFFC] p-2 text-sm text-[#2B2B2B]"
          >
            <X size={16} color="#101928" /> close
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

          <article className="space-y-4" id="how-to-create-campaign">
            <h1 className="font-mackinac font-medium text-[#0E021A]">
              3. How to Create a Campaign (It’s Free & Easy)
            </h1>
            <div className="space-y-1.5 text-[#5D5757]">
              <h5 className="font-medium">Step 1: Tell Us Your Story</h5>
              <ul className="list-inside list-decimal space-y-0.5 border-b border-[#C1C1C1] pb-2 text-sm">
                <li>Tap “Start a Campaign”</li>
                <li>Choose: Personal or Public</li>
                <li>
                  Give it a name (e.g., “Help Nana Yaa Go to Nursing School”)
                </li>
                <li>Write a short, honest story</li>
                <li>Set your goal (say GHS 1,000)</li>
                <li>Pick start & end date</li>
              </ul>
            </div>
            <div className="space-y-1.5 border-b border-[#C1C1C1] pb-2 text-[#5D5757]">
              <h5 className="font-medium">
                Step 2: Add Items (Optional but Powerful)
              </h5>
              <p>Want to show exactly what the money is for?</p>
              <ul className="list-inside list-disc space-y-0.5 text-sm">
                <li>Tap “Add Item”</li>
                <li>Example: “MacBook Pro – GHS 12,000”</li>
                <li>Add photo (optional)</li>
                <li>A short description.</li>
                <li>Drag to reorder (if needed)</li>
              </ul>
              <p>No items? No problem. A general fund works too.</p>
            </div>
            <div className="space-y-1.5 border-b border-[#C1C1C1] pb-2 text-[#5D5757]">
              <h5 className="font-medium">
                Step 3: Verification (Public Campaigns Only)
              </h5>
              <p>We want to protect trust. So for Public campaigns:</p>
              <ul className="list-inside list-disc space-y-0.5 text-sm">
                <li>
                  Upload{" "}
                  <ul className="mt-0.5 ml-5 list-inside space-y-0.5 [&>li]:before:mr-2 [&>li]:before:content-['◦']">
                    <li>Ghana Card (front only) </li>
                    <li>Proof (hospital bill, school letter, etc.)</li>
                  </ul>
                </li>
                <li>We review within 24 hours</li>
                <li>You’ll see: “Verification in progress”</li>
                <li>Once approved: You get a verification email.</li>
              </ul>
              <p>
                We keep your documents private and secure. Your Ghana Card is
                deleted right after verification.
              </p>
            </div>
            <div className="space-y-1.5 text-[#5D5757]">
              <h5 className="font-medium">Step 4: Set Up Payout</h5>
              <ul className="list-inside list-decimal space-y-0.5 border-b border-[#C1C1C1] pb-2 text-sm">
                <li>
                  Choose how you’ll receive money:
                  <ul className="mt-0.5 ml-5 list-inside list-disc space-y-0.5">
                    <li>
                      <span className="font-semibold">Mobile Money</span> (MTN,
                      Vodafone, AT) —&gt; What we recommend (fastest)
                    </li>
                    <li>
                      <span className="font-semibold">Bank Account</span> (any
                      Ghanaian bank)
                    </li>
                  </ul>
                </li>
                <li>Enter your details (e.g., 0550 000 000 – Kwaku Krah)</li>
              </ul>
            </div>
            <div className="flex items-baseline gap-4 rounded-md bg-[#FFFFFF57] px-4 py-2">
              <p>💡</p>
              <div className="text-sm text-[#5D5757]">
                Your campaign is live! <br /> Share the link via WhatsApp, X,
                Instagram, Snapchat or anywhere love travels.
              </div>
            </div>
          </article>

          <article className="space-y-4" id="how-donors-give">
            <h1 className="font-mackinac font-medium text-[#0E021A]">
              4. How Donors Give (So Simple, So Kind)
            </h1>
            <div className="space-y-1.5 text-sm text-[#5D5757]">
              <ul className="list-inside list-decimal space-y-1 pl-1.5 md:pl-4">
                <li>Click your campaign link</li>
                <li>See your story + items</li>
                <li>
                  Choose:
                  <ul className="list-inside list-disc">
                    <li className="pl-1.5 md:pl-4">
                      Donate to a specific item (“I’ll fund the laptop!”)
                    </li>
                    <li className="pl-1.5 md:pl-4">Or give generally</li>
                  </ul>
                </li>
                <li>Input your email for payment receipt.</li>
                <li>
                  Pay safely with{" "}
                  <span className="font-bold">Mobile Money</span> ,{" "}
                  <span className="font-bold">Card</span> ,{" "}
                  <span className="font-bold">Bank</span>,{" "}
                  <span className="font-bold">Apple Pay</span> (via Paystack)
                </li>
              </ul>
              <p>Every cedi is tracked. Every donor is thanked.</p>
            </div>
          </article>

          <article className="space-y-4" id="fees">
            <h1 className="font-mackinac font-medium text-[#0E021A]">
              5. Fees: Only If You Win (And You Keep 94%-96% of It)
            </h1>
            <div className="space-y-1.5 text-sm text-[#5D5757]">
              <table>table</table>
              <p>No money raised? You pay GHS 0. Always!</p>
            </div>
          </article>

          <article className="space-y-4" id="when-how-paid">
            <h1 className="font-mackinac font-medium text-[#0E021A]">
              6. When & How You Get Paid
            </h1>
            <div className="space-y-1.5 text-sm text-[#5D5757]">
              <p>Here’s exactly what happens the moment your campaign ends:</p>
              <ul className="list-inside list-decimal space-y-1.5">
                <li>
                  <span className="font-bold">
                    We quickly check everything (Public Campaigns Only)
                  </span>
                  <p className="pl-1.5 md:pl-4">
                    For Public campaigns, our team does one final 2-minute
                    review of your documents (just to protect everyone). This
                    usually takes less than 10 minutes to complete.
                  </p>
                </li>
                <li>
                  <span className="font-bold">
                    Fees are deducted automatically
                  </span>
                  <p className="pl-1.5 md:pl-4">
                    Only the small fee we already showed you. No hidden charges!
                  </p>
                </li>
                <li>
                  <span className="font-bold">
                    Your money reaches you in 1–3 business days
                  </span>
                  <p className="pl-1.5 md:pl-4">
                    Whether you chose Mobile Money or bank account, it arrives
                    safely within 1–3 business days. You’ll see the notification
                    from Contreebute Technologies (that’s our official
                    registered name).
                  </p>
                </li>
                <li>
                  <span className="font-bold">
                    You get a clean, clear and loving receipt instantly
                  </span>
                  <div className="pl-1.5 md:pl-4">
                    In the app and by email:
                    <div className="mt-2 flex items-start gap-4 rounded-md bg-[#FFFFFF57] px-4 py-2 text-sm text-[#5D5757]">
                      <p>💡</p>
                      <div>
                        “Ei, your people showed up big time! ❤️”
                        <br />
                        Duration: Nov 1, 2025 - Nov 6, 2025 <br /> Raised: GHS
                        5,000
                        <br />
                        Our small fee: GHS 220
                        <br />
                        You receive: GHS 4,780
                      </div>
                    </div>
                  </div>
                  <div className="mt-1.5">
                    We know waiting is hard, so we move as fast as we possibly
                    can.
                    <br /> When your campaign ends, your money is basically
                    already on the way.
                    <p className="mt-1.5">
                      Your money is safe, it’s truly yours.
                      <br /> We’re in this together
                      <span>✍</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </article>

          <article className="space-y-4" id="your-dashboard">
            <h1 className="font-mackinac font-medium text-[#0E021A]">
              7. Your Dashboard: Stay Close to Your Progress
            </h1>
            <div className="space-y-1.5 text-sm text-[#5D5757]">
              <p>After launching, tap “My Dashboard” to see:</p>
              <table>table</table>
              <div>
                <h5 className="font-bold">Donations Table</h5>
                <table>table</table>

                <p className="mt-1.5">
                  <span className="font-bold">Actions:</span> Export list, send
                  thank-you, share update
                </p>
              </div>
            </div>
          </article>

          <article className="space-y-4" id="trust-and-safety">
            <h1 className="font-mackinac font-medium text-[#0E021A]">
              8. Trust & Safety (We’ve Got You)
            </h1>
            <div className="space-y-1.5 text-sm text-[#5D5757]">
              <table>table</table>
            </div>
          </article>

          <article className="space-y-4" id="need-help">
            <h1 className="font-mackinac font-medium text-[#0E021A]">
              9. Need Help? We’re Here (Like Family)
            </h1>
            <div className="space-y-2 text-sm text-[#5D5757]">
              <ul className="list-inside list-disc">
                <li>
                  Reach us via our socials (we are{" "}
                  <span className="font-bold">contreebute</span> everywhere)
                </li>
                <li>
                  <span className="font-bold">Email</span>:{" "}
                  <a href="mailto:hello@contreebute.io">hello@contreebute.io</a>
                </li>
              </ul>
              <p className="italic">
                No robots. Just real humans who want you to succeed.
              </p>
            </div>
          </article>

          <article
            className="space-y-4 border-b border-[#c1c1c1] pb-3"
            id="faq"
          >
            <h1 className="font-mackinac font-medium text-[#0E021A]">
              10. Frequently Asked Questions (FAQ)
            </h1>
            <div className="space-y-2 text-sm text-[#5D5757]">
              <div className="space-y-1">
                <h5 className="font-bold">Q: Do I pay to start a campaign?</h5>
                <p>
                  <span className="font-bold">A:</span> Never. It’s 100% free to
                  create and launch.
                </p>
              </div>
              <div className="space-y-1">
                <h5 className="font-bold">Q: When do I pay fees?</h5>
                <p>
                  <span className="font-bold">A:</span> Only after your campaign
                  ends — and only if you raise money.
                </p>
              </div>
              <div className="space-y-1">
                <h5 className="font-bold">
                  Q: Can I change things after launch?
                </h5>
                <p>
                  <span className="font-bold">A:</span> Yes! Edit name, items,
                  dates, or payout method anytime.
                </p>
              </div>
              <div className="space-y-1">
                <h5 className="font-bold">Q: What if I don’t hit my goal?</h5>
                <p>
                  <span className="font-bold">A:</span> You still keep every
                  cedi raised (minus tiny fees).
                </p>
              </div>
              <div className="space-y-1">
                <h5 className="font-bold">Q: How do I withdraw?</h5>
                <p>
                  <span className="font-bold">A:</span> Request a payout or
                  automatically receive your funds 1–3 days in your MoMo or
                  bank.
                </p>
              </div>
              <div className="space-y-1">
                <h5 className="font-bold">Q: Is my data safe?</h5>
                <p>
                  <span className="font-bold">A:</span> Yes. We use bank-level
                  encryption. Your trust is everything.
                </p>
              </div>
            </div>
          </article>

          <article className="space-y-2 text-sm text-[#5D5757]">
            <div className="space-y-1.5 border-b border-[#c1c1c1] pb-3">
              <h5 className="font-bold">You’re Ready to Begin</h5>
              <p>
                Whether you’re{" "}
                <span className="font-bold">asking with hope</span> or{" "}
                <span className="font-bold">giving with love</span>,{" "}
                <span className="font-bold">Contreebute</span> is your safe
                space. <br />
                <span className="font-bold">
                  No pressure. No judgment. Just kindness in action.
                </span>
              </p>
            </div>
            <div className="space-y-1.5 border-b border-[#c1c1c1] pb-3">
              <div>
                <h5 className="font-bold">Start Your Campaign</h5>
                <p>Create Now – It’s free, fast and full of love.</p>
              </div>
              <div>
                <h5 className="font-bold">Or Explore Campaigns</h5>
                <p>Browse Dreams – Be someone’s answer today.</p>
              </div>
            </div>
            <div className="border-l-2 border-[#404040] pl-2">
              “One campaign can change a life.
              <br /> One donation can change the world.
              <br /> Thank you for being part of this family.”
            </div>
            <div className="mt-5">
              With impact, <br />{" "}
              <span className="font-bold">The Contreebute Team</span>
            </div>
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
