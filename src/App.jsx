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
import PageNotFound from "./components/PageNotFound";

const Hero = lazy(() => import("./components/Hero"));
const Notification = lazy(() => import("./components/Notification"));
const Register = lazy(() => import("./components/Register"));
const Profile = lazy(() => import("./components/profile"));

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
  const [preview, setPreview] = useState(false);

  useLayoutEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userConnect"));
    if (storedUser) {
      setUserData(storedUser);
    } else {
      setIsLogged(false);
    }
  }, []);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userConnect"));
    if (storedUser) {
      setUserData(storedUser);
    } else {
      setIsLogged(false);
    }
  }, []);

  const handleAddUser = useCallback((event) => {
    event.preventDefault();
    setUserData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }, []);
  const uploadImage = () => {
    console.log(userData.img);
  };
  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert the file to Base64
      reader.onloadend = () => {
        setImage(reader.result); // Set the image to Base64 string
      };
    }
    setPreview(true);
  }, []);

  const handleSubmit = useCallback(() => {
    if (isLogin) {
      // Check if user exists in local storage
      const storedUser = JSON.parse(localStorage.getItem("userConnect"));
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
  }, []);
  return (
    <>
      <Navbar userData={userData} isLogged={isLogged} />
      {location === "/" && (
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
            ? `${location === "/" ? "sm:pl-[6rem]pl-[4rem]" : ""} `
            : `${location === "/" ? "max-sm:pl-[4rem] pl-[15rem]" : ""}`
        } ${location === "/" && "bg-zinc-200 lg:pr-[12rem]"} min-h-screen`}
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
              <Route path="/register/:logType" element={<Register />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </AppContext.Provider>
      </div>
      {location === "/" && (
        <Sidebar2 wrapped={wrapped} setWrapped={setWrapped} />
      )}
    </>
  );
}

export default App;
