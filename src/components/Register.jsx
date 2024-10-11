import { memo, useContext, useEffect, useState } from "react";
import { artUnderwater, editSvg, uploadCloud } from "../assets";
import Button from "./design/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../App";

const Register = () => {
  const { logType } = useParams();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [registerPage, setRegisterPage] = useState(0);
  const {
    handleAddUser,
    handleSubmit,
    handleImageChange,
    userData,
    setIsLogin,
    image,
    preview,
    setPreview,
  } = useContext(AppContext);
  useEffect(() => {
    if (logType === "auth") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [location]);
  useEffect(() => {
    setPreview(false);
  }, [registerPage]);
  return (
    <div
      className="fixed top-0 right-0 left-0 z-[100] bg-cover bottom-0 bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${artUnderwater})` }}
    >
      {logType === "sign_up" && (
        <div
          className={`max-w-[35rem] max-md:max-h-[80%] h-full w-full ${
            registerPage !== 2 ? "bg-white/90" : "bg-white"
          } flex flex-col items-center text-zinc-500 px-12 gap-4 relative`}
        >
          <h2 className="h2 font-semibold text-zinc-950 my-4">
            Finish your Profile
          </h2>
          <label
            htmlFor="names"
            className={`w-full ${registerPage !== 0 && "hidden"}`}
          >
            Names:
            <input
              onChange={handleAddUser}
              type="text"
              name="names"
              placeholder="Enter your full names"
              className="px-4 py-2 w-full border border-zinc-600 rounded-md outline-none"
            />
          </label>
          <label
            htmlFor="username"
            className={`w-full ${registerPage !== 0 && "hidden"}`}
          >
            Username:
            <input
              onChange={handleAddUser}
              type="text"
              name="username"
              placeholder="Choose usernames"
              className="px-4 py-2 w-full border border-zinc-600 rounded-md outline-none"
            />
          </label>
          <label
            htmlFor="email"
            className={`w-full ${registerPage !== 0 && "hidden"}`}
          >
            E-mail:
            <input
              onChange={handleAddUser}
              type="text"
              name="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full border border-zinc-600 rounded-md outline-none"
            />
          </label>
          <label
            htmlFor="password"
            className={`w-full ${registerPage !== 0 && "hidden"}`}
          >
            Password:
            <input
              onChange={handleAddUser}
              type="password"
              name="password"
              placeholder="Enter your password"
              className="px-4 py-2 w-full border border-zinc-600 rounded-md outline-none"
            />
          </label>
          <label
            htmlFor="location"
            className={`w-full ${registerPage !== 1 && "hidden"}`}
          >
            Location:
            <input
              onChange={handleAddUser}
              type="text"
              name="location"
              placeholder="Enter your location"
              className="px-4 py-2 w-full border border-zinc-600 rounded-md outline-none"
            />
          </label>
          <label
            htmlFor="gender"
            className={`w-full ${registerPage !== 1 && "hidden"}`}
          >
            <select
              onChange={handleAddUser}
              name="gender"
              className="w-full px-4 py-2 outline-none border border-zinc-600 rounded-md"
            >
              <option value="Not mentioned" defaultChecked>
                Your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          {registerPage === 2 && <h4 className="h4">Profile picture</h4>}
          <label
            className={`w-full ${registerPage !== 2 && "hidden"} ${
              preview ? "bg-slate-800" : "bg-zinc-100"
            } aspect-[5/3] rounded-md flex flex-col items-center relative `}
          >
            <div
              className={`flex flex-col items-center justify-center h-2/3 ${
                preview && "hidden"
              }`}
            >
              <img src={uploadCloud} alt="Upload" className="w-6 h-6" />
              <span>Click to upload</span>
            </div>
            <span
              className={`text-zinc-500/50 h-1/2 flex items-center ${
                preview && "hidden"
              }`}
            >
              of .JPEG .GIF .JPG .TIFF .PNG and .WEBP
            </span>
            <input
              onChange={handleImageChange}
              type="file"
              name="img"
              accept="image/*"
              className={`w-0 h-0 ${preview && "hidden"}`}
            />
            <img
              src={image}
              alt="image"
              className={`w-full ${
                !preview && "hidden"
              } aspect-[5/3] object-contain`}
            />
            {preview && (
              <img
                src={editSvg}
                alt=""
                className="absolute bottom-1 right-1 h-10 w-10"
              />
            )}
          </label>
          <div className="absolute bottom-10 w-full px-8 flex flex-col items-center">
            <div className="w-[10rem] h-1 rounded-full grid grid-cols-3 gap-1">
              <div className="w-full h-full rounded-full bg-blue-700"></div>
              <div
                className={`w-full h-full rounded-full bg-blue-700 ${
                  registerPage === 0 && "hidden"
                }`}
              />
              <div
                className={`w-full h-full rounded-full bg-blue-700 ${
                  registerPage !== 2 && "hidden"
                }`}
              />
              <div
                className={`w-full h-full rounded-full bg-slate-300 ${
                  registerPage !== 0 && "hidden"
                }`}
              />
              <div
                className={`w-full h-full rounded-full bg-slate-300 ${
                  registerPage === 2 && "hidden"
                }`}
              />
            </div>
            <div
              className={`w-full flex ${
                registerPage === 0 ? "justify-end" : "justify-between"
              } my-4`}
            >
              {registerPage !== 0 && (
                <Button
                  border
                  onClick={() => {
                    if (registerPage === 2) {
                      setRegisterPage(1);
                    } else {
                      setRegisterPage(0);
                    }
                  }}
                >
                  Back
                </Button>
              )}
              <Button
                blue
                onClick={() => {
                  if (registerPage === 0) {
                    setRegisterPage(1);
                  } else if (registerPage === 1) {
                    setRegisterPage(2);
                  } else {
                    handleSubmit();
                    navigate("/");
                  }
                }}
              >
                {registerPage !== 2 ? "Next" : "Done"}
              </Button>
            </div>
            <Button
              border
              onClick={() => {
                navigate("/register/auth");
              }}
            >
              Already have an account?
            </Button>
          </div>
          <div
            className="absolute top-0 right-0 text-blue-600 underline py-3 px-4 bg-neutral-300/30"
            onClick={() => navigate("/")}
          >
            Skip
          </div>
        </div>
      )}

      {logType === "auth" && (
        <div
          className={`max-w-[35rem] max-md:max-h-[80%] h-full w-full ${
            registerPage !== 2 ? "bg-white/90" : "bg-white"
          } flex flex-col items-center justify-evenly text-zinc-500 px-12 gap-4 relative`}
        >
          <div className="w-full">
            <h1 className="h1 text-center w-full font-semibold text-zinc-950 my-4">
              Log in
            </h1>
            <label
              htmlFor="email"
              className={`w-full ${registerPage !== 0 && "hidden"}`}
            >
              E-mail:
              <input
                onChange={handleAddUser}
                type="text"
                name="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full border border-zinc-600 rounded-md outline-none"
              />
            </label>
            <label
              htmlFor="password"
              className={`w-full ${registerPage !== 0 && "hidden"}`}
            >
              Password:
              <input
                onChange={handleAddUser}
                type="password"
                name="password"
                placeholder="Enter your password"
                className="px-4 py-2 w-full border border-zinc-600 rounded-md outline-none"
              />
            </label>
          </div>
          <div className={`w-full flex justify-between `}>
            <Button border onClick={() => navigate("/register/sign_up")}>
              Create account
            </Button>
            <Button blue onClick={handleSubmit}>
              Log in
            </Button>
          </div>
          <div
            className="absolute top-0 right-0 text-blue-600 underline py-3 px-4 bg-neutral-300/30"
            onClick={() => navigate("/")}
          >
            Skip
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Register);
