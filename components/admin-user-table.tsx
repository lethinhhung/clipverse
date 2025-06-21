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
import { User, Ban, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
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

// ==== DATA AND SAMPLE TYPE ====
export type UserRow = {
  id: string;
  isAdmin: boolean;
  email: string;
  createdAt: string;
  stat: {
    uploads: number;
    likes: number;
    reports: number;
  };
};

const data: UserRow[] = [
  {
    id: "u123",
    isAdmin: true,
    email: "admin@example.com",
    createdAt: "2024-06-01",
    stat: { uploads: 24, likes: 100, reports: 2 },
  },
  {
    id: "u456",
    isAdmin: false,
    email: "user01@gmail.com",
    createdAt: "2024-04-22",
    stat: { uploads: 5, likes: 13, reports: 1 },
  },
  {
    id: "u789",
    isAdmin: false,
    email: "hotgirl@gmail.com",
    createdAt: "2024-03-13",
    stat: { uploads: 8, likes: 54, reports: 4 },
  },
  {
    id: "u101",
    isAdmin: false,
    email: "johndoe@mail.com",
    createdAt: "2024-05-11",
    stat: { uploads: 3, likes: 12, reports: 0 },
  },
  {
    id: "u202",
    isAdmin: false,
    email: "mary98@domain.com",
    createdAt: "2024-05-28",
    stat: { uploads: 10, likes: 33, reports: 1 },
  },
  {
    id: "u303",
    isAdmin: false,
    email: "devguy@company.com",
    createdAt: "2024-06-10",
    stat: { uploads: 15, likes: 50, reports: 5 },
  },
  {
    id: "u404",
    isAdmin: true,
    email: "supervisor@sigmas.com",
    createdAt: "2024-06-15",
    stat: { uploads: 0, likes: 0, reports: 0 },
  },
  {
    id: "u505",
    isAdmin: false,
    email: "casualuser@site.com",
    createdAt: "2024-06-20",
    stat: { uploads: 1, likes: 3, reports: 0 },
  },
];

// ==== DEFINE COLUMNS ====
export const columns: ColumnDef<UserRow>[] = [
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
    accessorKey: "isAdmin",
    header: "isAdmin",
    cell: function IsAdminCell({ row }) {
      const [checked, setChecked] = React.useState(row.original.isAdmin);
      const [open, setOpen] = React.useState(false);
      const pendingChecked = React.useRef<boolean>(checked);

      const handleChange = (value: boolean) => {
        pendingChecked.current = value;
        setOpen(true);
      };

      const handleConfirm = () => {
        setChecked(pendingChecked.current);
        setOpen(false);
        // TODO: Call your API here if needed
      };

      return (
        <>
          <Switch
            checked={checked}
            onCheckedChange={handleChange}
            aria-label="Toggle admin"
          />
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Admin Permission Change?</DialogTitle>
              </DialogHeader>
              <div>
                Are you sure you want to{" "}
                {pendingChecked.current ? "grant" : "remove"} admin permission
                for <b>{row.original.email}</b>?
              </div>
              <DialogFooter>
                <Button variant="secondary" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleConfirm}>
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <span className="lowercase">{row.original.email}</span>,
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => (
      <span>
        {new Date(row.original.createdAt).toLocaleDateString("en-GB")}
      </span>
    ),
  },
  {
    id: "statitic",
    header: "Statistics",
    cell: ({ row }) => {
      const stat = row.original.stat;
      return (
        <div className="flex flex-col gap-1 text-xs">
          <span>
            Uploads: <b>{stat.uploads}</b>
          </span>
          <span>
            Likes: <b>{stat.likes}</b>
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
      // Ban dialog state
      const [banOpen, setBanOpen] = React.useState(false);
      const [banReason, setBanReason] = React.useState("");
      const [banDays, setBanDays] = React.useState("7");

      // Delete dialog state
      const [deleteOpen, setDeleteOpen] = React.useState(false);
      const [deleteReason, setDeleteReason] = React.useState("");

      return (
        <div className="flex gap-2 justify-center">
          {/* PROFILE */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => alert(`Go to profile: ${row.original.id}`)}
          >
            <User className="w-4 h-4" />
          </Button>

          {/* BAN */}
          <Button variant="ghost" size="icon" onClick={() => setBanOpen(true)}>
            <Ban className="w-4 h-4 text-red-500" />
          </Button>
          <Dialog open={banOpen} onOpenChange={setBanOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ban user {row.original.email}</DialogTitle>
              </DialogHeader>
              <div className="space-y-2">
                <Label htmlFor="ban-reason">Ban reason</Label>
                <Input
                  id="ban-reason"
                  placeholder="Enter ban reason..."
                  value={banReason}
                  onChange={(e) => setBanReason(e.target.value)}
                />
                <Label htmlFor="ban-days">Ban duration (days)</Label>
                <Select value={banDays} onValueChange={setBanDays}>
                  <SelectTrigger id="ban-days" className="w-full">
                    <SelectValue placeholder="Select ban days" />
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
                <Button variant="secondary" onClick={() => setBanOpen(false)}>
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    setBanOpen(false);
                    alert(
                      `Banned user ${row.original.email} for ${
                        banDays === "9999" ? "Permanent" : banDays + " days"
                      }.\nReason: ${banReason}`
                    );
                    setBanReason("");
                    setBanDays("7");
                  }}
                  disabled={!banReason}
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
                  Confirm delete user {row.original.email}
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
                      `Deleted user ${row.original.email}.\nReason: ${deleteReason}`
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

// ==== DATA TABLE COMPONENT ====
export function AdminUserTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  // PAGINATION STATE
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable({
    data,
    columns,
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
            placeholder="Filter email..."
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
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
                    colSpan={columns.length}
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
