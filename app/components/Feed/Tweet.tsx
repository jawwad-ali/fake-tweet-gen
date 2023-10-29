"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ChevronDownIcon, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { MessageCircle, Repeat2, Heart, Mail } from "lucide-react";

import { useSelector } from "react-redux";

const Tweet = () => {
  const username = useSelector((state: any) => state.tweet.username);
  const message = useSelector((state: any) => state.tweet.message);
  const twitterhandler = useSelector(
    (state: any) => state.tweet.twitterhandler
  );
  const timeAndDate = useSelector((state: any) => state.tweet.timeAndDate);
  const likes = useSelector((state: any) => state.tweet.likes);
  const retweets = useSelector((state: any) => state.tweet.retweets);
  const profilePhoto = useSelector((state: any) => state.tweet.imgUrl);

  const desktopView = useSelector((state: any) => state.tweet.preview);

  return (
    <Card className={`${desktopView} m-10 leading-9 h-full lg:mt-20`}>
      <CardHeader className="flex items-center w-full gap-4 space-y-0">
        <div className="w-full space-y-1">
          <div className="flex items-center">
            {/* Profile Picture */}
            <Avatar>
              <AvatarImage src={profilePhoto} />
              <AvatarFallback>
                <User2 />
              </AvatarFallback>
            </Avatar>

            {/* User name and twitter handle */}
            <div className="ml-2">
              <CardTitle className="text-base">{username}</CardTitle>
              <CardTitle className="text-sm font-normal text-[#8899a6]">
                @{twitterhandler}
              </CardTitle>
            </div>

            <Button variant="outline" className="px-2 ml-auto shadow-none">
              <ChevronDownIcon className="w-4 h-4 text-secondary-foreground" />
            </Button>
          </div>

          {/* Tweet */}
          <CardDescription className="text-[23px] text-[#14171a] pt-5 font-normal flex grow">
            {message.length ? message : "Your Message goes here..."}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="mt-3 space-x-2">
        {/* Time and Date */}
        <div className="space-y-1 ">
          <p className="text-start text-[#657786]">
            {timeAndDate.length > 0 ? timeAndDate : "2:48 am - 9 Jan 2023"}{" "}
          </p>
          {/* Likes and Retweets */}
          <Separator />
          <span className="font-bold">{retweets} </span> <span>Retweets</span>
          <span className="ml-5 font-bold">{likes} </span> <span>Likes</span>
          <Separator />
        </div>

        {/* Icons */}
        <div className="flex items-center justify-around mt-5 text-[#657786]">
          <MessageCircle />
          <Repeat2 />
          <Heart />
          <Mail />
        </div>
      </CardContent>
    </Card>
  );
};

export default Tweet;
