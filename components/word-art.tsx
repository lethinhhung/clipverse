import Image from "next/image";
import * as React from "react";

export default function WordArt({ content, svgSrc }: { content: string; svgSrc: string }) {
  return (
    <div className="flex items-center">
      <Image 
        src={svgSrc}
        alt="Word Art Background"
        width={120}
        height={120}
      />
      <span className="-ml-12 mt-4 text-3xl font-bold tracking-[4px] italic">{content}</span>
    </div>
  );
}