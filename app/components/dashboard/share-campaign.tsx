import { Check, Copy, Share2, X } from "lucide-react";
import { useCopy } from "../../hooks/use-copy";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface ShareCampaignModalProps {
  shareableLink: string;
  showShareDialog: boolean;
  setShowShareDialog: (show: boolean) => void;
}

const socialMediaPlatforms = [
  { name: "WhatsApp", icon: "/whatsapp.png" },
  { name: "X (Twitter)", icon: "/x.png" },
  { name: "Facebook", icon: "/facebook.png" },
  { name: "Linkedin", icon: "/link.png" },
];

export default function ShareCampaignModal({
  shareableLink,
  showShareDialog,
  setShowShareDialog,
}: ShareCampaignModalProps) {
  const { copied, handleCopyToClipboard } = useCopy(shareableLink);

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareableLink);
    const shareText = encodeURIComponent("Check out this campaign!");

    let url = "";

    switch (platform) {
      case "WhatsApp":
        url = `https://wa.me/?text=${shareText}%20${encodedUrl}`;
        break;

      case "X":
        url = `https://x.com/intent/post?url=${encodedUrl}&text=${shareText}`;
        break;

      case "Facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;

      case "LinkedIn":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;

      default:
        return;
    }

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
      <DialogTrigger className="flex items-center gap-1.5 rounded-full bg-[#F0F2F5] px-4 py-2 text-sm font-medium text-[#0E021A] md:text-base">
        {" "}
        <Share2 size={16} /> Share
      </DialogTrigger>
      <DialogContent
        className="flex w-[96%] flex-col gap-8 rounded-2xl px-0 pt-2.5 md:max-w-147.5"
        showCloseButton={false}
      >
        <article className="flex items-center justify-between border-b border-[#F0F0F0] px-4 pb-2">
          <DialogTitle className="font-fraunces text-base font-semibold">
            Share campaign
          </DialogTitle>
          <DialogDescription className="sr-only">
            Share your campaign
          </DialogDescription>
          <div
            className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-[#F0F2F5]"
            onClick={() => setShowShareDialog(false)}
          >
            <X color="#101928" size={16} />
          </div>
        </article>
        <article className="space-y-8 px-4 md:px-6">
          <div className="space-y-2.5">
            <Label className="text-[#0A0A0A]">
              Copy your shortened URL and share{" "}
            </Label>
            <div className="relative">
              <Input
                value={shareableLink}
                className="bg-[#F0F0F0] text-[#A3A3A3]"
                readOnly
              />
              <div
                className="absolute right-2 bottom-2.25 cursor-pointer transition-all"
                onClick={handleCopyToClipboard}
              >
                {copied ? (
                  <div className="flex items-center gap-1.5 rounded-md bg-green-100 px-2 py-1">
                    <Check size={16} className="text-green-600" />
                    <span className="text-xs font-medium text-green-600">
                      Copied!
                    </span>
                  </div>
                ) : (
                  <Copy
                    className="transition-colors hover:text-[#0E021A]"
                    color="#525252"
                    size={18}
                  />
                )}
              </div>
            </div>
          </div>
          <section className="space-y-4">
            <h5 className="text-center text-lg font-medium text-[#000000]">
              Share via
            </h5>
            <div className="grid grid-cols-5 place-items-center">
              {socialMediaPlatforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex cursor-pointer flex-col items-center gap-3"
                  onClick={() => handleShare(platform.name)}
                >
                  <img src={platform.icon} alt={platform.name} />
                  <h5>{platform.name}</h5>
                </div>
              ))}
            </div>
          </section>
        </article>
      </DialogContent>
    </Dialog>
  );
}
