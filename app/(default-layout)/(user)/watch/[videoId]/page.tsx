"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function WatchPage() {
  const { videoId } = useParams();
  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="col-span-full xl:col-span-3 p-4">
        <div className="relative w-full">
          <Button
            size={"icon"}
            variant={"ghost"}
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
          />
          <div className="absolute flex flex-col gap-2 w-full h-full p-4 justify-end bottom-0 bg-gradient-to-b from-background/10 to-background h-50">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
              {`Video Title for ${videoId}`}
            </h2>
            <div className="w-50 h-10">Utilities</div>
            <p>
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-full xl:col-span-1 p-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Related Videos
        </h4>
      </div>
    </div>
  );
}
