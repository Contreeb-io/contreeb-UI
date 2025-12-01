import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import SignIn from "../components/home/sign-in";

export default function Home() {
  return (
    <section className="flex h-svh flex-col items-center justify-center overflow-hidden bg-[url('/image-mobile.webp')] bg-cover bg-no-repeat px-4 sm:bg-[url('/image-desktop.webp')]">
      <div className="absolute inset-0 top-[90px]">
        <img
          src={"/bg-cover.webp"}
          alt="bg-cover-illustration"
          className="h-full w-full object-cover md:object-fill"
        />
      </div>

      <div className="button-bg font-mackinac absolute top-8 left-1/2 flex w-[310px] -translate-x-1/2 items-center justify-between gap-8 rounded-full px-6 py-2.5 opacity-70">
        <img src="/logo.svg" alt="Contreebute-logo" className="h-10 w-32" />
        <SignIn />
      </div>

      <article className="z-30 mt-20 max-w-[734px] space-y-10 self-center">
        <div className="space-y-3">
          <h1 className="font-mackinac text-center text-5xl font-medium text-[#06052A] md:text-8xl">
            Crowdfund for any Occasion
          </h1>
          <p className="text-center font-sans text-sm text-[#464646] md:text-lg">
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

        <Link
          to={"/create-campaign"}
          className="button-shadow font-mackinac mx-auto flex max-w-[347px] cursor-pointer items-center justify-center gap-4 rounded-full bg-[#5C59ED] px-6 py-3 text-sm font-medium text-white md:text-lg"
        >
          Create your campaign in 3 steps
          <ArrowRight />
        </Link>
      </article>

      <footer className="fixed bottom-2 z-30 w-full md:bottom-4">
        <div className="mx-auto flex max-w-[1100px] items-end justify-between gap-y-4 px-4 font-sans md:items-center">
          <p className="text-[#464646]">
            {new Date().getFullYear()} Contreebute
          </p>
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center md:gap-4">
            <Link to={"/user-guide"} className="hover:text-[#2F2D9E]">
              User Guide
            </Link>
            <Link to={"/terms"} className="hover:text-[#2F2D9E]">
              Terms of Service
            </Link>
            <Link to={"/privacy-policy"} className="hover:text-[#2F2D9E]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
}
