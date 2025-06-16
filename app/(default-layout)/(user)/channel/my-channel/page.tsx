import { TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CustomTab } from "@/components/custom-tab";
import VideoCardList from "@/components/video-card-list";
import { ChartBarLabel } from "@/components/chart-bar-label";
import { InfoChannelCard } from "@/components/info-channel-card";

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
              <TabsContent className="mt-2 sm:mt-6" value="dashboard">
                <div className="w-full flex flex-col items-center p-2 sm:p-0 sm:items-start sm:flex-row gap-6 sm:gap-10">
                  <ChartBarLabel />
                  <div className="flex flex-row gap-4">
                    <InfoChannelCard
                      title="Views"
                      content="+ 15"
                      description="+155 since last month"
                    />
                    <InfoChannelCard
                      title="Subscribers"
                      content="+ 27"
                      description="+2 since last month"
                    />
                  </div>
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
          {
            trigger: (
              <TabsTrigger className="w-20 sm:w-35" value="favourite  ">
                Favourite
              </TabsTrigger>
            ),
            content: (
              <TabsContent className="mt-2 sm:mt-6" value="favourite  ">
                <div className=" w-full ">
                  <VideoCardList deleteButton />
                </div>
              </TabsContent>
            ),
          },
        ]}
      />
    </div>
  );
}
