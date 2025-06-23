import { ChannelHeader } from "@/components/channel-header";
import { User } from "@/interfaces/user";
import { Gamepad } from "lucide-react";

export default function ChannelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      name: "Nguyễn Quang Độ",
      avatar: "/imgs/dummy-avatars/avt.png",
      bio: "Waky wakyyy, it’s cooking time. I am a software engineer, and I love to cook. Feel free to ask me anything about cooking.  I am a software engineer, and I love to cook. Feel free to ask me anything about cooking.  I am a software engineer, and I love to cook. Feel free to ask me anything about cooking. I am a software engineer, and I love to cook. Feel free to ask me anything about cooking. I am a software engineer, and I love to cook. Feel free to ask me anything about cooking. I am a software engineer, and I love to cook. Feel free to ask me anything about cooking.",
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
  return (
    <div className="flex items-center justify-center my-15 md:mx-30 mx-10">
      <div className="flex flex-col gap-10 md:gap-15">
        <ChannelHeader channel={mockChannel} />
        {children}
      </div>
    </div>
  );
}
