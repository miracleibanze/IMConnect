import { useLayoutEffect, useState } from "react";
import { menuSvg, xSvg } from "../assets";
import {
  bottomSidebarLinks,
  homeSidebarLinks,
  utilitySidebarLinks,
} from "./constants";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ wrapped, setWrapped, setIsLogged }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  return (
    <div
      className={`${
        wrapped
          ? "sm:sidebar-animate-slide-out pt-20 "
          : "sidebar-animate-slide-in pt-32 "
      } clear-end fixed bottom-0 z-10 ${
        wrapped
          ? "max-w-[4rem] min-w-[4rem] sm:max-w-[6rem] sm:min-w-[6rem]"
          : "border-r-3 max-sm:border-r-blue-500 shadow-md w-[15rem] max-sm:shadow-blue-500"
      } top-0 h-screen px-2 bg-zinc-200`}
    >
      <img
        src={wrapped ? menuSvg : xSvg}
        className={`${
          wrapped
            ? "w-6 h-6 mx-auto mb-10"
            : "w-4 h-4 absolute top-20 right-2 -translate-y-1/2"
        }`}
        onClick={() => {
          if (wrapped) {
            setWrapped(false);
          } else {
            setWrapped(true);
          }
        }}
      />
      <div className="h-full min-w-full max-w-full flex flex-col justify-between items-center">
        <div className={`${wrapped ? "w-max" : "w-full"}`}>
          {homeSidebarLinks.map((item) => (
            <button
              className={`w-full outline-none py-2 font-semibold sm:px-4 hover:bg-slate-300/50 flex items-center gap-2 ${
                location === `/${item.link}` && "bg-zinc-50 rounded-md"
              } cursor-pointer`}
              key={item.id}
              onClick={() => navigate(`/${item.link}`)}
            >
              <img
                src={item.icon}
                className={`${!wrapped ? "h-4" : "h-5 "} aspect-square`}
              />
              <p className={`${wrapped ? "hidden" : "flex"}`}>{item.name}</p>
            </button>
          ))}
        </div>
        <div className={`${wrapped ? "w-max" : "w-full"} h-1/3`}>
          {utilitySidebarLinks.map((item) => (
            <button
              className={`w-full outline-none border-none py-2 cursor-pointer font-semibold sm:px-4 hover:bg-slate-300/50 flex items-center gap-2 ${
                item.id === 2 && "bg-zinc-50 rounded-md"
              }`}
              key={item.id}
              onClick={() => navigate(item.link)}
            >
              <img
                src={item.icon}
                className={`${!wrapped ? "h-4" : "h-5"} aspect-square`}
              />
              <p className={`${wrapped ? "hidden" : "flex"}`}>{item.name}</p>
            </button>
          ))}
        </div>
        <div className={`${wrapped ? "w-max" : "w-full"} h-1/4`}>
          {bottomSidebarLinks.map((item) => (
            <div
              className={`cursor-pointer w-full py-2 font-semibold sm:px-4 hover:bg-slate-300/50 flex items-center gap-2  ${
                location === `${item.link}` && "bg-zinc-50 rounded-md"
              }`}
              key={item.id}
              onClick={() => {
                if (item.logOut === true) {
                  setIsLogged(false);
                  localStorage.clear("userConnect");
                  localStorage.clear("coverImage");
                  localStorage.clear("profileImage");
                } else {
                  navigate(`${item.link}`);
                }
              }}
            >
              <img
                src={item.icon}
                className={`${!wrapped ? "h-4" : "h-5"} aspect-square`}
              />
              <p className={`${wrapped ? "hidden" : "flex"}`}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
