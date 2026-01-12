import { type ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp } from "lucide-react";
import { formatLongDate } from "../../lib/utils";

export type Payment = {
  created_at: string;
  donor_name: string;
  items: string;
  amount: number;
};

export const dashboardColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "created_at",
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
    cell: ({ row }) => {
      return <div>{formatLongDate(row.original.created_at)}</div>;
    },
  },
  {
    accessorKey: "donor_name",
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
    cell: ({ row }) => {
      return <div>{row.original.items || "N/A"}</div>;
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
