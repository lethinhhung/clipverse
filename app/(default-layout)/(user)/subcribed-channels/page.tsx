"use client";
import React, { useState } from "react";
import { User } from "@/interfaces/user";
import { Gamepad, Funnel } from "lucide-react";
import ChannelCard from "@/components/channel-card";
import WordArt from "@/components/word-art";
import SearchBar from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import Tag from "@/components/tag";
import Paginator from "@/components/paginator";

const mockChannel: User = {
  _id: "1",
  username: "duyy05568",
  email: "duyy05568@gmail.com",
  status: "Online",
  role: [
    {
      title: "Gamer",
      icon: Gamepad,
    },
  ],
  profile: {
    _id: "1",
    name: "Dang Nhat Duy",
    avatar: "/imgs/placeholder.svg",
    bio: "Waky wakyyy, it’s cooking time. I am a software engineer, and I love to cook. Feel free to ask me anything about cooking.",
  },
  progress: {
    viewedVideos: [],
    likedVideos: [],
    dislikedVideos: [],
    playlists: [],
    uploadedVideos: [],
    subscribedUsers: [],
    subscribers: [],
    notifications: [],
  },
  createdAt: new Date(),
  updatedAt: new Date(),
};

const mockChannels = Array(30)
  .fill(null)
  .map((_, index) => ({
    ...mockChannel,
    _id: `${index + 1}`,
    profile: {
      ...mockChannel.profile,
      name: `Channel ${index + 1}`,
    },
  }));

const ITEMS_PER_PAGE = 6;

const mockRole = [
  "Gamer",
  "Developer",
  "Food Reviewer",
  "Vlogger",
  "Analysist",
  "Engineer",
];

const sortItem = ["A - Z", "Lasted Upload", "Lasted Subcribe"];

export default function ChannelsPage() {
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const FilterContent = (
    <div className="z-30 rounded-xl shadow-xl p-6 w-full max-w-md mx-auto md:mt-4 mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold tracking-[4px] italic">Filter:</h2>
        <button
          className="xl:hidden block text-xl font-bold"
          onClick={() => setShowMobileFilter(false)}
        >
          ×
        </button>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className="w-full">
          <span className="text-xl font-bold tracking-[2px]">Name</span>
          <div className="mt-2">
            <SearchBar />
          </div>
        </div>
        <div className="w-full">
          <span className="text-xl font-bold tracking-[2px]">Roles</span>
          <div className="flex flex-wrap gap-2 mt-2 ml-3 max-w-90">
            {mockRole.map((role, index) => (
              <Tag key={index} content={role} />
            ))}
          </div>
        </div>
        <div className="w-full">
          <span className="text-xl font-bold tracking-[2px]">Sort by</span>
          <div className="flex flex-wrap gap-2 mt-2 ml-3 max-w-90">
            {sortItem.map((item, index) => (
              <Tag key={index} content={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen pb-20 p-8 gap-4 justify-around">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <WordArt content="Subscribed Channels" svgSrc="/imgs/earth.svg" />
          <Button
            variant={"outline"}
            onClick={() => setShowMobileFilter(true)}
            className="custom-border self-center mt-6 md:hidden block"
          >
            <Funnel />
          </Button>
        </div>
        {showMobileFilter && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-20 flex items-start justify-center">
            <div
              className="absolute inset-0"
              onClick={() => setShowMobileFilter(false)}
            />
            <div className="relative z-30">{FilterContent}</div>
          </div>
        )}

        <Paginator
          items={mockChannels}
          itemsPerPage={ITEMS_PER_PAGE}
          renderItem={(channel) => <ChannelCard channel={channel} />}
          layout="column"
        />
      </div>

      <div className="mt-20 min-w-60 sticky top-15 h-fit xl:block hidden">
        {FilterContent}
      </div>
    </div>
  );
}
