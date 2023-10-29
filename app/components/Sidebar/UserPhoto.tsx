"use client";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Label } from "@/components/ui/label";

import { User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { updateImage } from "@/slices/tweetSlices";

const UserPhoto = () => {
  const [_, setSelectedFile] = useState<any>(); // file selection
  const [imagePreview, setImagePreview] = useState<string | undefined>(""); //image thats been uploaded from the computer

  //   HandleFile submit from computer
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      // Read the selected file and create a data URL
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setImagePreview(e.target.result);
        dispatch(updateImage(e.target.result));
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
    }
  };

  const dispatch = useDispatch();

  const profilePhoto = useSelector((state: any) => state.tweet.imgUrl); // User photo from the store

  return (
    <div
      className="flex items-center justify-between p-5 mx-5 my-5 -ml-0"
      style={{ boxShadow: "0 0 2px #ababab" }}
    >
      <div>
        <Avatar>
          <AvatarImage src={imagePreview} />
          <AvatarFallback>
            <User2 />
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col mr-5 bg-red-60">
        <Label htmlFor="fileInput" className="pb-2 pl-5 font-bold">
          Profile Photo
        </Label>

        <div className="relative flex rounded-md shadow-sm">
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
          />
          <label
            htmlFor="fileInput"
            className="px-4 py-2 text-white bg-[#48d5c1] rounded-md cursor-pointer"
          >
            Choose a File
          </label>
        </div>
      </div>
    </div>
  );
};

export default UserPhoto;
