import {createContext, useState, useEffect} from 'react'

export const FavoritesContext = createContext();

const FavoritesProvider = ({children}) => {

    const [ favorites, setFavorites ] = useState([]);

    useEffect(() => {
        const favoritesInLocalStorage = JSON.parse(localStorage.getItem('favorites'));
        favoritesInLocalStorage === null ? setFavorites([]) : setFavorites(favoritesInLocalStorage);
    }, [])

    return ( 
        <FavoritesContext.Provider
            value={{
                favorites,
                setFavorites
            }}
        >
            {children}
        </FavoritesContext.Provider>
     );
}
 
export default FavoritesProvider;