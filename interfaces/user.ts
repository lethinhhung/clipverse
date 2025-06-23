import { LucideIcon } from "lucide-react";
import { Video } from "./video";
import { Playlist } from "./playlist";

export interface Profile {
  _id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface UserProgress {
  viewedVideos: Video[];
  likedVideos: Video[];
  dislikedVideos: Video[];
  playlists: Playlist[];
  uploadedVideos: Video[];
  subscribedUsers: User[];
  subscribers: User[];
  notifications: Notification[];
}

export interface User {
  _id: string;
  username: string;
  email: string;
  status: string;
  role: [
    {
      title: string;
      icon: LucideIcon;
    }
  ];
  profile: Profile;
  progress: UserProgress;
  createdAt: Date;
  updatedAt: Date;
}

