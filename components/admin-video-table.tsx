"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
} from "@tanstack/react-table";
import { Eye, EyeOff, Trash2, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ==== VIDEO DATA TYPE AND FAKE DATA ====
export type VideoRow = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  stat: {
    views: number;
    comments: number;
    reports: number;
  };
};

const videoData: VideoRow[] = [
  {
    id: "v001",
    title: "React Table Tutorial",
    createdAt: "2024-05-15",
    updatedAt: "2024-06-01",
    stat: { views: 202, comments: 17, reports: 1 },
  },
  {
    id: "v002",
    title: "Next.js Best Practices",
    createdAt: "2024-04-12",
    updatedAt: "2024-06-18",
    stat: { views: 158, comments: 9, reports: 0 },
  },
  {
    id: "v003",
    title: "Design with TailwindCSS",
    createdAt: "2024-06-10",
    updatedAt: "2024-06-11",
    stat: { views: 312, comments: 25, reports: 2 },
  },
  {
    id: "v004",
    title: "State Management in React",
    createdAt: "2024-05-20",
    updatedAt: "2024-05-22",
    stat: { views: 109, comments: 3, reports: 0 },
  },
  {
    id: "v005",
    title: "Debugging JavaScript",
    createdAt: "2024-03-01",
    updatedAt: "2024-04-11",
    stat: { views: 485, comments: 44, reports: 5 },
  },
  {
    id: "v006",
    title: "Modern CSS Grid",
    createdAt: "2024-06-05",
    updatedAt: "2024-06-07",
    stat: { views: 77, comments: 6, reports: 0 },
  },
  {
    id: "v007",
    title: "Typescript Crash Course",
    createdAt: "2024-06-14",
    updatedAt: "2024-06-15",
    stat: { views: 239, comments: 20, reports: 3 },
  },
  {
    id: "v008",
    title: "Fullstack Overview",
    createdAt: "2024-05-31",
    updatedAt: "2024-06-03",
    stat: { views: 300, comments: 19, reports: 2 },
  },
];

// ==== COLUMNS ====
export const videoColumns: ColumnDef<VideoRow>[] = [
  {
    header: "No.",
    cell: ({ row }) => row.index + 1,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => row.original.id,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => row.original.title,
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) =>
      new Date(row.original.createdAt).toLocaleDateString("en-GB"),
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) =>
      new Date(row.original.updatedAt).toLocaleDateString("en-GB"),
  },
  {
    id: "statistic",
    header: "Statistic",
    cell: ({ row }) => {
      const stat = row.original.stat;
      return (
        <div className="flex flex-col gap-1 text-xs">
          <span>
            Views: <b>{stat.views}</b>
          </span>
          <span>
            Comments: <b>{stat.comments}</b>
          </span>
          <span>
            Reports: <b>{stat.reports}</b>
          </span>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    id: "actions",
    header: "Action",
    enableSorting: false,
    enableHiding: false,
    cell: function ActionsCell({ row }) {
      // Hide dialog state
      const [hideOpen, setHideOpen] = React.useState(false);
      const [hideReason, setHideReason] = React.useState("");
      const [hideDays, setHideDays] = React.useState("7");

      // Delete dialog state
      const [deleteOpen, setDeleteOpen] = React.useState(false);
      const [deleteReason, setDeleteReason] = React.useState("");

      return (
        <div className="flex gap-2 justify-center">
          {/* VISIT */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => alert(`Visit video: ${row.original.id}`)}
          >
            <Video className="w-4 h-4" />
          </Button>
          {/* HIDE */}
          <Button variant="ghost" size="icon" onClick={() => setHideOpen(true)}>
            <EyeOff className="w-4 h-4 text-yellow-500" />
          </Button>
          <Dialog open={hideOpen} onOpenChange={setHideOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Hide video {row.original.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-2">
                <Label htmlFor="hide-reason">Hide reason</Label>
                <Input
                  id="hide-reason"
                  placeholder="Enter hide reason..."
                  value={hideReason}
                  onChange={(e) => setHideReason(e.target.value)}
                />
                <Label htmlFor="hide-days">Hide duration (days)</Label>
                <Select value={hideDays} onValueChange={setHideDays}>
                  <SelectTrigger id="hide-days" className="w-full">
                    <SelectValue placeholder="Select hide days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 day</SelectItem>
                    <SelectItem value="3">3 days</SelectItem>
                    <SelectItem value="7">7 days</SelectItem>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="9999">Permanent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter>
                <Button variant="secondary" onClick={() => setHideOpen(false)}>
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    setHideOpen(false);
                    alert(
                      `Hid video "${row.original.title}" for ${
                        hideDays === "9999" ? "Permanent" : hideDays + " days"
                      }.\nReason: ${hideReason}`
                    );
                    setHideReason("");
                    setHideDays("7");
                  }}
                  disabled={!hideReason}
                >
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          {/* DELETE */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDeleteOpen(true)}
          >
            <Trash2 className="w-4 h-4 text-destructive" />
          </Button>
          <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Confirm delete video "{row.original.title}"
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-2">
                <Label htmlFor="delete-reason">Delete reason</Label>
                <Input
                  id="delete-reason"
                  placeholder="Enter delete reason..."
                  value={deleteReason}
                  onChange={(e) => setDeleteReason(e.target.value)}
                />
              </div>
              <DialogFooter>
                <Button
                  variant="secondary"
                  onClick={() => setDeleteOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    setDeleteOpen(false);
                    alert(
                      `Deleted video "${row.original.title}".\nReason: ${deleteReason}`
                    );
                    setDeleteReason("");
                  }}
                  disabled={!deleteReason}
                >
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];

// ==== VIDEO TABLE COMPONENT ====
export function AdminVideoTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable({
    data: videoData,
    columns: videoColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  });

  return (
    <div className="w-full max-w-[1400px] mx-auto px-2">
      <div className="overflow-x-auto">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter title..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="text-sm font-bold text-center"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="text-center">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={videoColumns.length}
                    className="h-24 text-center"
                  >
                    No data.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
