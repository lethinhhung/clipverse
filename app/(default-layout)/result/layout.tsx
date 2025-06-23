import { TagsList } from "@/components/tags-list";
import { Tag } from "@/interfaces/tag";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      <div className="lg:sticky top-15 w-full grid grid-cols-5 bg-background z-20">
        <div className="col-span-full xl:col-span-4 max-w-7xl w-full flex flex-col lg:flex-row gap-4 lg:gap-16 p-4 mx-auto">
          <div className="flex flex-col gap-2">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight px-3">
              Sort by
            </h4>
            <Select>
              <SelectTrigger className="w-45">
                <SelectValue defaultValue="date" placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date posted</SelectItem>
                <SelectItem value="views">Views</SelectItem>
                <SelectItem value="likes">Likes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <TagsList title="Type" tags={mockTypes} />
          <TagsList title="Topics" tags={mockTopics} multiple />
        </div>
      </div>
      {children}
    </div>
  );
}
