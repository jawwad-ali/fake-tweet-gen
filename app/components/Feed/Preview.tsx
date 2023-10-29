"use client";
import { Button } from "@/components/ui/button";
import { updatePreview } from "@/slices/tweetSlices";
import { Computer, TabletSmartphone } from "lucide-react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

const Preview = () => {
  const [activeDesktop, setActiveDesktop] = useState(false);
  const [activeMobile, setActiveMobile] = useState(false);

  const disptach = useDispatch();
  const desktopView = useSelector((state: any) => state.tweet.preview);

  const handlePreview = (event: string) => {
    disptach(updatePreview(event));
  };

  return (
    <div className="lg:flex lg:ml-8 hidden ">
      <Button
        variant="outline"
        className={`w-1/2 ${activeDesktop ? "bg-blue-300" : ""}`}
        onClick={() => {
          handlePreview("w-10/12");
          setActiveMobile(false);
          setActiveDesktop(true);
        }}
      >
        <Computer className="w-4 h-4 mr-2" /> Desktop View
      </Button>

      <Button
        variant="outline"
        value={desktopView}
        className={`w-1/2 ${activeMobile ? "bg-blue-300" : ""}`}
        onClick={() => {
          handlePreview("w-1/2");
          setActiveMobile(true);
          setActiveDesktop(false);

        }}
      >
        <TabletSmartphone className="w-4 h-4 mr-2" /> Mobile View
      </Button>
    </div>
  );
};

export default Preview;