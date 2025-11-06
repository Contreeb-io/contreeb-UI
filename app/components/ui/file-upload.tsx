// components/ui/file-upload.tsx
import { CloudUpload, X } from "lucide-react";
import { useState } from "react";

interface FileUploadProps {
  value?: File | string;
  onChange: (file: File | undefined) => void;
  accept?: string;
  maxSize?: string;
  isDragging?: boolean;
  onDragStateChange?: (isDragging: boolean) => void;
}

export default function FileUpload({
  value,
  onChange,
  accept = "*/*",
  maxSize = "max. 800x400px",
  isDragging: externalIsDragging,
  onDragStateChange,
}: FileUploadProps) {
  const [internalIsDragging, setInternalIsDragging] = useState(false);

  const isDragging = externalIsDragging ?? internalIsDragging;
  const setIsDragging = onDragStateChange ?? setInternalIsDragging;

  const imageUrl = value instanceof File ? URL.createObjectURL(value) : value;

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      if (file.type.startsWith("image/")) {
        onChange(file);
      }
    }
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(undefined);
  };

  const handleClick = () => {
    if (!value) {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = accept;
      input.onchange = (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) onChange(file);
      };
      input.click();
    }
  };

  return (
    <article
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`font-inter relative cursor-pointer rounded-2xl border-2 border-dashed p-6 transition-all ${
        isDragging
          ? "border-[#5C59ED] bg-[#F0EFFF]"
          : "border-[#D0D5DD] hover:border-[#5C59ED]"
      }`}
    >
      {!value ? (
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex size-14 items-center justify-center rounded-full bg-[#F0F2F5]">
            <CloudUpload size={20} color="#475367" />
          </div>

          <div>
            <h5 className="text-center text-sm text-[#475367]">
              <span className="font-semibold text-[#EB5017]">
                Click to upload
              </span>{" "}
              or drag and drop
            </h5>
            <p className="text-xs text-[#98A2B3]">
              SVG, PNG, JPG or GIF ({maxSize})
            </p>
          </div>
        </div>
      ) : (
        <>
          <button
            type="button"
            onClick={handleCancel}
            className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-red-500 text-white transition-colors hover:bg-red-600"
            aria-label="Remove image"
          >
            <X size={18} />
          </button>
          <img
            src={imageUrl}
            alt="uploaded-image"
            className="mx-auto max-h-[200px] object-contain"
          />
        </>
      )}
    </article>
  );
}
