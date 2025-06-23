"use client";
import { TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CustomTab } from "@/components/custom-tab";
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

export default function ChannelPage() {
  return (
    <div>
      <CustomTab
        defaultValue="video"
        tabs={[
          {
            trigger: (
              <TabsTrigger className="w-20 sm:w-35" value="video">
                Video
              </TabsTrigger>
            ),
            content: (
              <TabsContent className="mt-2 sm:mt-6" value="video">
                <div className=" w-full ">
                  <Paginator items={mockVideos} itemsPerPage={6} renderItem={(video) => <VideoCard video={video} author={video.userId as Profile} />} layout="grid" />
                </div>
              </TabsContent>
            ),
          },
          {
            trigger: (
              <TabsTrigger className="w-20 sm:w-35" value="playlist">
                Playlist
              </TabsTrigger>
            ),
            content: (
              <TabsContent className="mt-2 sm:mt-6" value="playlist">
                <Card>
                  <CardHeader>
                    <CardTitle>Video Manager</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Playlist</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ),
          },
         
        ]}
      />
    </div>
  );
}
