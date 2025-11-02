import { Grip, Pencil, Trash2 } from "lucide-react";
import { useState, type SetStateAction } from "react";
import { DialogTrigger } from "../ui/dialog";
import type { Item } from "./campaign-items";
import EditItemForm from "./edit-item-form";

export default function SelectedItems({
  items,
  setItems,
}: {
  items: Item[];
  setItems: React.Dispatch<SetStateAction<Item[]>>;
}) {
  const [selectedItem, setSelectedItem] = useState<Item>({
    name: "",
    price: 0,
    description: "",
    image: undefined,
  });
  const [idx, setIdx] = useState<number | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  function handleDelete(id: number) {
    const newItems = items.filter((_, index) => index !== id);
    setItems(newItems);
  }

  function handleSelectedItem(id: number) {
    setIdx(id);
    const i = items.find((_, index) => index === id);
    if (!i) {
      return;
    }
    setSelectedItem(i);
  }

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();

    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDragOverIndex(null);
      return;
    }

    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);

    setItems(newItems);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <section className="mt-6 flex w-full flex-col gap-4 self-start">
      {items?.map((item, index) => (
        <article
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, index)}
          onDragEnd={handleDragEnd}
          className={`flex w-full items-center justify-between rounded-[12px] border bg-white/60 p-4 transition-all ${
            draggedIndex === index ? "scale-95 opacity-40" : "opacity-100"
          } ${
            dragOverIndex === index && draggedIndex !== index
              ? "border-[#5C59ED] bg-[#F0EFFF]"
              : "border-[#E4E7EC]"
          }`}
        >
          <div className="flex items-center gap-2">
            <Grip size={14} color="#343330" />
            <div className="capitalize">
              <h5 className="font-mackinac font-bold text-[#0E021A]">
                {item.name}
              </h5>
              {item.description && (
                <p className="text-sm text-[#535353]">{item.description}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <p className="font-medium text-[#0E021A]">GHC{item.price}.00</p>
            <div className="h-11 w-0 border border-[#F0F2F5]"></div>
            <div className="flex gap-2">
              <EditItemForm
                items={items}
                setItems={setItems}
                idx={idx}
                selectedItem={selectedItem}
              >
                <DialogTrigger
                  onClick={() => handleSelectedItem(index)}
                  className="flex size-10 cursor-pointer items-center justify-center rounded-[8px] bg-[#F7F9FC] p-2"
                >
                  {" "}
                  <Pencil size={20} />
                </DialogTrigger>
              </EditItemForm>

              <div
                onClick={() => handleDelete(index)}
                className="flex size-10 cursor-pointer items-center justify-center rounded-[8px] bg-[#FBEAE9] p-2"
              >
                <Trash2 size={20} color="#D42620" />
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
