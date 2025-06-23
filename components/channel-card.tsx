import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "@/interfaces/user";
import Image from "next/image";
import { Separator } from "./ui/separator";

export default function ChannelCard({ channel }: { channel: User }) {
  return (
    <Card className="lg:max-w-200 bg-background custom-border md:py-4 mt-4">
      <div className="flex flex-col lg:flex-row items-center justify-around">
        <CardContent className="flex flex-col justify-center gap-4 md:max-w-65">
          <CardTitle className="text-2xl text-center md:text-left">{channel.profile.name}</CardTitle>
          <div className="flex flex-col gap-4 md:ml-4">
            <CardDescription className="line-clamp-3 text-center md:text-left">
              {channel.profile.bio}
            </CardDescription>
            <Button className="w-fit self-center">Go to Channel</Button>
          </div>
        </CardContent>

        <CardContent className="flex items-center max-w-60 p-0">
          <Separator
            className="!h-40 custom-separator hidden md:block"
            orientation="vertical"
          />
          <Image
            src={channel.profile.avatar}
            alt="Channel Avatar"
            width={180}
            height={180}
            className="rounded-lg custom-border mx-5 md:-mt-20 my-5 md:my-0"
          />
          <Separator
            className="!h-40 custom-separator hidden md:block"
            orientation="vertical"
          />
        </CardContent>

        <CardContent className="flex flex-col gap-8">
          {channel.role.map((role, index) => (
            <div key={role.title || index} className="flex items-center gap-2">
              <div className="p-2 bg-secondary rounded-full">
                <role.icon />
              </div>
              <span className="font-semibold">{role.title}</span>
            </div>
          ))}

          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col text-center gap-2">
              <CardTitle>Subcribers</CardTitle>
              <CardTitle className="text-2xl">
                {channel.progress.subscribers.length}
              </CardTitle>
            </div>

            <div className="flex flex-col text-center gap-2">
              <CardTitle>Videos</CardTitle>
              <CardTitle className="text-2xl">
                {channel.progress.uploadedVideos.length}
              </CardTitle>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
