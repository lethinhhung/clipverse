import VideoCardList from "@/components/video-card-list";
import WordArt from "@/components/word-art";

export default function FavoritesPage() {
  return (
    <div className="flex-8 flex flex-col gap-8">
      <WordArt className="ml-10" content="Favorites" svgSrc="/imgs/earth.svg" />
      <VideoCardList />
    </div>
  );
}
