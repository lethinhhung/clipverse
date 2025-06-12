import { Tabs, TabsList } from "@/components/ui/tabs";
import React from "react";

interface TabData {
  trigger: React.ReactNode;
  content: React.ReactNode;
}

interface CustomTabProps {
  defaultValue: string;
  tabs: TabData[];
}

export function CustomTab({ defaultValue, tabs }: CustomTabProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <Tabs defaultValue={defaultValue}>
        <TabsList className="flex">
          {tabs.map((tab, index) => (
            <React.Fragment key={index}>{tab.trigger}</React.Fragment>
          ))}
        </TabsList>
        {tabs.map((tab, index) => (
          <React.Fragment key={index}>{tab.content}</React.Fragment>
        ))}
      </Tabs>
    </div>
  );
}
