import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AppContext } from "../../App";
import Button from "../design/Button";
import { useNavigate, useParams } from "react-router-dom";
import { profilePages } from "../constants";
import Feeds from "./Feeds";
import Gallery from "./Gallery";
import Clips from "./Clips";
import Contact from "./Contact";
import Info from "./Info";
import { arrowSvg } from "../../assets";

const Profile = () => {
  const navigate = useNavigate();
  const { component } = useParams();
  const userData = JSON.parse(localStorage.getItem("userConnect"));
  const [galleryImages, setGalleryImages] = useState({
    profileImage: localStorage.getItem("profileImage"),
    coverImage: localStorage.getItem("coverImage"),
  });

  useEffect(() => {
    const profile = localStorage.getItem("profileImage");
    galleryImages.profileImage = profile;
    const cover = localStorage.getItem("coverImage");
    galleryImages.coverImage = cover;
  }, []);

  return (
    <div className="p-4 bg-zinc-50 min-w-full relative">
      <div className="w-full pb-4">
        <img
          src={arrowSvg}
          className="w-6 h-6 rotate-180"
          onClick={() => navigate("/")}
        />
      </div>
      <div
        className={`w-full md:h-[15rem] h-[7rem] bg-cover bg-center bg-no-repeat ${
          !galleryImages.coverImage && "bg-zinc-300"
        } rounded-lg`}
        style={{ backgroundImage: `url(${galleryImages.coverImage})` }}
      />
      <div className="w-full flex md:items-center md:h-[4rem] h-auto place-content-between md:flex-row flex-col mb-16">
        <div className="flex items-center h-[4rem] gap-2 px-8">
          <img
            src={galleryImages.profileImage}
            alt="profile"
            className=" md:h-[8rem] h-[4rem] bg-blue-600 relative -translate-y-[1rem] aspect-square rounded-md object-cover object-center"
          />
          <span>
            <h4 className="sm:h4 h5 capitalize font-semibold">
              {userData.names}
            </h4>
            <p className="body-2 font-normal">1, 250 connections</p>
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
            blue={item.name === component ? true : false}
            light={item.name !== component ? true : false}
            key={item.name}
            onClick={() =>
              navigate(
                `/profile/${item.name === "Posts" ? "feeds" : item.name}`
              )
            }
          >
            {item.name}
          </Button>
        ))}
      </div>
      {component === "Feeds" && <Feeds />}
      {component === "Profile" && <Info />}
      {component === "Gallery" && <Gallery galleryImages={galleryImages} />}
      {component === "Clips" && <Clips />}
      {component === "Contact" && <Contact />}
    </div>
  );
};

export default Profile;
