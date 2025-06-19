import { Video } from "@/interfaces/video";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { TagsList } from "./tags-list";
import { Badge } from "./ui/badge";

export function DetailVideoCard({ video }: { video: Video }) {
  return (
    <div className="w-full grid grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-4 hover:bg-secondary rounded-lg transition-colors">
      <div className="relative">
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          width={1920}
          height={1080}
          className="rounded-lg object-cover aspect-video col-span-1"
        />
        <Badge className="absolute top-5 right-[-2] text-xs px-2.5 py-1.5 rounded-sm rounded-e-xs shadow-md z-10">
          {video.time} mins
        </Badge>
      </div>
      <div className="col-span-1 xl:col-span-2 flex flex-col">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight line-clamp-2">
          {video.title}
        </h3>
        <div className="flex flex-col gap-2 p-2">
          <div className="w-full flex items-center gap-4">
            <Image
              src={"/imgs/placeholder.svg"}
              alt={video.userId.profile.name}
              width={40}
              height={40}
              className="rounded-sm"
            />

            <span className="text-sm line-clamp-2">
              {video.userId.profile.name}
            </span>
            <Separator orientation="vertical" />
            <span className="text-sm">
              {new Date(video.createdAt).toLocaleDateString()}
            </span>
          </div>
          <TagsList tags={video.tags} variant="outline" />
          <p className="text-sm line-clamp-3">{video.description}</p>
        </div>
      </div>
    </div>
  );
}
