import { useContext, useLayoutEffect, useState } from "react";
import { AppContext } from "../../App";
import { postIcons } from "../constants";
import Button from "./Button";
import { userSvg } from "../../assets";

const WhatInYourMind = ({ className }) => {
  const [userImage, setUserImage] = useState(null);
  useLayoutEffect(() => {
    setUserImage(localStorage.getItem("profileImage"));
  }, []);
  return (
    <div
      className={`w-full col-span-2 bg-zinc-200 p-2 rounded-md ${className}`}
    >
      <div className="w-full flex items-center gap-2">
        <img
          loading="lazy"
          src={userImage || userSvg}
          className={`w-8 aspect-square border rounded-md object-cover object-center border-zinc-500 ${
            !userImage && "p-1"
          }`}
        />
        <input
          type="text"
          name="post"
          placeholder="What's on your mind?"
          className="outline-none px-4 py-1 border border-zinc-500 rounded-md flex-1"
        />
      </div>
      <div className="flex items-center justify-between gap-1 pt-2 relative">
        <div className="flex items-center gap-1">
          {postIcons.map((item) => (
            <div className="w-4 aspect-square" key={item.id}>
              <img
                loading="lazy"
                src={item.icon}
                alt={item.name}
                className="w-5 aspect-square object-center object-cover"
              />
            </div>
          ))}
        </div>
        <Button blue>Post</Button>
      </div>
    </div>
  );
};

export default WhatInYourMind;
