import { type ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp } from "lucide-react";

export type Payment = {
  date: string;
  name: string;
  items: string;
  amount: number;
};

export const dashboardColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => {
      const isSorted = column.getIsSorted();
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex cursor-pointer items-center"
        >
          Date
          {isSorted === "asc" ? (
            <ArrowUp className="ml-1 h-4 w-4" />
          ) : isSorted === "desc" ? (
            <ArrowDown className="ml-1 h-4 w-4" />
          ) : (
            <ArrowDown className="ml-1 h-4 w-4" />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      const isSorted = column.getIsSorted();
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex cursor-pointer items-center"
        >
          Name
          {isSorted === "asc" ? (
            <ArrowUp className="ml-1 h-4 w-4" />
          ) : isSorted === "desc" ? (
            <ArrowDown className="ml-1 h-4 w-4" />
          ) : (
            <ArrowDown className="ml-1 h-4 w-4" />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "items",
    header: ({ column }) => {
      const isSorted = column.getIsSorted();
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex cursor-pointer items-center"
        >
          Item(s)
          {isSorted === "asc" ? (
            <ArrowUp className="ml-1 h-4 w-4" />
          ) : isSorted === "desc" ? (
            <ArrowDown className="ml-1 h-4 w-4" />
          ) : (
            <ArrowDown className="ml-1 h-4 w-4" />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      const isSorted = column.getIsSorted();
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex cursor-pointer items-center"
        >
          Amount(GHS)
          {isSorted === "asc" ? (
            <ArrowUp className="ml-1 h-4 w-4" />
          ) : isSorted === "desc" ? (
            <ArrowDown className="ml-1 h-4 w-4" />
          ) : (
            <ArrowDown className="ml-1 h-4 w-4" />
          )}
        </div>
      );
    },
  },
];
