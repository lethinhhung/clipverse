import { User } from "@/interfaces/user";
import { Gamepad } from "lucide-react";
import ChannelCard from "@/components/channel-card";
import WordArt from "@/components/word-art";
import SearchBar from "@/components/search-bar";

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
    <div className="flex min-h-screen pb-20 p-8 gap-4 justify-around">
      <div className="flex flex-col gap-10">
        <WordArt content="Subscribed Channels" svgSrc="/imgs/earth.svg" />
        <ChannelCard channel={mockChannel} />
        <ChannelCard channel={mockChannel} />
        <ChannelCard channel={mockChannel} />
        <ChannelCard channel={mockChannel} />
        <ChannelCard channel={mockChannel} />
      </div>
      
      <div className="mt-14 min-w-80 sticky top-20 h-fit">
        <h2 className="text-2xl font-bold tracking-[4px] italic">Sort by:</h2>
        <div className="flex flex-col gap-8 mt-4 items-center">
          <div className="w-full">
            <span className="text-xl font-bold tracking-[2px] mb-4">Name</span>
            <SearchBar />
          </div>

          <span className="text-xl font-bold tracking-[2px] mb-4">Roles</span>
        </div>
      </div>
    </div>
  );
}
