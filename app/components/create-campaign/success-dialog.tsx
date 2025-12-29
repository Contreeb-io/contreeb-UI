import { DialogTitle } from "@radix-ui/react-dialog";
import { Check } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useMultiStepForm } from "../../context/multi-step-context";
import { errorStyle } from "../../lib/http";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription } from "../ui/dialog";

export default function SuccessDialog() {
  const [copied, setCopied] = useState(false);
  const { isSuccess, campaignDetails } = useMultiStepForm();

  const navigate = useNavigate();

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(campaignDetails.sharableLink);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy to clipboard", { style: errorStyle });
    }
  };

  return (
    <Dialog open={isSuccess}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent
        className="flex w-[92%] flex-col items-center gap-8 rounded-2xl px-3 py-6 md:max-w-[457px] md:p-8"
        showCloseButton={false}
      >
        <div className="flex flex-col items-center gap-5 md:gap-8">
          <img
            src="/success.webp"
            alt="success-icon"
            className="size-[100px] md:size-[146px]"
          />
          <DialogTitle className="text-center font-semibold text-[#0E021A] md:text-xl">
            Congratulations Your campaign is ready.
          </DialogTitle>
          <DialogDescription className="hidden">
            Success modal
          </DialogDescription>

          <div className="flex w-full flex-col">
            <Button variant="custom" onClick={handleCopyToClipboard}>
              {copied ? (
                <>
                  <Check className="mr-1 h-4 w-4" />
                  Copied!
                </>
              ) : (
                "Share campaign"
              )}
            </Button>
            <Button
              variant="custom"
              className="border border-[#6360F0] bg-white text-[#6360F0]"
              onClick={() => navigate(`/dashboard/${campaignDetails.id}`)}
            >
              Go to Dashboard
            </Button>
          </div>
        </div>
      </DialogContent>{" "}
    </Dialog>
  );
}
