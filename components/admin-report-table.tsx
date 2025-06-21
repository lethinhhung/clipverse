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
import { Eye, Trash2, CheckCircle, Info } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";

// ==== DATA AND TYPE ====
export type ReportRow = {
  id: string;
  content: string;
  createdAt: string;
  status: "unread" | "read";
  reporter: {
    id: string;
    name: string;
  };
  target: {
    id: string;
    name: string;
  };
};

const reportData: ReportRow[] = [
  {
    id: "r001",
    content: "Video contains inappropriate language.",
    createdAt: "2024-06-01",
    status: "unread",
    reporter: { id: "u101", name: "Alice" },
    target: { id: "u500", name: "John Doe" },
  },
  {
    id: "r002",
    content: "Spam comment detected.",
    createdAt: "2024-06-02",
    status: "read",
    reporter: { id: "u102", name: "Bob" },
    target: { id: "u501", name: "Jane Smith" },
  },
  {
    id: "r003",
    content: "Hate speech.",
    createdAt: "2024-06-03",
    status: "unread",
    reporter: { id: "u103", name: "Charlie" },
    target: { id: "u502", name: "Emily" },
  },
  {
    id: "r004",
    content: "Fake news.",
    createdAt: "2024-06-04",
    status: "read",
    reporter: { id: "u104", name: "Daisy" },
    target: { id: "u503", name: "Paul" },
  },
  {
    id: "r005",
    content: "Inappropriate content.",
    createdAt: "2024-06-05",
    status: "unread",
    reporter: { id: "u105", name: "Eve" },
    target: { id: "u504", name: "Olivia" },
  },
  {
    id: "r006",
    content: "Harassment.",
    createdAt: "2024-06-06",
    status: "unread",
    reporter: { id: "u106", name: "Frank" },
    target: { id: "u505", name: "Michael" },
  },
  {
    id: "r007",
    content: "Copyright violation.",
    createdAt: "2024-06-07",
    status: "read",
    reporter: { id: "u107", name: "Grace" },
    target: { id: "u506", name: "Sophia" },
  },
  {
    id: "r008",
    content: "Violence in video.",
    createdAt: "2024-06-08",
    status: "unread",
    reporter: { id: "u108", name: "Henry" },
    target: { id: "u507", name: "Lucas" },
  },
];

// ==== COLUMNS ====
export const reportColumns: ColumnDef<ReportRow>[] = [
  {
    header: "No.",
    cell: ({ row }) => row.index + 1,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Report ID",
    cell: ({ row }) => row.original.id,
  },
  {
    accessorKey: "content",
    header: "Content",
    cell: ({ row }) => row.original.content,
  },
  {
    accessorKey: "createdAt",
    header: "Report Date",
    cell: ({ row }) =>
      new Date(row.original.createdAt).toLocaleDateString("en-GB"),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={
          row.original.status === "read"
            ? "text-green-600 font-semibold"
            : "text-yellow-500 font-semibold"
        }
      >
        {row.original.status === "read" ? "Read" : "Unread"}
      </span>
    ),
  },
  {
    id: "actions",
    header: "Action",
    enableSorting: false,
    enableHiding: false,
    cell: function ActionsCell({ row }) {
      // Mark as read dialog
      const [markOpen, setMarkOpen] = React.useState(false);

      // Delete dialog
      const [deleteOpen, setDeleteOpen] = React.useState(false);
      const [deleteReason, setDeleteReason] = React.useState("");

      // View detail dialog
      const [detailOpen, setDetailOpen] = React.useState(false);
      const [replyOpen, setReplyOpen] = React.useState(false);
      const [replyContent, setReplyContent] = React.useState("");

      return (
        <div className="flex gap-2 justify-center">
          {/* MARK AS READ */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMarkOpen(true)}
            disabled={row.original.status === "read"}
          >
            <CheckCircle className="w-4 h-4 text-green-600" />
          </Button>
          <Dialog open={markOpen} onOpenChange={setMarkOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Mark as Read</DialogTitle>
              </DialogHeader>
              <div>Are you sure you want to mark this report as read?</div>
              <DialogFooter>
                <Button variant="secondary" onClick={() => setMarkOpen(false)}>
                  Cancel
                </Button>
                <Button
                  variant="default"
                  onClick={() => {
                    setMarkOpen(false);
                    alert(`Marked report ${row.original.id} as read`);
                  }}
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
                <DialogTitle>Confirm Delete</DialogTitle>
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
                      `Deleted report ${row.original.id}.\nReason: ${deleteReason}`
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

          {/* VIEW DETAIL */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDetailOpen(true)}
          >
            <Info className="w-4 h-4 text-blue-600" />
          </Button>
          <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Report Detail</DialogTitle>
              </DialogHeader>
              <div className="text-left space-y-2">
                <div>
                  <b>No.:</b> {row.index + 1}
                </div>
                <div>
                  <b>Report ID:</b> {row.original.id}
                </div>
                <div>
                  <b>Reporter:</b> {row.original.reporter.id} -{" "}
                  {row.original.reporter.name}
                </div>
                <div>
                  <b>Target:</b> {row.original.target.id} -{" "}
                  {row.original.target.name}
                </div>
                <div>
                  <b>Content:</b> {row.original.content}
                </div>
                <div>
                  <b>Report Date:</b>{" "}
                  {new Date(row.original.createdAt).toLocaleDateString("en-GB")}
                </div>
              </div>
              <DialogFooter>
                <div className="flex flex-col gap-2 w-full">
                  <Button
                    variant="outline"
                    onClick={() => setReplyOpen(true)}
                    className="w-full"
                  >
                    Reply
                  </Button>
                  <Button
                    variant="default"
                    onClick={() => {
                      setDetailOpen(false);
                      alert("Marked as read!");
                    }}
                    className="w-full"
                  >
                    Mark as Read
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => setDeleteOpen(true)}
                    className="w-full"
                  >
                    Delete
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          {/* REPLY DIALOG */}
          <Dialog open={replyOpen} onOpenChange={setReplyOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Reply to Report</DialogTitle>
              </DialogHeader>
              <div className="space-y-2">
                <Label htmlFor="reply-content">Your reply</Label>
                <Textarea
                  id="reply-content"
                  placeholder="Enter your reply..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                />
              </div>
              <DialogFooter>
                <Button variant="secondary" onClick={() => setReplyOpen(false)}>
                  Cancel
                </Button>
                <Button
                  variant="default"
                  onClick={() => {
                    setReplyOpen(false);
                    setDetailOpen(false);
                    alert(`Reply sent: ${replyContent}`);
                    setReplyContent("");
                  }}
                  disabled={!replyContent}
                >
                  Send Reply
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];

// ==== COMPONENT ====
export function AdminReportTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 7,
  });

  const table = useReactTable({
    data: reportData,
    columns: reportColumns,
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
            placeholder="Filter content..."
            value={
              (table.getColumn("content")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("content")?.setFilterValue(event.target.value)
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
                    colSpan={reportColumns.length}
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
