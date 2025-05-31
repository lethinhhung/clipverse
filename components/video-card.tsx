import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import Image from "next/image";

export default function VideoCard({ ...props }: React.ComponentProps<"div">) {
  return (
    <Card
      className="p-0 rounded-md bg-background h-86 w-95 flex flex-col gap-0 relative"
      {...props}
    >
      <Badge className="absolute top-5 right-[-2] text-xs px-2.5 py-1.5 rounded-sm rounded-e-xs shadow-md z-10">
        8 mins
      </Badge>
      <div className="relative h-63 w-full overflow-hidden rounded-t-md">
        <Image
          src="/imgs/dummy-avatars/mouse.png"
          alt="Video Thumbnail"
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="p-3 space-y-2 bg-background flex flex-col gap-2 border-t border-[#c0c0c0]">
        <p className="text-xl font-semibold leading-tight">
          Top 100 animals have 4 legs
        </p>
        <div className="flex flex-row gap-5 items-center text-sm ">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/imgs/dummy-avatars/avt.png"
              alt="Animal Planet"
              width={100}
              height={100}
              className="rounded-md w-10 h-10"
            />
            <span>Animal Planet</span>
          </div>
          <div className="w-px h-5 bg-white " />
          <div className="flex items-center gap-1">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>29 - 03 - 2025</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
