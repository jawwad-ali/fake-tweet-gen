"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useSelector, useDispatch } from "react-redux";

import { updateTimeAndDate } from "@/slices/tweetSlices";

const Time = () => {
  const dispatch = useDispatch();

  // Username
  const timeAndData = useSelector((state: any) => state.tweet.timeAndDate);

  const handleTimeAndDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(updateTimeAndDate(event.target.value));
  };

  return (
    <div className="grid items-center w-full mt-5 lg:max-w-sm gap-y-3">
      <Label htmlFor="username" className="pb-2 font-bold">
        Time & Date
      </Label>
      <Input
        type="text"
        placeholder="2:50 am - 7 Jan 2023"
        value={timeAndData}
        onChange={handleTimeAndDateChange}
      />
    </div>
  );
};

export default Time;
