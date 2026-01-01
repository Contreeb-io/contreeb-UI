import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

export default function EditCampaign() {
  return (
    <Sheet>
      <SheetContent>
        <SheetHeader className="border-b border-[#F0F0F0]">
          <SheetTitle className="font-mackinac font-medium text-[#0E021A]">
            Edit campaign
          </SheetTitle>
          <SheetDescription className="sr-only">
            Make changes to your campaign here. Click save when you&apos;re
            done.
          </SheetDescription>
        </SheetHeader>

        <SheetFooter className="flex-row justify-end gap-3">
          <SheetClose asChild>
            <Button className="relative top-4 bg-transparent text-sm font-semibold text-[#404040] hover:bg-transparent">
              Close
            </Button>
          </SheetClose>
          <Button variant="custom" type="submit" className="w-auto">
            Save and continue
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
