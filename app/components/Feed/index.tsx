import { Button } from "@/components/ui/button";
import Tweet from "./Tweet";
import Preview from "./Preview";

import BgImage from "./img/pattern.png";

const Feed = () => {
  return (
    <div className="flex flex-col flex-1">
      {/* Show Desktop OR Mobile View */}
      <Preview />
      <div
        className={`w-full ml-8 border rounded-lg`}
        style={{
          backgroundImage: `url(${BgImage.src})`,
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div className="relative w-full">
          <div className="absolute w-full h-full top-4 left-5">
            {/* Live Preview Button */}
            <Button
              variant={"outline"}
              className="!text-sm !font-bold !leading-4"
            >
              Live Preview
            </Button>
            <div className="relative flex flex-col grow items-center justify-center w-full h-[50vh]">
              {/* Main Tweet Component */}
              <Tweet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;