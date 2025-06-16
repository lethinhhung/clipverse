import Image from "next/image";
import * as React from "react";

export default function WordArt({
  content,
  svgSrc,
  className = "",
}: {
  content: string;
  svgSrc: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image src={svgSrc} alt="Word Art Background" width={120} height={120} />
      <h1 className="-ml-12 mt-4 text-3xl font-bold tracking-[4px] italic">
        {content}
      </h1>
    </div>
  );
}
