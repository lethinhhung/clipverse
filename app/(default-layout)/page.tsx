"use client";
import VideoCard from "@/components/video-card";
import Paginator from "@/components/paginator";
import { Video } from "@/interfaces/video";
import { Profile } from "@/interfaces/user";

const mockVideo: Video = {
  _id: "1",
  title: "Top 100 animals have 4 legs",
  time: 8,
  description: "Video thú vị về các loài 4 chân.",
  fileUrl: "/videos/top-100.mp4",
  thumbnailUrl: "/imgs/placeholder.svg",
  tags: [],
  isPrivate: false,
  progress: {
    views: 100,
    comments: [],
    reports: [],
    likes: [],
    dislikes: [],
    createdAt: new Date("2025-03-29"),
    updatedAt: new Date("2025-03-29"),
  },
  userId: {
    _id: "1",
    name: "Nguyen Van A",
    bio: "hehe",
    avatar: "/imgs/placeholder.svg",
  },
  createdAt: new Date("2025-03-29"),
  updatedAt: new Date("2025-03-29"),
};

const mockVideos = Array(30)
  .fill(null)
  .map((_, index) => ({
    ...mockVideo,
    _id: `${index + 1}`,
  }))
;

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full items-center">

          <h2 className="ml-8 mb-8 text-2xl font-bold">Recent Updated</h2>
          <Paginator
            items={mockVideos}
            itemsPerPage={6}
            renderItem={(video) => <VideoCard video={video} author={video.userId as Profile} />}
            layout="grid"
          />
        </div>
      </main>
    </div>
  );
}
