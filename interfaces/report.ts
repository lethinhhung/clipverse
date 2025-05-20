import { User } from "./user";
import { Video } from "./video";

export interface Report {
  _id: string;
  content: string;
  userId: User;
  videoId: Video;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReportForm {

}
