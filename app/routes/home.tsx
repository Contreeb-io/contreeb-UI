import { ArrowRight } from "lucide-react";
import SignIn from "~/components/home/sign-in";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <section className="flex h-svh items-center justify-center bg-[url('../../public/bg-image.webp')] px-4">
      <div className="fixed top-[90px] right-[0.1px]">
        <img
          src={"/bg-cover.webp"}
          alt="bg-cover-illustration"
          className="h-screen w-screen object-cover md:object-fill"
        />
      </div>

      <div className="button-bg absolute top-8 left-1/2 flex w-[310px] -translate-x-1/2 items-center justify-between gap-8 rounded-full px-6 py-2.5 opacity-70 backdrop-blur-xs">
        <h5 className="text-2xl font-bold text-[#010040]">Contreeb.io</h5>

        <button className="sing-in-btn cursor-pointer rounded-[695px] bg-[#FFDEDE1A] px-4 py-3 font-medium text-[#242424]">
          sign in
        </button>
      </div>

      <article className="z-30 mt-20 max-w-[734px] space-y-10">
        <div className="space-y-3">
          <h1 className="text-center text-5xl font-medium text-[#06052A] md:text-8xl">
            Crowdfund for any Occasion
          </h1>
          <p className="text-center text-sm text-[#464646] md:text-lg">
            Bring <span className="font-semibold text-[#01003C]">friends</span>{" "}
            and <span className="font-semibold text-[#01003C]">family</span>{" "}
            together to{" "}
            <span className="font-semibold text-[#01003C]">
              celebrate life’s most meaningful moments
            </span>
            . Start a campaign and see how small acts of kindness can grow into
            something truly powerful.
          </p>
        </div>

        <button className="button-shadow mx-auto flex cursor-pointer gap-4 rounded-full bg-[#5C59ED] px-6 py-2 font-medium text-white">
          Create your campaign in 3 steps
          <ArrowRight />
        </button>
      </article>

      <SignIn />
    </section>
  );
}
