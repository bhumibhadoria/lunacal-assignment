import { useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlus,
  FaRegQuestionCircle,
} from "react-icons/fa";
import SquareBox from "./SquareBox";
import { data } from "../constants/imageData";
import ImageUploadAlert from "./ImageUploadAlert";

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [images, setImages] = useState({
    data,
  });

  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    // Handle close button click
    setShow(!show);
    console.log("alert");
  };

  const imageUploader = (e: React.ChangeEvent<HTMLInputElement>) => {

    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((images) => ({
          data: [...images.data, reader.result as string],
        }));
      };
      reader.readAsDataURL(file);

      setUploadMessage("Image Uploaded Successfully");
      setShow(true);
    } else {

      setUploadMessage("Image Upload Failed");
      setShow(true);
    }
  };

  const scrollGallery = (direction: "left" | "right") => {
    if (galleryRef.current) {
      const scrollAmount = direction === "left" ? -160 : 160;
      galleryRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center bg-neutral-700 py-6 rounded-3xl shadow-md shadow-black gap-2 px-3 pr-16 w-full select-none">
      <SquareBox />

      <div className="flex flex-col justify-center items-center gap-2 w-full">
        <div className="flex items-end justify-between rounded-3xl w-full">
          <div className="text-neutral-300 bg-neutral-900 py-4 px-12 text-center rounded-3xl text-lg cursor-pointer font-bold">
            Gallery
          </div>
          <div className="flex justify-end items-end gap-3">
            <button
              className="flex items-center gap-3 text-neutral-300 shadow-inner shadow-neutral-300 rounded-full font-bold"
              onClick={() => inputRef.current?.click()}
            >
              <input
                className="hidden"
                type="file"
                name="add-image"
                id="add-image"
                onChange={imageUploader}
              />
              <label
                className="flex items-center gap-3 text-neutral-300 shadow-xl shadow-black py-3 px-5 rounded-full cursor-pointer"
                htmlFor="add-image"
              >
                <FaPlus /> Add Image
              </label>
            </button>
            <div
              className="rounded-full transition-all duration-200 ease-in-out bg-neutral-900 text-neutral-500 p-2 text-xl hover:text-white hover:bg-gradient-to-br hover:from-neutral-300 hover:to-neutral-950 cursor-pointer"
              onClick={() => scrollGallery("left")}
            >
              <FaArrowLeft />
            </div>
            <div
              className="rounded-full transition-all duration-200 ease-in-out bg-neutral-900 text-neutral-500 p-2 text-xl hover:text-white hover:bg-gradient-to-br hover:from-neutral-300 hover:to-neutral-950 cursor-pointer"
              onClick={() => scrollGallery("right")}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div
          className="flex items-center gap-6 p-6 overflow-x-scroll gallery select-none"
          ref={galleryRef}
        >
          {images.data.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`image-${index + 1}`}
              className="rounded-3xl grayscale hover:grayscale-0 hover:saturate-200  h-32 object-cover shadow-md transition-transform aspect-square duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black"
            />
          ))}
        </div>
      </div>

      <FaRegQuestionCircle className="absolute top-5 left-3 text-3xl text-neutral-500" />
      <ImageUploadAlert
        show={show}
        uploadMessage={uploadMessage ?? ""}
        handleToggle={handleToggle}
      />
    </div>
  );
};

export default Gallery;
