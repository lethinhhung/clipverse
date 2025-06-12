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
  return children;
}
