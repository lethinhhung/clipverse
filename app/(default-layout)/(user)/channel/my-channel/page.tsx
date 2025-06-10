import { TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CustomTab } from "@/components/custom-tab";
import VideoCard from "@/components/video-card";
import VideoCardList from "@/components/video-card-list";
import { ChartBarLabel } from "@/components/chart-bar-label";

export default function MyChannelPage() {
  return (
    <div>
      <CustomTab
        defaultValue="dashboard"
        tabs={[
          {
            trigger: (
              <TabsTrigger className="w-20 sm:w-35" value="dashboard">
                Dashboard
              </TabsTrigger>
            ),
            content: (
              <TabsContent className="mt-10" value="dashboard">
                <div className=" w-full flex flex-row jutify-space-between">
                  <ChartBarLabel />
                </div>
              </TabsContent>
            ),
          },
          {
            trigger: (
              <TabsTrigger className="w-20 sm:w-35" value="video">
                Video
              </TabsTrigger>
            ),
            content: (
              <TabsContent className="mt-10" value="video">
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
              <TabsContent className="mt-10" value="playlist">
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
