import { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { arrowSvg, editSvg } from "../../assets";
import { Link } from "react-router-dom";
import Button from "../design/Button";

const PersonalInformation = () => {
  const { userData } = useContext(AppContext);
  const [imagePreview, setImagePreview] = useState(null);

  const cover = localStorage.getItem("coverImage");

  const changeName = useCallback((event) => {
    event.preventDefault();
    userData.names = event.target.value;
  }, []);

  const changeusername = useCallback((event) => {
    event.preventDefault();
    userData.username = event.target.value;
  }, []);

  const changeEmail = useCallback((event) => {
    event.preventDefault();
    userData.email = event.target.value;
  }, []);

  const save = useCallback(() => {
    localStorage.setItem("userConnect", JSON.stringify(userData));
  }, []);

  return (
    <div className="w-full h-full py-3 px-8">
      <Link to={"/profile/edit/General"} className="w-full pb-4">
        <img src={arrowSvg} className="w-6 h-6 rotate-180" />
      </Link>
      <h4 className="h4 font-bold mb-6">Setting</h4>
      <div
        className="flex gap-2 items-center mb-16 relative bg-zinc-200 bg-cover bg-center w-[20rem] rounded-md h-24"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        <Link
          to={"/profile/edit/add_image_to_gallery/cover/coverImage"}
          className="w-8 h-8 rounded-full p-2 z-10 absolute bottom-0 right-0 bg-zinc-400"
        >
          <img src={editSvg} className="w-full h-full object-contain" />
        </Link>
        <div className="w-24 h-24 absolute top-0 left-0 translate-y-1/3">
          <img
            src={userData.img}
            alt=""
            className="w-full h-full rounded-full object-cover object-center"
          />
          <Link
            to={"/profile/edit/add_image_to_gallery/profile/profileImage"}
            className="w-8 h-8 rounded-full p-2 absolute bottom-0 right-0 bg-zinc-400"
          >
            <img src={editSvg} className="w-full h-full object-contain" />
          </Link>
        </div>
      </div>
      <p className="body font-normal italic text-zinc-500">
        Edit and save your information
      </p>
      <div className="flex flex-col gap-2 py-2 px-3 border border-blue-300/50 rounded-md mb-4">
        <p className="body-1 font-semibold">Names:</p>
        <input
          type="text"
          onChange={changeName}
          className="w-full px-4 py-2 outline-none border border-gray-300 "
          placeholder={userData.names}
        />
        <div className="w-full flex justify-end">
          <Button blue onClick={save}>
            Save
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-2 px-3 border border-blue-300/50 rounded-md mb-4">
        <p className="body-1 font-semibold">Username :</p>
        <input
          type="text"
          onChange={changeusername}
          className="w-full px-4 py-2 outline-none border border-gray-300 "
          placeholder={userData.username}
        />
        <div className="w-full flex justify-end">
          <Button blue onClick={save}>
            Save
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-2 px-3 border border-blue-300/50 rounded-md mb-4">
        <p className="body-1 font-semibold">E-mail:</p>
        <input
          type="text"
          onChange={changeEmail}
          className="w-full px-4 py-2 outline-none border border-gray-300 "
          placeholder={userData.email}
        />
        <div className="w-full flex justify-end">
          <Button blue onClick={save}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
