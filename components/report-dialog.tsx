"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export function ReportDialog({
  userId,
  videoId,
  isFeedback = false,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger> & {
  userId?: string;
  videoId?: string;
  isFeedback?: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger {...props}></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isFeedback
              ? "Feedback"
              : `Report this ${
                  videoId ? "video" : userId ? "user" : "undifined"
                }`}
          </DialogTitle>
          <DialogDescription>
            {isFeedback
              ? "We appreciate your feedback!"
              : `Please provide a reason for reporting this ${
                  videoId ? "video" : "user"
                }.`}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          {!isFeedback && (
            <div className="space-y-3">
              <h4 className="font-medium leading-none">Type</h4>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
          <div className="space-y-3">
            <h4 className="font-medium leading-none">Description</h4>
            <Textarea
              className="resize-none break-all"
              spellCheck={false}
              placeholder="Enter description"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
