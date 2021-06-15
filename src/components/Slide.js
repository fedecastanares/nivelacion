import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UseFeatureMediaImage from "../hook/useFeatureMediaImage";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sliderDiv: {
    height: "80vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "flex-end",
  },
  shadow: {
    height: "25%",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(66,66,66,0.80) 35%, rgba(66,66,66,1) 80%)",
  },
  text: {
    margin: "3%",
    color: 'white',
  },
}));

const Slide = ({ newItem, index }) => {
  const classes = useStyles();
  const [image, setImage] = useState(false);

  useEffect(() => {
    const getImage = async () => {
      const response = await UseFeatureMediaImage(newItem.featured_media);
      setImage(response.source_url);
    };
    getImage();
  // eslint-disable-next-line
  }, []);

  return (
    <>
      <Link to={`/noticias/${newItem.id}`} style={{textDecoration: 'none'}}>
        <div
          className={classes.sliderDiv}
          style={
            image
              ? {
                  backgroundImage: `url("${image}")`,
                }
              : undefined
          }
        >
          <div className={classes.shadow}>
            <Typography className={classes.text} variant="h5">
              {newItem.title.rendered}
            </Typography>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Slide;
