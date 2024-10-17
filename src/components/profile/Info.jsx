import { memo, useEffect, useState } from "react";
import { editSvg, eyeSlashSvg } from "../../assets";

const Info = () => {
  const [data, setData] = useState({});
  const [profile, setProfile] = useState("");
  const [cover, setCover] = useState("");
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userConnect"));
    if (userData) {
      setData(userData);
    }
    setProfile(localStorage.getItem("profileImage"));
    setCover(localStorage.getItem("coverImage"));
  }, []);
  return (
    <div className="w-full h-full p-4">
      <h4 className="h4 font-semibold flex-between mb-6">
        Personal Information
        <a href="/profile/edit/General">
          <img src={editSvg} className="w-10 h-10 bg-zinc-400 p-2 rounded-md" />
        </a>
      </h4>
      <ul className="body-1 font-semibold p-2 grid grid-cols-4 w-full gap-x-3 gap-y-2">
        <li className="text-end">Name :</li>
        <span className="italic font-normal border-b col-span-3">
          {data.names}
        </span>
        <li className="text-end">Username :</li>
        <span className="italic font-normal border-b col-span-3">
          {data.username}
        </span>
        <li className="text-end">E-mail :</li>
        <span className="italic font-normal border-b col-span-3">
          {data.email}
        </span>
        <li className="text-end">location :</li>
        <span className="italic font-normal border-b col-span-3">
          {data.location}
        </span>
      </ul>

      <h4 className="h4 font-semibold mb-6 flex-between">
        Profile
        <a href="/profile/edit/General">
          <img src={editSvg} className="w-10 h-10 bg-zinc-400 p-2 rounded-md" />
        </a>
      </h4>
      <div className="flex-center body-1 font-semibold gap-3">
        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            src={profile}
            className="h-[10rem] w-auto rounded-md bg-cover"
          />
          Profile Image
        </div>
        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            src={cover || eyeSlashSvg}
            className="h-[10rem] w-auto rounded-md bg-cover bg-zinc-200"
          />
          Cover Image
        </div>
      </div>
    </div>
  );
};

export default memo(Info);
