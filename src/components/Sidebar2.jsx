import { memo } from "react";
import { sidebar2content } from "./constants";

const Sidebar2 = () => {
  return (
    <div className="flex flex-col max-lg:hidden max-w-[12rem] min-w-[12rem] clear-start fixed z-10 top-0 pt-16 right-0 h-screen bg-zinc-200 p-2">
      {sidebar2content.map((item) => (
        <div className="flex flex-col gap-2 mb-4" key={item.id}>
          <p className="caption font-semibold h-5">{item.name}</p>
          {item.items.map((element, index) => (
            <div className="flex gap-1 items-center" key={index}>
              <div
                className="w-8 aspect-square rounded-md imgDiv overflow-hidden"
                style={{ backgroundImage: `url(${element.image.imgBg})` }}
              >
                <img src={element.image.img} className="h-full w-full" />
              </div>
              <p className="caption font-medium hover:underline cursor-pointer">
                {element.name}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default memo(Sidebar2);
