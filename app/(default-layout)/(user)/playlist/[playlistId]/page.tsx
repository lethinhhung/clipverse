import WordArt from "@/components/word-art";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { TvMinimalPlay, Copy, Link } from 'lucide-react';
import { Button } from "@/components/ui/button";

const item = {
  _id: "1",
  name: "Dang Nhat Duy",
  avatar: "/imgs/dummy-avatars/mouse.png",
};

export default function PlaylistDetailPage() {
  return (
    <div className="flex min-h-screen pb-20 p-8 gap-4 justify-around">
      <div className="flex flex-col gap-4">
        <WordArt content="Playlist: ${playlist name}" svgSrc="/imgs/video-library.svg" />
        <div className="flex gap-6 ml-6 items-center">
          <a href={item._id} className="flex items-center gap-4">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={item.avatar} alt={item.name} />
              <AvatarFallback className="rounded-lg">
                {item.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span>{item.name}</span>
          </a>
          <Separator className="!h-3/4 custom-separator" orientation="vertical" />
          <span>10 Videos</span>
          <Separator className="!h-3/4 custom-separator" orientation="vertical" />
          <span>Created at: 5 / 6 / 2025</span>
        </div>

        <div className="flex gap-4 mt-4 ml-6 items-center">
          <Button className="p-4 cursor-pointer">
            <TvMinimalPlay /> Play First
          </Button>
          <Button variant={"outline"} className="p-4 !custom-border !bg-background cursor-pointer">
            <Copy />
          </Button>
          <Button variant={"outline"} className="p-4 !custom-border !bg-background cursor-pointer">
            <Link />
          </Button>
        </div>
      </div>
      <div>
        <span className="mt-20 min-w-80">Channel info</span>
      </div>
    </div>
  );
}
