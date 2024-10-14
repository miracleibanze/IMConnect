import { useNavigate } from "react-router-dom";
import { logo, searchSvg, userSvg } from "../assets";
import { navbarIcons } from "./constants";
import Button from "./design/Button";
import { useEffect, useLayoutEffect, useState } from "react";

const Navbar = ({ isLogged, userData }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [userimage, setUserimage] = useState(null);

  useLayoutEffect(() => {
    const user = JSON.parse(localStorage.getItem("userConnect"));
    const profile = localStorage.getItem("profileImage");
    if (user) {
      setUsername(user.username);
      setUserimage(profile);
    }
  }, []);
  return (
    <div className="fixed top-0 right-0 left-0 bg-zinc-50 py-2 px-4 z-[100] flex items-center gap-4">
      <img
        src={logo}
        alt="logo"
        width={673}
        height={139}
        onClick={() => navigate("/")}
        className="h-11 max-w-32 cursor-pointer"
      />
      <div className="flex items-center md:justify-between justify-end w-full">
        <div className="max-w-[23rem] flex-1 mr-8 border border-zinc-900 rounded-md md:flex hidden items-center h-8 gap-2 px-2">
          <img src={searchSvg} alt="search" className="h-3 w-3 text-zinc-800" />
          <input
            type="text"
            placeholder="Search for User or Content."
            className="flex-1 md:flex hidden bg-transparent outline-none"
          />
        </div>
        {isLogged ? (
          <div className="flex items-center gap-2">
            {navbarIcons.map((item) => (
              <div
                className="h-10 aspect-square rounded-md bg-zinc-200 flex items-center justify-center cursor-pointer"
                key={item.id}
                onClick={() => navigate(`${item.link}`)}
              >
                <img src={item.icon} className="h-[1.2rem] w-[1.2rem]" />
              </div>
            ))}

            <p
              className="md:w-max md:flex hidden hover:bg-zinc-400/20 p-2 rounded-md cursor-pointer"
              onClick={() => navigate("/profile/Feeds")}
            >
              {username}
            </p>
            <div
              className="h-10 aspect-square rounded-md flex items-center justify-center cursor-pointer"
              onClick={() => navigate("/profile/Feeds")}
            >
              <img
                src={userimage ? userimage : userSvg}
                className={` ${
                  !userimage
                    ? "h-[1.2rem] w-[1.2rem]"
                    : "w-full h-full object-cover rounded-md object-center"
                }`}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Button blue onClick={() => navigate("/register/auth")}>
              Login
            </Button>
            <Button border onClick={() => navigate("/register/sign_up")}>
              Sign Up
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
