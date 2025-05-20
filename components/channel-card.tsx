import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "@/app/interfaces/user";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Mail } from 'lucide-react';

export default function ChannelCard({ channel }: { channel: User }) {
  return (
    <Card className="min-w-75 w-200 bg-background custom-border">
      <div className="flex flex-row items-center justify-around">
        <CardContent className="flex flex-col justify-center gap-4 max-w-75">
          <CardTitle className="text-2xl">{channel.profile.name}</CardTitle>
          <div className="flex flex-col gap-2 ml-4">
            <CardDescription className="line-clamp-3">{channel.profile.bio}</CardDescription>
            <Button className="w-fit">Go to Channel</Button>
          </div>
        </CardContent>

        <CardContent className="flex flex-row items-center max-w-60 p-0">
          <Image
            src={channel.profile.avatar}
            alt="Channel Avatar"
            width={180}
            height={180}
            className="rounded-lg custom-border mr-5 -mt-20"
          />
          <Separator className="!h-40 custom-separator" orientation="vertical" />
        </CardContent>

        <CardContent className="flex flex-col gap-8">
          {channel.role.map((role) => (
            <div className="flex flex-row items-center gap-2">
              <div className="p-2 bg-secondary rounded-full">
                <role.icon />
              </div>
              <span className="font-semibold">{role.title}</span>
            </div>
          ))}

          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col text-center gap-2">
              <CardTitle>Subcribers</CardTitle>
              <CardTitle>8.0 k</CardTitle>
            </div>

            <div className="flex flex-col text-center gap-2">
              <CardTitle>Videos</CardTitle>
              <CardTitle>12</CardTitle>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}