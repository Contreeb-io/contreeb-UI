import { useRevalidator, useRouteError } from "react-router";
import { Button } from "../components/ui/button";

export default function ErrorElement() {
  const error = useRouteError() as { message: string };
  const revalidator = useRevalidator();

  return (
    <main className="flex min-h-screen w-full">
      <section className="mx-auto my-auto flex w-full flex-col items-center justify-center gap-4 rounded-2xl bg-[#F7F7F7] px-6 py-8 md:max-w-[566px]">
        <div className="text-center">
          <h1 className="font-fraunces text-[40px] font-bold text-[#0E021A]">
            An error occurred
          </h1>
          <p>error details: {error?.message}</p>
        </div>
        <Button
          onClick={() => revalidator.revalidate()}
          disabled={revalidator.state === "loading"}
          isLoading={revalidator.state === "loading"}
          variant={"custom"}
          className="md:max-w-[322px]"
        >
          Refresh page
        </Button>
      </section>
    </main>
  );
}
