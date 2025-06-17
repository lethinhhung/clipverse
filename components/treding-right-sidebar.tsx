"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { ArrowUpToLine } from "lucide-react";

const topics = [
  "Game",
  "Lifestyle",
  "Film",
  "Horror Analog",
  "Music",
  "Music1",
  "Music2",
  "Music3",
  "Music4",
  "Music5",
  "Music6",
  "Music7",
  "Music8",
  "Music9",
  "Music1",
  "Music2",
  "Music3",
  "Music4",
  "Music5",
  "Music6",
  "Music7",
  "Music8",
  "Music9",
];

export default function TrendingRightSidebar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  const VISIBLE_TOPICS = 15;
  const visibleTopics = showAll ? topics : topics.slice(0, VISIBLE_TOPICS);

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  return (
    <aside className="rounded-2xl py-4 flex flex-col items-center gap-20">
      <div className="w-full flex flex-col gap-4 ">
        <h2 className="text-xl font-semibold mb-4">Top Topics</h2>
        <div className="flex flex-wrap gap-3 mb-4">
          {visibleTopics.map((topic, idx) => {
            const isActive = selectedTopics.includes(topic);
            return (
              <Button
                key={idx}
                variant={isActive ? "default" : "outline"}
                className={`rounded-sm text-xs px-4 py-1 transition ring-2 ${
                  isActive ? "ring-primary" : "ring-transparent"
                }`}
                size="sm"
                type="button"
                onClick={() => toggleTopic(topic)}
              >
                {topic}
              </Button>
            );
          })}
          {!showAll && topics.length > VISIBLE_TOPICS && (
            <Button
              variant="outline"
              className="rounded-xl text-xs px-4 py-1"
              size="sm"
              type="button"
              onClick={() => setShowAll(true)}
            >
              ...
            </Button>
          )}
          {showAll && topics.length > VISIBLE_TOPICS && (
            <Button
              variant="outline"
              className="rounded-xl text-xs px-4 py-1"
              size="sm"
              type="button"
              onClick={() => setShowAll(false)}
            >
              ... Collapse
            </Button>
          )}
        </div>
      </div>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-xl w-full p-0"
      />
    </aside>
  );
}
