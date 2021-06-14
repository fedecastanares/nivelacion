import { useContext } from "react";
import {ImageContext} from "../context/imagesContext"

import UseFeatureMediaImage from "./useFeatureMediaImage"

const UseImages = () => {

    const { images, setImages } = useContext(ImageContext);

    const getImageById = (id) => {
        // buscamos si existe en images (context)
        let imageObj = images.find(image => image.id === id);
        if (!imageObj) {
            imageObj = getImageService();
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