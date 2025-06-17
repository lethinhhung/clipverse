import { Button } from "@/components/ui/button";

export function generateMetadata() {
  return {
    title: "Result for",
    description: "This is the result page.",
  };
}

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full grid grid-cols-4">
      <div className="sticky top-15 flex gap-2 w-full flex col-span-full">
        <div className="flex flex-col gap-2">Sort by</div>
        <div className="flex flex-col gap-2">
          <p>Type</p>
          <div className="flex flex-wrap gap-2">
            <Button>Video</Button>
            <Button>Channel</Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>Topic</p>
          <div className="flex flex-wrap gap-2">
            <Button>Game</Button>
            <Button>Lifestyle</Button>
            <Button>Movie</Button>
            <Button>Food</Button>
          </div>
        </div>
      </div>
      <div className="col-span-full 2xl:col-span-3">{children}</div>
      <div className="hidden 2xl:col-span-1">Top channel details</div>
    </div>
  );
}
