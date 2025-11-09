import { type ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp } from "lucide-react";

export type Payment = {
  date: string;
  name: string;
  items: string;
  amount: number;
};

export const donationColumns: ColumnDef<Payment>[] = [
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
          className="hidden cursor-pointer items-center sm:flex"
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
    cell: ({ row }) => {
      return <div className="hidden sm:block">{row.getValue("name")}</div>;
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
