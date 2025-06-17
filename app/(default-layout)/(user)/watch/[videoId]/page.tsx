"use client";

import { Button } from "@/components/ui/button";
import {
  Flag,
  ListPlus,
  MoreHorizontal,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import VideoCard from "@/components/video-card";
import { ReportDialog } from "@/components/report-dialog";
import { toast } from "sonner";
import { Video } from "@/interfaces/video";

const video: Video = {
  _id: "1",
  title: "Sample Video Title",
  time: 10,
  description: "This is a sample video description.",
  fileUrl: "https://example.com/video.mp4",
  thumbnailUrl: "https://example.com/thumbnail.jpg",
  tags: [],
  isPrivate: false,
  progress: {
    views: 1000,
    comments: [],
    reports: [],
    likes: [],
    dislikes: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default function WatchPage() {
  const { videoId } = useParams();
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-full 2xl:col-span-3 p-2 sm:p-4">
        <div className="relative w-full">
          {/* <Button
            size={"icon"}
            variant={"secondary"}
            className="w-20 h-20 rounded-full z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <Play className="!w-15 !h-15" />
          </Button>
          <Image
            src={"/imgs/placeholder.svg"}
            alt="video-player"
            width={1920}
            height={1080}
            className="aspect-video w-full object-cover rounded-lg"
          /> */}
          <video
            width="1920"
            height="1080"
            controls
            preload="none"
            className="aspect-video w-full object-cover rounded-lg"
          >
            <source src="/video-demo.mp4" type="video/mp4" />
            {/* <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            /> */}
            {/* Your browser does not support the video tag. */}
          </video>
        </div>
        <div className="flex flex-col gap-4 w-full p-4">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
            {`Video Title for ${videoId}`}
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={"/imgs/placeholder.svg"}
                alt="user-avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-sm font-medium">User Name</span>
              <Button variant={"secondary"} size={"sm"}>
                Subscribe
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size={"sm"}>
                <ThumbsUp />
              </Button>
              <Button variant="secondary" size={"sm"}>
                <ThumbsDown />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size={"sm"}>
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-38">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Add to Playlist
                    <DropdownMenuShortcut>
                      <ListPlus />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Share
                    <DropdownMenuShortcut>
                      <Share2 />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <ReportDialog asChild videoId="12345">
                    <DropdownMenuItem
                      onSelect={(e) => {
                        e.preventDefault();
                        toast.success("Report submitted successfully!");
                      }}
                    >
                      Report
                      <DropdownMenuShortcut>
                        <Flag />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </ReportDialog>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>1000 views</CardTitle>
              <CardDescription>5 hours ago</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">
                Today, I’ll take you along on a typical school day as an
                international student in Australia! From preparing breakfast in
                the morning, catching the train to university, attending
                exciting classes, to relaxing with friends on campus. I’ll also
                share insights about student life, how I balance studying with a
                part-time job, and the unique experiences of living abroad. Join
                me on this journey!
              </p>
            </CardContent>
            <CardFooter className="justify-end">
              <Button variant={"ghost"} size={"sm"}>
                Read more
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col gap-4 w-full p-4">
          <div className="flex flex-col gap-4 w-full">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Comments
            </h4>
            <Textarea className="resize-none" spellCheck={false} />
            <div className="flex justify-end">
              <Button variant={"secondary"}>Comment</Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <p className="text-sm text-muted-foreground mx-auto">
              No comment found
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-full 2xl:col-span-1 p-2 sm:p-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight p-4">
          Related Videos
        </h4>
        <div className="columns-md p-4 gap-8 space-y-8">
          {Array.from({ length: 5 }).map((_, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}
