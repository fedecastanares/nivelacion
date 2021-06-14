import React, { createContext } from 'react';

const ImageContext = createContext();

const ImageProvider = ({children}) => {

    const [images, setImages] = useState([]);
    
    return ( 
        <>
            <ImageContext.Provider
                value={{
                    images,
                    setImages
                }}>
                {children}
            </ImageContext.Provider>
        </>
     );
}
 
export default ImageProvider;