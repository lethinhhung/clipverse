import { TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CustomTab } from "@/components/custom-tab";
import VideoCardList from "@/components/video-card-list";


export default function ChannelPage() {
  return (
    <div>
      <CustomTab
        defaultValue="video"
        tabs={[
          {
            trigger: (
              <TabsTrigger className="w-20 sm:w-35" value="video">
                Video
              </TabsTrigger>
            ),
            content: (
              <TabsContent className="mt-2 sm:mt-6" value="video">
                <div className=" w-full ">
                  <VideoCardList />
                </div>
              </TabsContent>
            ),
          },
          {
            trigger: (
              <TabsTrigger className="w-20 sm:w-35" value="playlist">
                Playlist
              </TabsTrigger>
            ),
            content: (
              <TabsContent className="mt-2 sm:mt-6" value="playlist">
                <Card>
                  <CardHeader>
                    <CardTitle>Video Manager</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Playlist</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ),
          },
         
        ]}
      />
    </div>
  );
}
