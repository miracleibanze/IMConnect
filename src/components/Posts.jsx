import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { myPost, postFeeling, postIcons, posts } from "./constants";
import BlogCard from "./design/BlogCard";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AppContext } from "../App";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faImages } from "@fortawesome/free-regular-svg-icons/faImages";
import { checkSvg, imageSvg, loaderSvg, plusSvg, uploadCloud } from "../assets";
import Button from "./design/Button";

const Posts = () => {
  const { id, comment } = useParams();
  const { userData } = useContext(AppContext);
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const [feeling, setFeeling] = useState("");

  const [waitResult, setWaitResult] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [images, setImages] = useState([{ img: null }]);
  const [myLocation, setMyLocation] = useState("");
  const [myDescription, setMyDescription] = useState("");

  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useLayoutEffect(() => {
    const post1 = localStorage.getItem("myPost1");
    const post2 = localStorage.getItem("myPost2");
    const post3 = localStorage.getItem("myPost3");
    if (post1) {
      setCurrentPostIndex(1);
    } else if (post2) {
      setCurrentPostIndex(2);
    } else if (post3) {
      alert("allowed 3 posts at time of a week");
      navigate("/");
    } else {
    }
  }, []);

  // Save image to localStorage
  const savePost = () => {
    myPost.images = images;
    myPost.location = myLocation;
    myPost.time = `Just now`;
    myPost.description = myDescription;
    localStorage.setItem(
      `myPost${currentPostIndex + 1}`,
      JSON.stringify(myPost)
    );
    navigate("/");
  };

  // Handle image selection and conversion to Base64
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert the file to Base64
      reader.onloadend = () => {
        const result = reader.result;
        setUploadStatus(true);
        setImagePreview(reader.result);
        navigate("/posts/new/myPost");
        images.push(reader.result);
      };
    }
  };

  const handleDescription = (event) => {
    event.preventDefault();
    setMyDescription(event.target.value);
  };

  useEffect(() => {
    if (comment === "image") {
      setUploadStatus(false);
      setWaitResult(false);
    }
  }, [location]);

  return (
    <>
      {id === "feeds" && (
        <div className="p-3 flex flex-col items-start gap-4">
          <div className="h4 w-full max-w-2xl font-semibold">Latest Posts</div>
          {posts.map((item, index) => (
            <div className="w-full p-3 rounded-md" key={index}>
              <BlogCard blog={item} />
              <hr className="bg-zinc-600 h-1 my-4" />
            </div>
          ))}
        </div>
      )}
      {id === "new" && (
        <div className="h-full w-full flex-center justify-center">
          <div className=" relative w-full max-w-lg h-full max-h-[30rem] shadow-2xl border p-3 shadow-zinc-500">
            <p className="body-1 font-semibold">Create a Post</p>
            <div className="flex-center">
              <img
                src={userData.img}
                alt="profile"
                className="w-10 h-10 object-cover object-center"
              />
              <div className="w-full h-full">
                <p className="font-semibold">
                  {userData.names}
                  {feeling && ` is feeling ${feeling}`}
                </p>
                <p className="body-2">
                  {new Date().getHours()}:{new Date().getMinutes()}
                  &nbsp;
                  {new Date().getDay()}/{new Date().getMonth()}/
                  {new Date().getFullYear()}
                </p>
              </div>
            </div>
            {uploadStatus && (
              <div className="w-full p-2 border flex-center">
                {images.map((item, index) => (
                  <img
                    src={item}
                    alt={"image" + (index + 1)}
                    className={`h-10 w-10 object-cover ${
                      index === 0 && "hidden"
                    }`}
                    key={index}
                  />
                ))}
                <Link
                  to={"/posts/new/image"}
                  className="w-10 h-10 flex-center justify-center bg-zinc-200"
                >
                  <img
                    src={plusSvg}
                    className="p-1 rounded-full border h-6 w-6"
                  />
                </Link>
              </div>
            )}
            <div
              className={`w-full my-3 rounded-md border border-zinc-200 ${
                comment === "myPost" && "p-3 h-[10rem]"
              } relative`}
            >
              {comment === "myPost" && (
                <textarea
                  className="w-full outline-none h-full"
                  placeholder="Description.."
                  onChange={handleDescription}
                  defaultValue={myDescription && myDescription}
                ></textarea>
              )}
              {comment === "image" && (
                <>
                  <label
                    className={`${
                      waitResult && "hidden"
                    } w-full aspect-[5/3] rounded-md bg-zinc-200 flex-center flex-col place-content-center`}
                    onClick={() => setWaitResult(true)}
                  >
                    <img loading="lazy" src={uploadCloud} className="h-8 w-8" />
                    <p className="body-2 italic text-zinc-500/50 font-normal">
                      Click to Upload
                    </p>
                    <span
                      className={`text-zinc-500/50 h-1/2 flex items-center`}
                    >
                      of .JPEG .GIF .JPG .TIFF .PNG and .WEBP
                    </span>
                    <input
                      type="file"
                      name="image"
                      accept="image"
                      className="w-0 h-0"
                      onChange={handleImageChange}
                    />
                  </label>
                  {waitResult && !uploadStatus && (
                    <div className="w-full aspect-[5/3] rounded-md flex-center place-content-center bg-zinc-200">
                      <img src={loaderSvg} className="w-10 h-10" />
                    </div>
                  )}
                  <div className="w-full flex justify-end py-3">
                    <Button blue onClick={() => navigate("/posts/new/myPost")}>
                      Cancel
                    </Button>
                  </div>
                </>
              )}
              {comment === "feeling" && (
                <ul className="w-full h-full p-3">
                  {postFeeling.map((item) => (
                    <li
                      onClick={() => {
                        setFeeling(item);
                        navigate("/posts/new/myPost");
                      }}
                      className="cursor-pointer p-2 hover:bg-zinc-100 font-semibold"
                    >
                      feeling {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {comment === "myPost" && myLocation !== "" && (
              <div className="body-2">at {myLocation}</div>
            )}
            {comment === "myPost" && (
              <div className="absolute bottom-2 p-4 right-0 left-0">
                {comment !== "image" && (
                  <div className="flex-center gap-3">
                    {postIcons.map((item) => (
                      <Link
                        to={
                          item.name !== "location" && `/posts/new/${item.name}`
                        }
                        className="body-2 font-semibold flex-center"
                        key={item.id}
                        onClick={() => {
                          if (item.name === "location") {
                            setMyLocation(userData.location);
                          }
                        }}
                      >
                        <img src={item.icon} className="w-5 h-5" /> {item.name}
                      </Link>
                    ))}
                  </div>
                )}
                <div className="w-full py-3 flex justify-end">
                  <Button blue onClick={savePost}>
                    Post
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Posts;
