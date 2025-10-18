import { DialogTitle } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogDescription } from "../ui/dialog";

export default function SuccessDialog() {
  return (
    <Dialog>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent
        className="flex w-[92%] flex-col items-center gap-8 rounded-2xl p-8 md:max-w-[457px]"
        showCloseButton={false}
      >
        <div className="flex flex-col items-center gap-8">
          <img
            src="/success.webp"
            alt="success-icon"
            className="size-[146px]"
          />
          <DialogTitle className="text-center font-bold text-[#0E021A] md:text-xl">
            Congratulations Your campaign is ready.
          </DialogTitle>
          <DialogDescription className="hidden">
            Success modal
          </DialogDescription>

          <div className="flex w-full flex-col gap-2">
            <button className="cursor-pointer rounded-full border border-[#6360F0] bg-[#6360F0] px-4 py-3 text-sm font-semibold text-white">
              Share campaign
            </button>
            <button className="cursor-pointer rounded-full border border-[#6360F0] bg-transparent px-4 py-3 text-sm font-semibold text-[#6360F0]">
              Go to Dashboard
            </button>
          </div>
        </div>
      </DialogContent>{" "}
    </Dialog>
  );
}
