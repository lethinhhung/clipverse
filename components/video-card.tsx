"use client";

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Trash, X } from "lucide-react";
import Image from "next/image";
import { Video } from "@/interfaces/video";
import { Profile } from "@/interfaces/user";

interface VideoCardProps {
  video: Video;
  author: Profile;
  deleteButton?: boolean;
  onDelete?: () => void; // In case you wanna pass a handler
}

export default function VideoCard({
  video,
  author,
  deleteButton = false,
  onDelete,
}: VideoCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card
          className="
            w-full max-w-120 mx-auto p-0 rounded-md bg-background flex flex-col gap-0 relative cursor-pointer break-inside-avoid-column border-hidden
          "
        >
          {deleteButton && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete?.();
              }}
              className="
                absolute top-2 left-2 z-20 flex items-center justify-center
                w-8 h-8 rounded-full bg-white hover:bg-red-100
                shadow-md transition-all border-2 
              "
              title="Delete video"
            >
              <Trash className="w-5 h-5 text-red-500" />
            </button>
          )}

          <Badge className="absolute top-5 right-[-2] text-xs px-2.5 py-1.5 rounded-sm rounded-e-xs shadow-md z-10">
            {video.time} mins
          </Badge>

          <div className="relative h-63 w-full overflow-hidden rounded-t-md">
            <Image
              src={video.thumbnailUrl}
              alt="Video Thumbnail"
              fill
              className="object-cover rounded-md"
            />
          </div>

          <CardContent className="p-3 space-y-2 bg-background flex flex-col gap-2">
            <p className="text-xl font-semibold leading-tight">{video.title}</p>

            <div className="flex flex-row flex-wrap gap-5 items-center text-sm">
              <div className="flex flex-row items-center gap-2">
                <Image
                  src={author.avatar}
                  alt="Animal Planet"
                  width={100}
                  height={100}
                  className="rounded-md w-10 h-10"
                />
                <span>Animal Planet</span>
              </div>
              <div className="w-px h-5 bg-white" />
              <div className="flex items-center gap-1">
                <CalendarDays className="w-3.5 h-3.5" />
                <span>
                  {(() => {
                    const d = new Date(video.createdAt);
                    const day = String(d.getDate()).padStart(2, "0");
                    const month = String(d.getMonth() + 1).padStart(2, "0");
                    const year = d.getFullYear();
                    return `${day}-${month}-${year}`;
                  })()}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </HoverCardTrigger>

      <HoverCardContent
        side="top"
        className="w-80 text-sm leading-relaxed hidden sm:block"
      >
        <p>{video.description}</p>
      </HoverCardContent>
    </HoverCard>
  );
}
