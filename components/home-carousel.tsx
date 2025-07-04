"use client"

import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"
import { Video } from "@/interfaces/video"

type CarouselProps = {
  videos: Video[]
}

export default function HomeCarousel({ videos }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: false,
    },
    [Autoplay({ delay: 4000 })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <div className="flex flex-col md:flex-row gap-6 my-6">
      {/* Main Carousel */}
      <div className="relative w-full md:w-4/5">
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex transition-opacity duration-700 ease-in-out">
            {videos.map((video, index) => (
              <div key={video._id} className="min-w-0 flex-[0_0_100%] relative">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className={cn(
                    "w-full h-[320px] md:h-[420px] object-cover rounded-xl transition-opacity duration-700",
                    selectedIndex === index ? "opacity-100" : "opacity-0 absolute inset-0"
                  )}
                />
                {selectedIndex === index && (
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{video.title}</h3>
                    {/* <div className="text-sm text-muted">
                      👤 {typeof video.userId === "object" && "fullname" in video.userId ? video.userId.fullname : ""}
                      {" · "}
                      👁️ {video.progress?.views ?? 0}
                      {" · "}
                      🕒 {video.time ? Math.floor(video.time / 60) + "m" : ""}
                    </div> */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-2 left-4 flex gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              className={cn(
                "w-2 h-2 rounded-full",
                i === selectedIndex ? "bg-white" : "bg-gray-400"
              )}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail nav */}
      <div className="hidden md:flex flex-col gap-4 w-1/5">
        {videos.map((video, index) => (
          <button
            key={video._id}
            onClick={() => scrollTo(index)}
            className={cn(
              "overflow-hidden rounded-md transition-transform hover:scale-105",
              selectedIndex === index && "ring-2 ring-primary"
            )}
          >
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full h-[90px] object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}