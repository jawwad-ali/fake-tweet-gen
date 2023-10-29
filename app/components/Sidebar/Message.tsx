"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { updateMessage } from "@/slices/tweetSlices";

import { useDispatch, useSelector } from "react-redux";

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state: any) => state.tweet.message);

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateMessage(event.target.value));
  };

  return (
    <div>
      <div className="grid items-center w-full lg:max-w-sm gap-y-3">
        <Label htmlFor="username" className="pb-2 font-bold">
          Message
        </Label>
        <Input
          className="h-20"
          type="text"
          placeholder="Write Message..."
          value={message}
          onChange={handleMessageChange}
        />
      </div>
    </div>
  );
};

export default Message;
