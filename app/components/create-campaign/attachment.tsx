import { CloudUpload, X } from "lucide-react";
import { useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { ItemType } from "./add-item-form";

export default function Attachment({
  form,
}: {
  form: UseFormReturn<ItemType>;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const image = form.watch("images");
  const imageUrl = image instanceof File ? URL.createObjectURL(image) : image;

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
        form.setValue("images", file);
      }
    }
  };

  return (
    <section className="relative">
      {image && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            form.setValue("images", undefined);
          }}
          className="absolute top-1 right-2 z-30 flex size-9 cursor-pointer items-center justify-center rounded-full bg-[#E3EFFC] p-2 transition-colors hover:bg-[#D1E7FA]"
        >
          <X size={16} color="#101928" />
        </div>
      )}
      <article
        onClick={() => {
          document.getElementById("item-image")?.click();
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`font-inter cursor-pointer rounded-2xl border border-dashed p-6 transition-all ${
          isDragging
            ? "border-[#5C59ED] bg-[#F0EFFF]"
            : "border-[#E4E7EC] hover:border-[#5C59ED]"
        }`}
      >
        {!image ? (
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex size-14 items-center justify-center rounded-full bg-[#F0F2F5]">
              <CloudUpload size={20} color="#475367" />
            </div>

            <div>
              <h5 className="text-center text-sm text-[#475367]">
                <span className="font-semibold text-[#5C59ED]">
                  Click to upload
                </span>{" "}
                or drag and drop
              </h5>
              <p className="text-xs text-[#98A2B3]">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>
            </div>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt="item-image"
            className="max-h-[200px] object-contain"
          />
        )}
      </article>
    </section>
  );
}
