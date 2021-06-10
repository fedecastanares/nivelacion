import { useContext } from "react";
import {FavoritesContext} from "../context/favoritesContext"

const useFavorites = () => {

    const {favorites, setFavorites} = useContext(FavoritesContext);

    const isFavorite = id => {
        return favorites.includes(id);
    }


    const setFavoritesInContextAndLocalStorage = newId => {

        // is favorite
        // true 
        // remove
        // false
        // add


        // localStorage.setItem('favorites', JSON.stringify([535225, 535255]))

    }

    return ( 
        {
            favorites, 
            setFavorites: setFavoritesInContextAndLocalStorage, 
            isFavorite 
        }
     );
}
 
export default useFavorites;