import { Trash2 } from "lucide-react";
import type React from "react";
import type { SetStateAction } from "react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./dialog";

export default function DeleteModal({
  header,
  text,
  showDeleteModal,
  setShowDeleteModal,
}: {
  header: string;
  text: string;
  showDeleteModal: boolean;
  setShowDeleteModal: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={showDeleteModal}>
      <DialogContent
        className="flex w-[92%] flex-col items-center gap-8 rounded-2xl px-3 py-6 md:max-w-114.25 md:p-8"
        showCloseButton={false}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex size-16 items-center justify-center rounded-full bg-[#FF4D4D2B]">
            <Trash2 color="#EF4444" size={30} />
          </div>
          <div className="mt-1.5 space-y-2.5">
            <DialogTitle className="font-mackinac text-center font-bold text-[#0E021A] md:text-2xl">
              {header}
            </DialogTitle>
            <DialogDescription>{text}</DialogDescription>
          </div>

          <div className="flex w-full flex-col">
            <Button variant="custom" className="bg-[#DC2626] font-medium">
              Yes, remove
            </Button>
            <Button
              variant="custom"
              className="bg-white text-[#667185]"
              onClick={() => setShowDeleteModal(false)}
            >
              No, cancel
            </Button>
          </div>
        </div>
      </DialogContent>{" "}
    </Dialog>
  );
}
