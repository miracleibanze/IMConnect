import { memo, useContext, useEffect, useLayoutEffect, useState } from "react";
import { checkSvg, editSvg, plusSvg } from "../../assets";
import { gallery } from "../constants";
import Button from "../design/Button";
import { AppContext } from "../../App";
import { useLocation } from "react-router-dom";

const Gallery = ({ galleryImages }) => {
  const location = useLocation().pathname;
  const { userData } = useContext(AppContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  useLayoutEffect(() => {
    const image1 = localStorage.getItem("uploadedImage1");
    const image2 = localStorage.getItem("uploadedImage2");
    const image3 = localStorage.getItem("uploadedImage3");
    const image4 = localStorage.getItem("uploadedImage4");
    const image5 = localStorage.getItem("uploadedImage5");
    if (image1) {
      setCurrentImageIndex(2);
    }
    if (image2) {
      setCurrentImageIndex(3);
    }
    if (image3) {
      setCurrentImageIndex(4);
    }
    if (image4) {
      setCurrentImageIndex(5);
    }
    if (image5) {
      setCurrentImageIndex(6);
    }
  }, [location]);
  return (
    <div className="w-full flex flex-wrap gap-3 justify-start items-center">
      <div className="w-full pt-4 flex items-center justify-between h3 pr-8 font-semibold">
        Gallery
        <a
          href={
            currentImageIndex <= 5
              ? `/profile/edit/add_image_to_gallery/image/uploadedImage${currentImageIndex}`
              : ""
          }
          onClick={() => {
            if (currentImageIndex === 6) {
              alert("Allowed 5 images at time !");
            }
          }}
        >
          <Button blue>
            Add picture
            <img src={editSvg} alt="add" className="h-6 w-6 py-1" />
          </Button>
        </a>
      </div>
      <div
        className={`h-[10rem] overflow-hidden rounded-md w-auto bg-cover bg-center`}
      >
        <img
          loading="lazy"
          src={galleryImages[0]}
          className="w-full h-[10rem] object-cover object-center"
          height="100%"
          width="100%"
        />
      </div>
      <div
        className={`h-[10rem] overflow-hidden rounded-md w-auto bg-cover bg-center`}
      >
        <img
          loading="lazy"
          src={galleryImages[1]}
          className="w-full h-[10rem] object-cover object-center"
          height="100%"
          width="100%"
        />
      </div>
      {Array(currentImageIndex)
        .fill("")
        .map((item, index) => {
          let image = localStorage.getItem(`uploadedImage${index + 1}`);
          return (
            <div
              className={`h-[10rem] overflow-hidden rounded-md w-auto bg-cover bg-center`}
              key={index}
            >
              <img
                loading="lazy"
                src={image}
                className="w-full h-[10rem] object-cover object-center"
                height="100%"
                width="100%"
              />
            </div>
          );
        })}
    </div>
  );
};

export default memo(Gallery);
