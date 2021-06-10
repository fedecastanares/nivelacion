import { useContext } from 'react';

import { DataContext } from '../context/dataContext'

const useNews = () => {

    const {news, setNews} = useContext(DataContext);

    const setterNews = (user) => {
        
    }

    return {news, setNews};
}
 
export default useNews;