"use client";

import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Video } from "@/interfaces/video";
import VideoCard from "./video-card";

const dummyVideos: Video[] = [
  {
    _id: "1",
    title: "Top 100 animals have 4 legs",
    time: 8,
    description: "Video thú vị về các loài 4 chân.",
    fileUrl: "/videos/top-100.mp4",
    thumbnailUrl: "/imgs/dummy-avatars/mouse.png",
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
    createdAt: new Date("2025-03-29"),
    updatedAt: new Date("2025-03-29"),
  },
  {
    _id: "2",
    title: "Funny Cats Compilation",
    time: 10,
    description: "Tổng hợp những chú mèo bá đạo.",
    fileUrl: "/videos/funny-cats.mp4",
    thumbnailUrl: "/imgs/dummy-avatars/mouse.png",
    tags: [],
    isPrivate: false,
    progress: {
      views: 200,
      comments: [],
      reports: [],
      likes: [],
      dislikes: [],
      createdAt: new Date("2025-04-01"),
      updatedAt: new Date("2025-04-01"),
    },
    createdAt: new Date("2025-04-01"),
    updatedAt: new Date("2025-04-01"),
  },
  {
    _id: "3",
    title: "Amazing Dogs",
    time: 12,
    description: "Những chú chó làm trò đáng yêu.",
    fileUrl: "/videos/amazing-dogs.mp4",
    thumbnailUrl: "/imgs/dummy-avatars/mouse.png",
    tags: [],
    isPrivate: false,
    progress: {
      views: 150,
      comments: [],
      reports: [],
      likes: [],
      dislikes: [],
      createdAt: new Date("2025-02-12"),
      updatedAt: new Date("2025-02-12"),
    },
    createdAt: new Date("2025-02-12"),
    updatedAt: new Date("2025-02-12"),
  },
  {
    _id: "4",
    title: "Wildlife Documentary",
    time: 45,
    description: "Khám phá rừng rậm Amazon.",
    fileUrl: "/videos/wildlife.mp4",
    thumbnailUrl: "/imgs/dummy-avatars/mouse.png",
    tags: [],
    isPrivate: false,
    progress: {
      views: 300,
      comments: [],
      reports: [],
      likes: [],
      dislikes: [],
      createdAt: new Date("2025-01-15"),
      updatedAt: new Date("2025-01-15"),
    },
    createdAt: new Date("2025-01-15"),
    updatedAt: new Date("2025-01-15"),
  },
  {
    _id: "5",
    title: "Ocean Animals",
    time: 30,
    description: "Sinh vật biển sâu thẳm.",
    fileUrl: "/videos/ocean-animals.mp4",
    thumbnailUrl: "/imgs/dummy-avatars/mouse.png",
    tags: [],
    isPrivate: false,
    progress: {
      views: 220,
      comments: [],
      reports: [],
      likes: [],
      dislikes: [],
      createdAt: new Date("2025-03-07"),
      updatedAt: new Date("2025-03-07"),
    },
    createdAt: new Date("2025-03-07"),
    updatedAt: new Date("2025-03-07"),
  },
  {
    _id: "6",
    title: "Top 10 Smart Animals",
    time: 15,
    description: "Loài vật thông minh nhất hành tinh.",
    fileUrl: "/videos/smart-animals.mp4",
    thumbnailUrl: "/imgs/dummy-avatars/mouse.png",
    tags: [],
    isPrivate: false,
    progress: {
      views: 190,
      comments: [],
      reports: [],
      likes: [],
      dislikes: [],
      createdAt: new Date("2025-05-20"),
      updatedAt: new Date("2025-05-20"),
    },
    createdAt: new Date("2025-05-20"),
    updatedAt: new Date("2025-05-20"),
  },
  {
    _id: "7",
    title: "Slow Motion Lions",
    time: 20,
    description: "Cảnh quay sư tử siêu chậm.",
    fileUrl: "/videos/slow-lions.mp4",
    thumbnailUrl: "/imgs/dummy-avatars/mouse.png",
    tags: [],
    isPrivate: false,
    progress: {
      views: 175,
      comments: [],
      reports: [],
      likes: [],
      dislikes: [],
      createdAt: new Date("2025-06-11"),
      updatedAt: new Date("2025-06-11"),
    },
    createdAt: new Date("2025-06-11"),
    updatedAt: new Date("2025-06-11"),
  },
  {
    _id: "8",
    title: "Slow Motion Lions",
    time: 20,
    description: "Cảnh quay sư tử siêu chậm.",
    fileUrl: "/videos/slow-lions.mp4",
    thumbnailUrl: "/imgs/dummy-avatars/mouse.png",
    tags: [],
    isPrivate: false,
    progress: {
      views: 175,
      comments: [],
      reports: [],
      likes: [],
      dislikes: [],
      createdAt: new Date("2025-06-11"),
      updatedAt: new Date("2025-06-11"),
    },
    createdAt: new Date("2025-06-11"),
    updatedAt: new Date("2025-06-11"),
  },
  {
    _id: "9",
    title: "Slow Motion Lions",
    time: 20,
    description: "Cảnh quay sư tử siêu chậm.",
    fileUrl: "/videos/slow-lions.mp4",
    thumbnailUrl: "/imgs/dummy-avatars/mouse.png",
    tags: [],
    isPrivate: false,
    progress: {
      views: 175,
      comments: [],
      reports: [],
      likes: [],
      dislikes: [],
      createdAt: new Date("2025-06-11"),
      updatedAt: new Date("2025-06-11"),
    },
    createdAt: new Date("2025-06-11"),
    updatedAt: new Date("2025-06-11"),
  },
  {
    _id: "10",
    title: "Slow Motion Lions",
    time: 20,
    description: "Cảnh quay sư tử siêu chậm.",
    fileUrl: "/videos/slow-lions.mp4",
    thumbnailUrl: "/imgs/dummy-avatars/mouse.png",
    tags: [],
    isPrivate: false,
    progress: {
      views: 175,
      comments: [],
      reports: [],
      likes: [],
      dislikes: [],
      createdAt: new Date("2025-06-11"),
      updatedAt: new Date("2025-06-11"),
    },
    createdAt: new Date("2025-06-11"),
    updatedAt: new Date("2025-06-11"),
  },
  {
    _id: "11",
    title: "Slow Motion Lions",
    time: 20,
    description: "Cảnh quay sư tử siêu chậm.",
    fileUrl: "/videos/slow-lions.mp4",
    thumbnailUrl: "/imgs/dummy-avatars/mouse.png",
    tags: [],
    isPrivate: false,
    progress: {
      views: 175,
      comments: [],
      reports: [],
      likes: [],
      dislikes: [],
      createdAt: new Date("2025-06-11"),
      updatedAt: new Date("2025-06-11"),
    },
    createdAt: new Date("2025-06-11"),
    updatedAt: new Date("2025-06-11"),
  },
  {
    _id: "12",
    title: "Slow Motion Lions",
    time: 20,
    description: "Cảnh quay sư tử siêu chậm.",
    fileUrl: "/videos/slow-lions.mp4",
    thumbnailUrl: "/imgs/dummy-avatars/mouse.png",
    tags: [],
    isPrivate: false,
    progress: {
      views: 175,
      comments: [],
      reports: [],
      likes: [],
      dislikes: [],
      createdAt: new Date("2025-06-11"),
      updatedAt: new Date("2025-06-11"),
    },
    createdAt: new Date("2025-06-11"),
    updatedAt: new Date("2025-06-11"),
  },
  {
    _id: "13",
    title: "Slow Motion Lions",
    time: 20,
    description: "Cảnh quay sư tử siêu chậm.",
    fileUrl: "/videos/slow-lions.mp4",
    thumbnailUrl: "/imgs/dummy-avatars/mouse.png",
    tags: [],
    isPrivate: false,
    progress: {
      views: 175,
      comments: [],
      reports: [],
      likes: [],
      dislikes: [],
      createdAt: new Date("2025-06-11"),
      updatedAt: new Date("2025-06-11"),
    },
    createdAt: new Date("2025-06-11"),
    updatedAt: new Date("2025-06-11"),
  },
  {
    _id: "14",
    title: "Slow Motion Lions",
    time: 20,
    description: "Cảnh quay sư tử siêu chậm.",
    fileUrl: "/videos/slow-lions.mp4",
    thumbnailUrl: "/imgs/dummy-avatars/mouse.png",
    tags: [],
    isPrivate: false,
    progress: {
      views: 175,
      comments: [],
      reports: [],
      likes: [],
      dislikes: [],
      createdAt: new Date("2025-06-11"),
      updatedAt: new Date("2025-06-11"),
    },
    createdAt: new Date("2025-06-11"),
    updatedAt: new Date("2025-06-11"),
  },
  {
    _id: "15",
    title: "Slow Motion Lions",
    time: 20,
    description: "Cảnh quay sư tử siêu chậm.",
    fileUrl: "/videos/slow-lions.mp4",
    thumbnailUrl: "/imgs/dummy-avatars/mouse.png",
    tags: [],
    isPrivate: false,
    progress: {
      views: 175,
      comments: [],
      reports: [],
      likes: [],
      dislikes: [],
      createdAt: new Date("2025-06-11"),
      updatedAt: new Date("2025-06-11"),
    },
    createdAt: new Date("2025-06-11"),
    updatedAt: new Date("2025-06-11"),
  },
];

export default function VideoCardList({
  deleteButton = false,
}: {
  deleteButton?: boolean;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;
  const totalPages = Math.ceil(dummyVideos.length / videosPerPage);

  const paginatedVideos = dummyVideos.slice(
    (currentPage - 1) * videosPerPage,
    currentPage * videosPerPage
  );

  const handleChangePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {paginatedVideos.length === 0 ? (
        <div className="w-full h-64 flex flex-col items-center justify-center text-center">
          <span className="text-xl font-semibold text-gray-500 mb-2">
            No videos found. Time to be the first one to make some noise!
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {paginatedVideos.map((video) => (
            <VideoCard
              key={video._id}
              video={video}
              deleteButton={deleteButton}
            />
          ))}
        </div>
      )}

      <Pagination className="mt-8">
        <PaginationContent className="flex justify-center items-center gap-4">
          <PaginationItem className="mr-6">
            <PaginationLink
              href="#"
              aria-label="Go to previous page"
              onClick={() => handleChangePage(currentPage - 1)}
              className="px-4 py-2"
            >
              Previous
            </PaginationLink>
          </PaginationItem>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={index + 1 === currentPage}
                  onClick={() => handleChangePage(index + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-md border"
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </div>

          <PaginationItem className="ml-6">
            <PaginationLink
              href="#"
              aria-label="Go to next page"
              onClick={() => handleChangePage(currentPage + 1)}
              className="px-4 py-2"
            >
              Next
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
