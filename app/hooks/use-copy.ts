import { useState } from "react";
import { toast } from "sonner";
import { errorStyle } from "../lib/http";

export function useCopy(link: string) {
  const [copied, setCopied] = useState(false);
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy to clipboard", { style: errorStyle });
    }
  };

  return { copied, handleCopyToClipboard };
}
