import { useNavigate } from "react-router-dom";
import {
  archer,
  archerSmall,
  arrowSvg,
  blackBoy,
  blackBoySmall,
  boxingMan,
  boxingManSmall,
  person13,
  person13Small,
  person15,
  person15Small,
  person17,
  person17Small,
} from "../../assets";
import { posts } from "../constants";
import BlogCard from "../design/BlogCard";
import Button from "../design/Button";
import WhatInYourMind from "../design/WhatInYourMind";
import { memo } from "react";

const Feeds = () => {
  const navigate = useNavigate();
  return (
    <div className="grid md:grid-cols-3 w-full gap-3 my-8">
      <div className="flex flex-col md:col-span-1 col-span-3 row-span-3 gap-2 w-full rounded-md bg-zinc-200 p-4">
        <div className="body-1 font-semibold">Personal Details</div>
        <Button blue full onClick={() => navigate("/profile/edit/Bio")}>
          Update bio
        </Button>
        <Button
          blue
          full
          onClick={() => navigate("/profile/edit/personal_information")}
        >
          Edit profile
        </Button>
        <Button blue full onClick={() => navigate("/profile/edit/Interests")}>
          Add interests
        </Button>
      </div>
      <WhatInYourMind className="max-sm:col-span-3" />
      <div className="col-span-2 h5 font-semibold flex-between w-full">
        <span>Feeds</span>
        <button className="pr-4 outline-none ">
          <img
            src={arrowSvg}
            className="w-6 h-6"
            onClick={() => navigate("/posts/feeds/all")}
          />
        </button>
      </div>
      <div className="md:col-span-2 col-span-3 flex flex-col gap-3 row-span-4">
        <div className="bg-zinc-200 p-3">
          <BlogCard blog={posts[2]} />
        </div>

        <div className="bg-zinc-200 p-3">
          <BlogCard blog={posts[3]} />
        </div>
      </div>
      <div className="p-3 grid md:grid-cols-2 grid-cols-3 md:col-span-1 col-span-3 row-span-3 gap-2 bg-zinc-200">
        <div className="md:col-span-2 col-span-3 body-1 font-semibold flex-between">
          Gallery
          <img
            loading="lazy"
            src={arrowSvg}
            alt="Enter"
            className="h-4 w-4"
            onClick={() => navigate("/profile/gallery")}
          />
        </div>
        <img
          loading="lazy"
          src={person17}
          className="w-full aspect-square rounded-md object-cover object-center bg-cover bg-center"
          style={{ backgroundImage: `url(${person17Small})` }}
        />
        <img
          loading="lazy"
          src={person13}
          className="w-full aspect-square rounded-md object-cover object-center bg-cover bg-center"
          style={{ backgroundImage: `url(${person13Small})` }}
        />
        <img
          loading="lazy"
          src={person15}
          className="w-full aspect-square rounded-md object-cover object-center bg-cover bg-center"
          style={{ backgroundImage: `url(${person15Small})` }}
        />
        <img
          loading="lazy"
          src={archer}
          className="w-full aspect-square rounded-md object-cover object-center bg-cover bg-center"
          style={{ backgroundImage: `url(${archerSmall})` }}
        />
        <img
          loading="lazy"
          src={blackBoy}
          className="w-full aspect-square rounded-md object-cover object-center bg-cover bg-center"
          style={{ backgroundImage: `url(${blackBoySmall})` }}
        />
        <img
          loading="lazy"
          src={boxingMan}
          className="w-full aspect-square rounded-md object-cover object-center bg-cover bg-center"
          style={{ backgroundImage: `url(${boxingManSmall})` }}
        />
      </div>
    </div>
  );
};

export default memo(Feeds);
