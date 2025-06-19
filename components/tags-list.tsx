"use client";

import { Tag } from "@/interfaces/tag";
import { Button } from "./ui/button";
import { useState } from "react";

export function TagsList({
  title,
  tags,
  multiple = false,
}: {
  title: string;
  tags: Tag[];
  multiple?: boolean;
}) {
  const [seletedTags, setSelectedTags] = useState<Tag[]>([]);
  return (
    <div className="flex flex-col gap-2">
      <p>{title}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Button
            variant={seletedTags.includes(tag) ? "default" : "secondary"}
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
