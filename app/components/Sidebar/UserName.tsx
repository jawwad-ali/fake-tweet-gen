"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AtSign } from "lucide-react"; 

import { useSelector, useDispatch } from "react-redux"; 

import { updateUsername, updateTwitterHandle } from "@/slices/tweetSlices"; 

const UserName = () => {
  const dispatch = useDispatch(); 

  // Username
  const inputValue = useSelector((state: any) => state.tweet.username);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateUsername(event.target.value));
  };

  // TwitterHandler
  const twitterHandlInput = useSelector(
    (state: any) => state.tweet.twitterhandler
  );

  const handleTwitterHandlerChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(updateTwitterHandle(event.target.value));
  };

  return (
    <div className="lg:w-80 ">
      <div className="grid items-center w-full lg:max-w-sm gap-y-3">
        <Label htmlFor="username" className="pb-2 font-bold">
          User Name
        </Label>
        <Input
          type="text"
          placeholder="Username"
          value={inputValue}
          onChange={handleInputChange}
        />

        <div className="flex items-center justify-center w-full border border-gray-200 rounded-md ">
          <AtSign className="pl-2 opacity-30" />
          <Input
            type="text"
            placeholder="Twitter handle"
            className="!border-none ml-3"
            value={twitterHandlInput}
            onChange={handleTwitterHandlerChange}
          />
        </div>
      </div>
    </div>
  );
};

export default UserName;
