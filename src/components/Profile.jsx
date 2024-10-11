import { useContext, useEffect, useState } from "react";
import {
  archer,
  archerSmall,
  arrowSvg,
  blackBoy,
  blackBoySmall,
  boxingMan,
  boxingManSmall,
  editSvg,
  person13,
  person13Small,
  person15,
  person15Small,
  person17,
  person17Small,
} from "../assets";
import { AppContext } from "../App";
import Button from "./design/Button";
import { useNavigate, useParams } from "react-router-dom";
import { Posts, profilePages } from "./constants";
import WhatInYourMind from "./design/WhatInYourMind";
import BlogCard from "./design/BlogCard";

const Profile = () => {
  const navigate = useNavigate();
  const { component } = useParams();
  const { userData } = useContext(AppContext);
  const [coverImage, setCoverImage] = useState(null);
  const [componentPage, setComponentPage] = useState(0);

  useEffect(() => {
    profilePages.map((item) => {
      if (item.name === component) {
        return setComponentPage(item.id);
      } else if (item.name === "Posts" && component === "feeds") {
        return setComponentPage(item.id);
      } else {
      }
    });
  }, [component]);
  return (
    <div className="p-4 bg-zinc-50 min-w-full relative">
      <div
        className={`w-full md:h-[10rem] h-[7rem] ${
          !coverImage && "bg-zinc-300"
        } rounded-lg`}
        style={{ backgroundImage: `url(${coverImage})` }}
      />
      <div className="w-full flex md:items-center md:h-[4rem] h-auto place-content-between md:flex-row flex-col mb-8">
        <div className="flex items-center h-[4rem] gap-2 px-8">
          <img
            src={userData.img}
            alt="profile"
            className=" md:h-[8rem] h-[4rem] bg-blue-600 relative -translate-y-[1rem] aspect-square rounded-md object-cover object-center"
          />
          <span>
            <h4 className="sm:h4 h5 capitalize font-semibold">
              {userData.names}
            </h4>
            <p className="body-2 font-normal">
              1, 250 Followers, 985 Following
            </p>
          </span>
        </div>
        <div className="flex items-center gap-2 max-sm:mt-8 justify-end">
          <Button blue>Messages</Button>
          <Button light>create post</Button>
        </div>
      </div>
      <div className="sticky top-20 w-full flex-center border-b border-b-zinc-500/50 pb-4 mb-2">
        {profilePages.map((item) => (
          <Button
            blue={item.id === componentPage ? true : false}
            light={item.id !== componentPage ? true : false}
            key={item.name}
            onClick={() =>
              navigate(
                `/profile/${item.name === "posts" ? "feeds" : item.name}`
              )
            }
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 w-full gap-3 my-8">
        <div className="flex flex-col row-span-3 gap-2 w-full rounded-md bg-zinc-200 p-4">
          <div className="body-1 font-semibold">Personal Details</div>
          <Button blue full>
            Update bio
          </Button>
          <Button blue full>
            Edit profile
          </Button>
          <Button blue full>
            Add interests
          </Button>
        </div>
        <WhatInYourMind />
        <div className="col-span-2 h5 font-semibold">Feeds</div>
        <div className="col-span-2 row-span-4 bg-zinc-200 p-3">
          <BlogCard blog={Posts[2]} />
        </div>
        <div className="p-3 grid grid-cols-2 row-span-5 gap-2 bg-zinc-200">
          <div className="col-span-2 body-1 font-semibold flex-between">
            Gallery
            <img
              src={arrowSvg}
              alt="Enter"
              className="h-4 w-4"
              onClick={() => navigate("/profile/gallery")}
            />
          </div>
          <img
            src={person17}
            className="w-full aspect-square rounded-md object-cover object-center bg-cover bg-center"
            style={{ backgroundImage: `url(${person17Small})` }}
          />
          <img
            src={person13}
            className="w-full aspect-square rounded-md object-cover object-center bg-cover bg-center"
            style={{ backgroundImage: `url(${person13Small})` }}
          />
          <img
            src={person15}
            className="w-full aspect-square rounded-md object-cover object-center bg-cover bg-center"
            style={{ backgroundImage: `url(${person15Small})` }}
          />
          <img
            src={archer}
            className="w-full aspect-square rounded-md object-cover object-center bg-cover bg-center"
            style={{ backgroundImage: `url(${archerSmall})` }}
          />
          <img
            src={blackBoy}
            className="w-full aspect-square rounded-md object-cover object-center bg-cover bg-center"
            style={{ backgroundImage: `url(${blackBoySmall})` }}
          />
          <img
            src={boxingMan}
            className="w-full aspect-square rounded-md object-cover object-center bg-cover bg-center"
            style={{ backgroundImage: `url(${boxingManSmall})` }}
          />
        </div>
        <div className="col-span-2 row-span-3 bg-zinc-200 p-3">
          <BlogCard blog={Posts[2]} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
