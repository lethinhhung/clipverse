import { DarkModeToggle } from "@/components/dark-mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-row gap-8 items-center">
          <Image
            className="dark:invert"
            src="/imgs/logo-text.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <Image
            className="dark:invert"
            src="/imgs/logo-default.svg"
            width={80}
            height={40}
            alt="Logo"
            priority
          />
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <DarkModeToggle />
        </div>
      </main>
    </div>
  );
}
