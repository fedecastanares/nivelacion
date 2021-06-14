import { useContext } from "react";
import {ImageContext} from "../context/imagesContext"

import UseFeatureMediaImage from "./useFeatureMediaImage"

const UseImages = () => {

    const { images, setImages } = useContext(ImageContext);

    const getImageById = (id) => {
        let imageObj = images.find(image => image.id === id);
        if (!imageObj) {
            imageObj = getImageService(id);
        }
        return imageObj;
    }

    const getImageService = id => {
        const getImage = async () => {
            const response = await UseFeatureMediaImage(id);
            setImages([...images, response]);
            return response;
          }
        getImage();
    }

    return ({
        getImageById
    });
}
 
export default UseImages;