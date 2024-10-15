import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  createContext,
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import Sidebar2 from "./components/Sidebar2";
import Loader from "./components/design/Loader";
import { profilePages } from "./components/constants.js";
import PostsFeeds from "./components/PostsFeeds.jsx";

const Hero = lazy(() => import("./components/Hero"));
const Notification = lazy(() => import("./components/Notification"));
const Register = lazy(() => import("./components/Register"));
const Profile = lazy(() => import("./components/profile"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));
const General = lazy(() => import("./components/Edit/Index"));
const Bio = lazy(() => import("./components/Edit/Bio"));
const Interests = lazy(() => import("./components/Edit/Interests"));
const AddToGallery = lazy(() => import("./components/Edit/AddToGallery"));
const PersonalInformation = lazy(() =>
  import("./components/Edit/PersonalInformation.jsx")
);

export const AppContext = createContext();

function App() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [sidebar, setSidebar] = useState(true);
  const [wrapped, setWrapped] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({
    names: "",
    username: "",
    email: "",
    location: "",
    gender: "",
    img: localStorage.getItem("profileImage"),
  });
  const [image, setImage] = useState(null);
  const [isLogged, setIsLogged] = useState(true);
  const [imagePreview, setImagePreview] = useState(image);
  const [preview, setPreview] = useState(false);

  useLayoutEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userConnect"));
    const storedProfile = localStorage.getItem("profileImage");
    if (storedUser) {
      userData.names = storedUser.names;
      userData.username = storedUser.username;
      userData.email = storedUser.email;
      userData.location = storedUser.location;
      userData.gender = storedUser.gender;
      if (storedProfile) {
        userData.img = storedProfile;
      }
    } else {
      setIsLogged(false);
    }
    if (window.innerWidth < 1116) {
      setWrapped(true);
    }
  }, []);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userConnect"));
    const storedProfile = localStorage.getItem("profileImage");
    if (storedUser) {
      userData.username = storedUser.username;
      userData.names = storedUser.names;
      userData.email = storedUser.email;
      userData.location = storedUser.location;
      userData.gender = storedUser.gender;
      if (storedProfile) {
        userData.img = storedProfile;
      }
    } else {
      setIsLogged(false);
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
    if (!isLogin) {
      localStorage.setItem("userConnect", JSON.stringify(userData));
    }
  };
  const handleImageChange = (e) => {
    localStorage.removeItem("profileImage");
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert the file to Base64
      reader.onloadend = () => {
        setImage(reader.result); // Set the image to Base64 string
        const prevData = JSON.parse(localStorage.getItem("userConnect"));
        setUserData(prevData);
        userData.img = null;
        userData.img = reader.result;
        localStorage.setItem("profileImage", reader.result);
      };
    }
    setPreview(true);
  };

  const handleSubmit = () => {
    if (isLogin) {
      // Check if user exists in local storage
      const storedUser = JSON.parse(localStorage.getItem("userConnect"));
      if (storedUser) {
        if (
          storedUser.email === userData.email &&
          storedUser.password === userData.password
        ) {
          alert("Login successful!");
          setIsLogged(true);
          setUserData(storedUser);
          navigate("/");
        } else {
          alert("Invalid username or password.");
          console.log(storedUser);
          console.log(userData);
          console.log(storedUser.email);
          console.log(userData.email);
          console.log(storedUser.password);
          console.log(userData.password);
        }
      } else {
        alert("No account available");
      }
    } else {
      navigate("/");
      setIsLogged(true);
      localStorage.setItem("userConnect", JSON.stringify(userData));
    }
  };
  useLayoutEffect(() => {
    if (
      location === "/" ||
      location === "/profile/edit/General" ||
      location === "/profile/edit/personal_information" ||
      "/posts/feeds"
    ) {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
    {
      profilePages.map((item) => {
        if (location === `/profile/${item.name}`) {
          setSidebar(true);
          setWrapped(true);
        }
      });
    }
  }, [location]);
  return (
    <>
      <Navbar userData={userData} isLogged={isLogged} />
      {sidebar && (
        <Sidebar
          wrapped={wrapped}
          setWrapped={setWrapped}
          isLogged={isLogged}
          setIsLogged={setIsLogged}
        />
      )}

      <div
        className={`relative w-full pt-16  ${
          wrapped
            ? `${sidebar ? "sm:pl-[5rem] pl-[4rem]" : ""} `
            : `${sidebar ? "max-sm:pl-[4rem] pl-[15rem]" : ""}`
        } ${location === "/" && "bg-zinc-200 lg:pr-[12rem]"} ${
          location === "/posts/feeds" && "lg:pr-[12rem]"
        } min-h-screen`}
      >
        <AppContext.Provider
          value={{
            handleSubmit,
            wrapped,
            setWrapped,
            handleImageChange,
            isLogged,
            setIsLogin,
            userData,
            image,
            preview,
            setPreview,
          }}
        >
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  isLogged ? (
                    <Hero />
                  ) : (
                    <Navigate replace to={"/register/auth"} />
                  )
                }
              />
              <Route path="/profile/:component" element={<Profile />} />
              <Route path="/profile/notification" element={<Notification />} />
              <Route
                path="/register/:logType"
                element={<Register handleAddUser={handleAddUser} />}
              />
              <Route path="*" element={<PageNotFound />} />

              <Route path="/profile/edit/General" element={<General />} />
              <Route
                path="/profile/edit/personal_information"
                element={<PersonalInformation />}
              />
              <Route path="/profile/edit/Bio" element={<Bio />} />
              <Route path="/profile/edit/Interests" element={<Interests />} />
              <Route
                path="/profile/edit/add_image_to_gallery/:title/:name"
                element={<AddToGallery />}
              />
              <Route path="/posts/feeds" element={<PostsFeeds />} />
            </Routes>
          </Suspense>
        </AppContext.Provider>
      </div>
      {(location === "/" || location === "/posts/feeds") && (
        <Sidebar2 wrapped={wrapped} setWrapped={setWrapped} />
      )}
    </>
  );
}

export default App;
