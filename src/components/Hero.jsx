import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AppContext } from "../App";
import { sittingRoom, sittingRoomSmall, userSvg } from "../assets";
import { birthDays, myPost, posts, upcomingEvents } from "./constants";
import Button from "./design/Button";
import BlogCard from "./design/BlogCard";
import WhatInYourMind from "./design/WhatInYourMind";

const Hero = () => {
  const { wrapped, setWrapped } = useContext(AppContext);
  const [myPosts, setMyPosts] = useState([{}]);

  useLayoutEffect(() => {
    console.log(myPosts);

    const post1 = JSON.parse(localStorage.getItem("myPost1"));
    const post2 = JSON.parse(localStorage.getItem("myPost2"));
    const post3 = JSON.parse(localStorage.getItem("myPost3"));
    if (post1) {
      myPosts[0] = post1;
      console.log(myPosts[0]);
    } else if (post2) {
      myPosts[2] = post2;
      console.log(myPosts[1]);
    } else if (post3) {
      myPosts[3] = post3;
      console.log(myPosts[2]);
    } else {
    }
  }, []);

  return (
    <div
      className={`relative w-full h-max grid md:grid-cols-3 ${
        !wrapped ? "grid-cols-2" : "grid-cols-3"
      } max-sm:grid-cols-2 gap-3 p-3 bg-zinc-50`}
    >
      <WhatInYourMind />
      <div
        className={`w-full p-2 rounded-md row-span-3 bg-zinc-200  ${
          wrapped ? "col-span-1" : "max-md:col-span-2"
        } max-sm:col-span-2`}
      >
        <p className="body-2 font-semibold px-1">Upcoming events</p>
        {upcomingEvents.map((item) => (
          <div
            className={`w-full flex items-center gap-2 py-2 ${
              item.id !== 0 && "border-t border-t-zinc-500/50"
            }`}
            key={item.id}
          >
            <img
              src={item.icon}
              className="w-8 aspect-square p-[10px] bg-blue-600 rounded-md  object-center object-cover"
            />
            <div className="w-full">
              <p className="caption font-semibold overflow-hidden h-5 hover:underline cursor-pointer">
                {item.name}
              </p>
              <p className="text-[12px] font-medium tracking-tight h-4 overflow-hidden text-zinc-800/90">
                {item.time || item.caption},{item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full col-span-2 p-2 rounded-md row-span-3 bg-zinc-200">
        <BlogCard blog={myPosts[1] || posts[0]} />
      </div>
      <div
        className={`w-full p-2 rounded-md row-span-3 bg-zinc-200  ${
          wrapped ? "col-span-1" : "max-md:col-span-2"
        } max-sm:col-span-2`}
      >
        <p className="body-2 font-semibold">Birthdays</p>
        {birthDays.map((item) => (
          <div className="flex flex-col w-full" key={item.id}>
            <p className="caption font-semibold h-5">{item.date}</p>
            {item.people.map((person, index) => (
              <div className="flex items-center gap-1 imgDiv my-2" key={index}>
                <div
                  className="w-10 h-10 rounded-md imgDiv overflow-hidden"
                  style={{ backgroundImage: `url(${person.image.imgBg})` }}
                >
                  <img src={person.image.img} className="w-full h-full" />
                </div>
                <div>
                  <p className="caption font-semibold overflow-hidden leading-4 hover:underline cursor-pointer">
                    {person.name}
                  </p>
                  <p className="caption overflow-hidden leading-4">
                    Turning {person.years} years old
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="w-full col-span-2 p-2 rounded-md row-span-3 bg-zinc-200">
        <BlogCard blog={posts[1]} />
      </div>
      <div
        className={`w-full p-2 rounded-md row-span-5 flex flex-col justify-between gap-4 bg-zinc-200 ${
          wrapped ? "col-span-1" : "max-md:col-span-2"
        } max-sm:col-span-2`}
      >
        <p className="caption font-semibold h-5">Advertisement</p>
        <div
          className="imgDiv w-full max-h-[13rem]"
          style={{ backgroundImage: `url(${sittingRoomSmall})` }}
        >
          <img loading="lazy" src={sittingRoom} className="w-full h-full" />
        </div>
        <p className="caption overflow-hidden leading-4">
          Ownvestment: emphasing about the suitable estate for you, Why We Need
          to Protect Our Forests.
        </p>
      </div>
      <div className="w-full col-span-2 p-2 rounded-md row-span-3 bg-zinc-200">
        <BlogCard blog={posts[4]} />
      </div>
      <div className="col-span-2 flex place-content-end">
        <Button blue>Discover more</Button>
      </div>
    </div>
  );
};

export default Hero;
