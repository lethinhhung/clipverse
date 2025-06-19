export function DetailVideoCard({
  title,
  description,
  thumbnailUrl,
}: {
  title: string;
  description: string;
  thumbnailUrl: string;
}) {
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
