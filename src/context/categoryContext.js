import React, {createContext, useState} from "react";


export const CategoryContext = createContext();

const CategoryProvider = ({children}) => {

    const [selectedCategories, setSelectedCategories] = useState(undefined);
  
    return(
        <CategoryContext.Provider value={{selectedCategories,setSelectedCategories}}>
            {children}
        </CategoryContext.Provider>
        );
}

export default CategoryProvider;