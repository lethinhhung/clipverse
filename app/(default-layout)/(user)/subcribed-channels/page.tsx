import { User } from "@/interfaces/user";
import ChannelCard from "@/components/channel-card";
import { Gamepad } from "lucide-react";
const mockChannel: User = {
  _id: "1",
  username: "duyy05568",
  email: "duyy05568@gmail.com",
  password: "",
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

export default function ChannelsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold">Channels Page</h1>
      <ChannelCard channel={mockChannel} />
    </div>
  );
}
