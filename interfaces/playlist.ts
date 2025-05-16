import { User } from "./user";
import { Video } from "./video";

export interface Playlist {
  _id: string;
  userId: User;
  title: string;
  videos: Video[];
  createdAt: Date;
  updatedAt: Date;
}