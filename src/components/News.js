import React, {useContext} from 'react';
import { Grid , CircularProgress} from '@material-ui/core'

import Card from '../components/MyCard'
import { DataContext } from "../context/dataContext"
import useNews from '../hook/useNews'

const News = () => {

    
    const { loading } = useContext(DataContext);
    const {news} = useNews();

    const RenderNews = () => (
      news.map((notice) => (
        <Grid item key={notice.id}>
          <Card notice={notice} />
        </Grid>
      ))
    )

    return ( 
        <>
        {news.length > 0 && !loading ? (<RenderNews />) : (<CircularProgress style={{marginTop: 100, marginBottom: 300}}/>)}
        </>
     );
}
 
export default News;