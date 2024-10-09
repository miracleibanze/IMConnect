import { memo, useContext, useEffect } from "react";
import { AppContext } from "../App";
import {
  blackBoy,
  blackBoySmall,
  sittingRoom,
  sittingRoomSmall,
  userSvg,
} from "../assets";
import { birthDays, heroPosts, postIcons, upcomingEvents } from "./constants";
import Button from "./design/Button";
import BlogCard from "./design/BlogCard";

const Hero = () => {
  const { userData, wrapped, setWrapped } = useContext(AppContext);

  useEffect(() => {
    console.log(userData);
  }, []);
  return (
    <div
      className={`relative w-full h-max grid md:grid-cols-3 ${
        !wrapped ? "grid-cols-2" : "grid-cols-3"
      } max-sm:grid-cols-2 gap-2 p-2 bg-zinc-50`}
      onClick={() => !wrapped && window.innerWidth < 768 && setWrapped(true)}
    >
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
              <p className="caption font-semibold overflow-hidden h-5">
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
        <BlogCard blog={heroPosts[0]} />
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
                  <p className="caption font-semibold overflow-hidden leading-4">
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
        <BlogCard blog={heroPosts[1]} />
      </div>
      <div
        className={`w-full p-2 rounded-md row-span-4 flex flex-col justify-between gap-4 bg-zinc-200 ${
          wrapped ? "col-span-1" : "max-md:col-span-2"
        } max-sm:col-span-2`}
      >
        <p className="caption font-semibold h-5">Advertisement</p>
        <div
          className="imgDiv w-full max-h-[13rem]"
          style={{ backgroundImage: `url(${sittingRoomSmall})` }}
        >
          <img src={sittingRoom} className="w-full h-full" />
        </div>
        <p className="caption overflow-hidden leading-4">
          Ownvestment: emphasing about the suitable estate for you, Why We Need
          to Protect Our Forests.
        </p>
      </div>
      <div className="w-full col-span-2 p-2 rounded-md row-span-3 bg-zinc-200">
        <BlogCard blog={heroPosts[4]} />
      </div>
    </div>
  );
};

export default memo(Hero);
