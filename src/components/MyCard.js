import React, {useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardMedia,
  Typography,
  Button,
  CardActions,
  CardContent,
  Grid,
  CardHeader,
  Avatar,
  IconButton,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import {Link} from 'react-router-dom'

import UseFeatureMediaImage from "../hook/useFeatureMediaImage"

import { red } from "@material-ui/core/colors";
import useFavorites from '../hook/useFavorites'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  noticeText: {
    fontFamily: 'Helvetica',
    fontWeight: 400
  },
  avatarImage: {
    maxWidth: "150%",
    height: "auto"
  }
}));

function MyCard({ notice }) {
  const classes = useStyles();

  const [image, setImage] = useState(false);
  const { setFavorites, isFavorite} = useFavorites();
  console.log(setFavorites)

  useEffect(() => {
    const getImage = async () => {
      const response = await UseFeatureMediaImage(notice.featured_media);
      setImage(response);
    }
    getImage();
  // eslint-disable-next-line
  },[]);



  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {image && <img className={classes.avatarImage} src={image.source_url} alt={image.alt_text} />}
            </Avatar>
          }
          title={(<Typography>{notice.title.rendered}</Typography>)}
          subheader={new Date(notice.date).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        />
        {image && 
        <CardMedia
          className={classes.media}
          image={image.source_url }
          title={image.title.rendered }
        />}
        <CardContent>
            <div className={classes.noticeText} dangerouslySetInnerHTML={{__html: notice.excerpt.rendered}}></div>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" color={isFavorite(notice.id) ? 'primary' : 'inherit'} onClick={() => setFavorites(notice.id)}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Grid container justify='flex-end'><Link to={`/noticias/${notice.id}`} style={{width: '70%'}}><Button color="primary" variant='contained' fullWidth>Ver</Button></Link></Grid>
        </CardActions>
      </Card>
    </>
  );
}
export default MyCard;
