import { DetailVideoCard } from "@/components/detail-video-card";
import { Tag } from "@/interfaces/tag";
import { User } from "@/interfaces/user";
import { Video } from "@/interfaces/video";

const mockUser: User = {
  _id: "1",
  username: "testuser",
  email: "thung260803@gmail.com",
  status: "active",
  role: [
    {
      title: "user",
      icon: "h", // Assuming you have an icon or can use a placeholder
    },
  ],
  profile: {
    _id: "1",
    name: "Test User",
    avatar: "https://example.com/avatar.jpg",
    bio: "This is a test user.",
  },
  createdAt: new Date(),
  updatedAt: new Date(),
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
};

const mockTags: Tag[] = [
  {
    _id: "1",
    title: "Video",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "2",
    title: "Channel",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "3",
    title: "Topic",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const mockVideos: Video[] = [
  {
    _id: "1",
    title:
      "Test Video with Long Description to Test Layout and Wrapping Correctly Without Overflowing the Card and Handling Multiple Lines of Text",
    time: 120,
    description:
      "This is another test video. It has a longer description to test the layout. It should wrap correctly and not overflow the card. Let's see how it handles this. This is a test to ensure that the description field can handle longer text without breaking the layout. It should also be able to handle multiple lines of text without any issues. Let's add some more text to make sure it works as expected. This is a test video description that is intentionally long to test the layout and ensure that it wraps correctly without overflowing the card.",

    fileUrl: "/video-demo.mp4",
    thumbnailUrl: "/imgs/placeholder.svg",
    tags: mockTags,
    userId: mockUser,
    isPrivate: false,
    progress: {
      views: 100,
      comments: [],
      reports: [],
      likes: [],
      dislikes: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "2",
    title: "Another Test Video",
    time: 150,
    description:
      "This is another test video. It has a longer description to test the layout. It should wrap correctly and not overflow the card. Let's see how it handles this. This is a test to ensure that the description field can handle longer text without breaking the layout. It should also be able to handle multiple lines of text without any issues. Let's add some more text to make sure it works as expected. This is a test video description that is intentionally long to test the layout and ensure that it wraps correctly without overflowing the card.",
    fileUrl: "/video-demo.mp4",
    thumbnailUrl: "/imgs/placeholder.svg",
    tags: mockTags,
    userId: mockUser,
    isPrivate: false,
    progress: {
      views: 200,
      comments: [],
      reports: [],
      likes: [],
      dislikes: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function ResultPage() {
  return (
    <div className="w-full grid grid-cols-5">
      <div className="col-span-full xl:col-span-4 max-w-7xl flex flex-col gap-4 mx-auto p-4">
        {mockVideos.map((video) => (
          <DetailVideoCard key={video._id} video={video} />
        ))}
      </div>
      <div className="hidden xl:flex xl:col-span-1">Channel details</div>
    </div>
  );
}
