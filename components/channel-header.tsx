import { User } from "@/interfaces/user";
import { Button } from "./ui/button";
import { FolderSearch } from "lucide-react";
import Image from "next/image";
import { EditProfileModal } from "./edit-profile-model";

export function ChannelHeader({ channel }: { channel: User }) {
  return (
    <div className="w-full flex flex-col md:flex-row gap-8">
      <div className="flex flex-row sm:flex-1 gap-4 items-center sm:items-start">
        <div className="h-full w-40  flex-shrink-0">
          <Image
            className="rounded-md object-cover"
            alt="avatar"
            width={160}
            height={160}
            src={channel.profile.avatar}
          />
        </div>

        <div className="flex-1 h-full flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <FolderSearch
              size={33}
              className="p-2 rounded-full dark:text-black text-white bg-black dark:bg-white"
            />
            <p className="text-xs">Research</p>
          </div>
          <p className="text-2xl font-semibold">{channel.profile.name}</p>

          <div className="flex flex-row gap-10">
            <div className="flex flex-col items-center">
              <p className="text-sm">Subbscriber</p>
              <p className="text-2xl font-semibold">100K</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm">Video</p>
              <p className="text-2xl font-semibold">3 tỷ</p>
            </div>
          </div>
        </div>
      </div>

      <div className="self-center h-[70%] w-0.5 bg-gray-400 rounded-md" />

      <div className="flex flex-col justify-between sm:flex-1 order-2 sm:order-none">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-semibold">Description</p>
          <p className="text-xs line-clamp-4">{channel.profile.bio}</p>
        </div>
        <div className="flex flex-row gap-4">
          <EditProfileModal
            currentName={channel.profile.name}
            currentBio={channel.profile.bio}
            currentAvatar={channel.profile.avatar}
          />
          <Button variant="outline">Share Channel</Button>
        </div>
      </div>
    </div>
  );
}
