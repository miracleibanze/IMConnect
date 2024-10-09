import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Notification from "./components/Notification";
import Register from "./components/Register";
import { createContext, useEffect, useLayoutEffect, useState } from "react";
import Sidebar2 from "./components/Sidebar2";

export const AppContext = createContext();

function App() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [wrapped, setWrapped] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({
    names: "",
    username: "",
    email: "",
    location: "",
    gender: "",
    img: null,
  });
  var dummyUserObject = {
    names: "",
    username: "",
    email: "",
    location: "",
    gender: "",
    img: null,
  };
  const [image, setImage] = useState(null);
  const [isLogged, setIsLogged] = useState(true);
  const [imagePreview, setImagePreview] = useState(image);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userConnect"));
    if (storedUser) {
      setUserData(storedUser);
    }
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    setUserData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const uploadImage = () => {
    console.log(userData.img);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert the file to Base64
      reader.onloadend = () => {
        setImage(reader.result); // Set the image to Base64 string
      };
    }
  };

  const handleSubmit = () => {
    if (isLogin) {
      // Check if user exists in local storage
      const storedUser = JSON.parse(
        localStorage.getItem("userConnect")
      ).userData;
      if (
        storedUser &&
        (storedUser.email === userData.email ||
          storedUser.username === userData.email) &&
        storedUser.password === userData.password
      ) {
        alert("Login successful!");
        setIsLogged(true);
        setUserData(storedUser);
        navigate("/");
      } else {
        alert("Invalid username or password.");
      }
    } else {
      // Save user to local storage
      console.log(userData);
      if (image) {
        localStorage.setItem("uploadedImage", image);
        userData.img = image;
        alert("Image saved to localStorage!");
      }
      localStorage.setItem("userConnect", JSON.stringify(userData));
      setIsLogged(true);
    }
  };
  useLayoutEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userConnect"));
    if (storedUser) {
      setIsLogged(true);
      dummyUserObject.names = storedUser.names;
      dummyUserObject.username = storedUser.username;
      dummyUserObject.email = storedUser.email;
      dummyUserObject.password = storedUser.password;
      dummyUserObject.location = storedUser.location;
      dummyUserObject.gender = storedUser.gender;
      dummyUserObject.img = imagePreview;

      const savedImage = localStorage.getItem("uploadedImage");
      dummyUserObject.img = savedImage;
      setUserData(dummyUserObject);
    } else {
      setIsLogged(false);
    }
  }, []);
  return (
    <>
      <Navbar userData={userData} isLogged={isLogged} />
      <Sidebar
        wrapped={wrapped}
        setWrapped={setWrapped}
        isLogged={isLogged}
        setIsLogged={setIsLogged}
      />
      <div
        className={`relative max-w-full pt-16 bg-zinc-200 ${
          wrapped ? "sm:pl-[6rem] pl-[4rem]" : "max-sm:pl-[4rem] pl-[15rem]"
        } lg:pr-[12rem]`}
      >
        <AppContext.Provider
          value={{
            handleAddUser,
            handleSubmit,
            uploadImage,
            dummyUserObject,
            wrapped,
            setWrapped,
            handleImageChange,
            isLogged,
            setIsLogin,
            userData,
          }}
        >
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route path="/profile/notification" element={<Notification />} />
            <Route path="/register/:logType" element={<Register />} />
          </Routes>
        </AppContext.Provider>
      </div>
      {location === "/" && (
        <Sidebar2 wrapped={wrapped} setWrapped={setWrapped} />
      )}
    </>
  );
}

export default App;
