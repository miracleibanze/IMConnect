import { memo, useEffect, useLayoutEffect, useState } from "react";
import { checkSvg, editSvg, loaderSvg, uploadCloud } from "../../assets";
import Button from "../design/Button";
import { useNavigate, useParams } from "react-router-dom";

const AddToGallery = () => {
  const { title, name } = useParams();
  const navigate = useNavigate();
  const [waitResult, setWaitResult] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  // Save image to localStorage
  const saveImageToLocalStorage = (result) => {
    if (result) {
      localStorage.setItem(`${name}`, result);
      setImagePreview(result);
    }
  };

  // Handle image selection and conversion to Base64
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert the file to Base64
      reader.onloadend = () => {
        const result = reader.result;
        saveImageToLocalStorage(result);
        setUploadStatus(true);
      };
    }
  };

  return (
    <div className="w-full h-full flex place-content-center place-items-center">
      <div className="w-full max-w-md h-auto flex flex-col items-center gap-3 shadow-2xl p-4">
        <h3 className="h3 font-bold">
          Upload <span className="text-blue-700 capitalize">{title}</span> Image
        </h3>
        <p className="italic text-zinc-400">
          {!waitResult && "Upload your image to add to gallery"}
          {waitResult && !uploadStatus && "Uploading..."}
          {waitResult && uploadStatus && "Uploaded Successful"}
        </p>
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
          <span className={`text-zinc-500/50 h-1/2 flex items-center`}>
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
        {waitResult && uploadStatus && (
          <div className="w-full relative aspect-[5/3] rounded-md flex-center place-content-center bg-zinc-200">
            <img
              src={checkSvg}
              className="z-10 w-10 h-10 bg-blue-600 rounded-full shadow-2xl shadow-blue-600"
            />
            <div className="absolute inset-0">
              <img
                loading="lazy"
                src={imagePreview}
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        )}

        <div className="w-full flex flex-row-reverse place-content-between">
          {title === "image" && (
            <a href="/profile/Gallery">
              <Button
                blue
                onClick={() => {
                  setWaitResult(false);
                  setUploadStatus(false);
                }}
              >
                {uploadStatus ? "Done" : "Cancel"}
              </Button>
            </a>
          )}
          {(title === "cover" || title === "profile") && (
            <a href="/profile/edit/personal_information">
              <Button
                blue={uploadStatus ? true : false}
                light={!uploadStatus ? true : false}
                onClick={() => {
                  setWaitResult(false);
                  setUploadStatus(false);
                }}
              >
                {uploadStatus ? "Done" : "Cancel"}
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(AddToGallery);
