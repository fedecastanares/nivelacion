import React, { useContext } from "react";
import Slider from "infinite-react-carousel";
import { DataContext } from "../context/dataContext";
import Slide from "../components/Slide"


const MySlider = () => {
  const { news } = useContext(DataContext);

  return (
    <>
      {news.length > 0 && (
        <Slider dots>
          {news.map((newItem, index) => 
            <Slide key={newItem.id} newItem={newItem} index={index} />
          )}
        </Slider>
      )}
    </>
  );
};

export default MySlider;
