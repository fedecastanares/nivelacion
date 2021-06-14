import { useContext } from "react";
import {FavoritesContext} from "../context/favoritesContext"

const useFavorites = () => {

    const {favorites, setFavorites} = useContext(FavoritesContext);

    const isFavorite = id => {
        return favorites.includes(id);
    }


    const setFavoritesInContextAndLocalStorage = newId => {
        if (isFavorite(newId)){
            removeFavoriteById(newId);
        } else {
            addFavoriteById(newId);
        }
    }

    const removeFavoriteById = newId => {
        const newArray = favorites.filter(item => item !== newId);
        setFavorites(newArray);
        updateLocalStorage();
    }

    const addFavoriteById = newId => {
        setFavorites([...favorites, newId]);
        updateLocalStorage();
    }

    const updateLocalStorage = () => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    const saludo = () => {
        console.log("hola");
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