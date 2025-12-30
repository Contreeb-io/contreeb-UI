import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen w-full">
      <section className="mx-auto my-auto flex w-full flex-col items-center justify-center gap-4 rounded-2xl bg-[#F7F7F7] py-8 md:max-w-[566px]">
        <div className="max-w-[322px] text-center">
          <h1 className="font-fraunces text-[40px] font-bold text-[#0E021A] md:text-[80px]">
            404
          </h1>
          <p className="font-mackinac mt-4 text-[#0E021A] md:text-lg">
            Page couldn’t be found
          </p>
          <p className="font-sans text-sm text-[#344054]">
            The page you are looking for doesn’t exist or has been moved. but
            don’t worry, we’ll get you back on track.
          </p>
          <Button
            variant="custom"
            onClick={() => navigate("/dashboard", { replace: true })}
          >
            Go back to dashboard
          </Button>
        </div>
      </section>
    </main>
  );
}
