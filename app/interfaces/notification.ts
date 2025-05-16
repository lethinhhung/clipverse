import { User } from "./user";

export interface Notification {
  _id: string;
  title: string;
  description: string;
  userId: User;
  type: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}