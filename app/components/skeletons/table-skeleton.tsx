import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface TableSkeletonProps {
  columns: number;
  rows?: number;
}

export function TableSkeleton({ columns, rows = 5 }: TableSkeletonProps) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-[#EAECF0]">
      <Table>
        <TableHeader>
          <TableRow className="border-[#EAECF0]">
            {Array.from({ length: columns }).map((_, index) => (
              <TableHead key={index} className="bg-[#FCFCFD] text-sm">
                <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <TableRow key={rowIndex} className="border-[#EAECF0]">
              {Array.from({ length: columns }).map((_, colIndex) => (
                <TableCell key={colIndex} className="text-[13px] md:text-base">
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
