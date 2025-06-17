import TrendingRightSidebar from "@/components/treding-right-sidebar";
import VideoCardList from "@/components/video-card-list";
import WordArt from "@/components/word-art";

export default function TrendingPage() {
  return (
    <div className="w-full flex align-center justify-center">
      <div className=" w-[90%] sm:w-[95%] py-10 flex flex-col gap-5 sm:flex-row gap-10">
        <div className="flex-8 flex flex-col gap-8">
          <WordArt
            className="ml-10"
            content="Trending"
            svgSrc="/imgs/earth.svg"
          />
          <VideoCardList />
        </div>
        <div className="flex-2 flex flex-col gap-10 items-center">
          <TrendingRightSidebar />
        </div>
      </div>
    </div>
  );
}
