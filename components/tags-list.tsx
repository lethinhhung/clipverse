"use client";

import { Tag } from "@/interfaces/tag";
import { Button } from "./ui/button";
import { useState } from "react";

export function TagsList({
  title,
  tags,
  multiple = false,
  variant = "default",
  className,
}: {
  title?: string;
  tags: Tag[];
  multiple?: boolean;
  variant?: "default" | "outline";
  className?: string;
}) {
  const [seletedTags, setSelectedTags] = useState<Tag[]>([]);
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {title && (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight px-3">
          {title}
        </h4>
      )}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Button
            variant={
              seletedTags.includes(tag)
                ? variant
                : variant === "outline"
                ? "outline"
                : "secondary"
            }
            key={index}
            onClick={() => {
              if (multiple) {
                setSelectedTags((prev) =>
                  prev.includes(tag)
                    ? prev.filter((t) => t !== tag)
                    : [...prev, tag]
                );
              } else {
                setSelectedTags([tag]);
              }
            }}
          >
            {tag.title}
          </Button>
        ))}
      </div>
    </div>
  );
}
