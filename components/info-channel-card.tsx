import { Card } from "./ui/card";

export function InfoChannelCard({
  title,
  content,
  description,
}: {
  title: string;
  content: string;
  description: string;
}) {
  return (
    <Card className="w-38 h-42 flex flex-col gap-3 p-4 justify-center ">
      <h3 className="text-xl font-semibold">{title}</h3>
      <h1 className="text-4xl font-semibold">{content}%</h1>
      <p className="text-sm font-normal text-gray-600">{description}</p>
    </Card>
  );
}
