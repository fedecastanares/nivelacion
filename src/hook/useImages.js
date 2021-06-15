import { useContext } from "react";
import { ImageContext } from "../context/imagesContext";

import UseFeatureMediaImage from "./useFeatureMediaImage";

const UseImages = () => {
  const { images, setImages } = useContext(ImageContext);

  const getImageById = async (id) => {
    let imageObj = images.find((image) => image.id === id);
    if (!imageObj) {
      imageObj = await getImageService(id);
    } 
    return imageObj;
  };

  const getImageService = async (id) => {
    const response = await UseFeatureMediaImage(id);
    setImages([...images, response]);
    return response;
  };


  return {
    getImageById,
  };
};

export default UseImages;
