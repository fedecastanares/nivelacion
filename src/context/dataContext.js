import React, { createContext, useState, useEffect, useContext } from "react";
import TeledoceService from "../service/TeledoceService";
import { CategoryContext } from './categoryContext';
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const {selectedCategories} =  useContext(CategoryContext);
  const [darkMode, setDarkMode] = useState(true);
  const [news, setNews] = useState([]);

  const [searchTextNews, setSearchTextNews] = useState("");
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const _teledoceService = new TeledoceService();

    const getNews = async () => {
      let params = "";
      if (searchTextNews !== "") {
        params = params + `search=${searchTextNews}&`;
      }
      if (selectedCategories !== undefined) {
        params = params + `categories=${selectedCategories}&`;
      }

      const response = await _teledoceService.getNews(params);
      setNews(response);
      setLoading(false);
    };
    getNews();
  }, [searchTextNews, selectedCategories]);

  return (
    <DataContext.Provider
      value={{
        news,
        darkMode,
        searchTextNews,
        loading,
        setNews,
        setDarkMode,
        setSearchTextNews,
        setLoading
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
