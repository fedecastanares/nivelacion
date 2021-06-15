import React, {useContext} from 'react';
import { Grid } from '@material-ui/core'

import Card from '../components/MyCard'
import { DataContext } from "../context/dataContext"
import useNews from '../hook/useNews'
import NewSkeleton from './NewSkeleton';

const News = () => {

    
    const { loading } = useContext(DataContext);
    const {news} = useNews();

    const RenderNews = () => (
      news.map((notice) => 
      React.Children.toArray(
        <Grid item>
          <Card notice={notice} />
        </Grid>
      ))
    )

    return ( 
        <>
        {news.length > 0 && !loading ? (<RenderNews />) : (<NewSkeleton />)}
        </>
     );
}
 
export default News;