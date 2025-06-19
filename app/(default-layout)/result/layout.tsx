import { TagsList } from "@/components/tags-list";
import { Tag } from "@/interfaces/tag";

export function generateMetadata() {
  return {
    title: "Result for",
    description: "This is the result page.",
  };
}

const mockTypes: Tag[] = [
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

const mockTopics: Tag[] = [
  {
    _id: "1",
    title: "Game",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "2",
    title: "Lifestyle",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "3",
    title: "Movie",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "4",
    title: "Food",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="lg:sticky top-15 flex flex-col lg:flex-row gap-2 w-full p-4">
        <div className="flex flex-col gap-2">Sort by</div>
        <TagsList title="Type" tags={mockTypes} />
        <TagsList title="Topics" tags={mockTopics} multiple />
      </div>
      {children}
    </div>
  );
}
