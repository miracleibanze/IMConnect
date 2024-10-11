import { useContext } from "react";
import { AppContext } from "../../App";
import { postIcons } from "../constants";
import Button from "./Button";

const WhatInYourMind = () => {
  const { userData } = useContext(AppContext);
  return (
    <div className="w-full col-span-2 bg-zinc-200 p-2 rounded-md">
      <div className="w-full flex items-center gap-2">
        <img
          src={userData.img || userSvg}
          className={`w-8 aspect-square border border-zinc-500 ${
            !userData.img && "p-1"
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
