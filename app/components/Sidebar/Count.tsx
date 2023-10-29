"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateLikes, updateRetweets } from "@/slices/tweetSlices";

import { useSelector, useDispatch } from "react-redux";

const Count = () => {
  const likesValue = useSelector((state: any) => state.tweet.likes);
  const dispatch = useDispatch();

  const handleLikes = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateLikes(event.target.value));
  };

  const retweets = useSelector((state: any) => state.tweet.retweets);
  const handleRetweets = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateRetweets(event.target.value));
  };


  return (
    <div className="flex mt-5">
      <div className="flex flex-col w-1/2 m-5 ml-0">
        <Label htmlFor="username" className="pb-2 font-bold">
          Retweets Count
        </Label>
        <Input
          type="text"
          placeholder="45k"
          value={retweets}
          onChange={handleRetweets}
        />
      </div>

      <div className="flex flex-col w-1/2 m-5 mr-0">
        <Label htmlFor="username" className="pb-2 font-bold">
          Likes Count
        </Label>
        <Input
          type="text"
          placeholder="45k"
          value={likesValue}
          onChange={handleLikes}
        />
      </div>
    </div>
  );
};

export default Count;
