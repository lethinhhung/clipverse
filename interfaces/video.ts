import { User } from "./user";
import { Tag } from "./tag";

export interface Video {
  _id: string;
  title: string;
  description: string;
  fileUrl: string;
  thumbnailUrl: string;
  tags: Tag[];
  isPrivate: boolean;
  progress: VideoProgress;
  createdAt: Date;
  updatedAt: Date;
}

export interface VideoProgress {
  views: number;
  comments: Comment[];
  reports: Report[];
  likes: User[];
  dislikes: User[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  _id: string;
  content: string;
  userId: User;
  likes: User[];
  dislikes: User[];
  createdAt: Date;
  updatedAt: Date;
}

export interface SimpleVideoInfo {}