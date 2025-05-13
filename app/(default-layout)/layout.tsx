import Header from "@/components/header";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <div className="flex flex-col bg-background">
      {/* header */}
      <Header />

      {children}
    </div>
  );
}
