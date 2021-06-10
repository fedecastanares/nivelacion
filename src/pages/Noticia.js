import Layout from "../components/Layout"

import {Typography, Button} from "@material-ui/core"

import TeledoceService from "../service/TeledoceService"
import { useEffect, useState } from "react";


function News ({history, match}) {

    const [ news, setNews ] = useState(null);

    useEffect(() => {
        const _teledoceService = new TeledoceService();
        const getNew = async () => {
            const response = await _teledoceService.getNewById(match.params.id);
            const image = await _teledoceService.getFeatureMediaById(response.featured_media);
            setNews({newsInfo: response, image});
        }
        getNew()
    },[match.params.id])
    
    const NewsInfo = () => (
        <>
            <img src={news.image.source_url} alt={news.newsInfo.title.rendered} style={{width: "100vw", height: 'auto'}} /> 
            <Typography variant='h5'>{news.newsInfo.title.rendered}</Typography>
        </>
    )


    return (
        <>
        <Layout>
            {news &&
                <NewsInfo />
            }
            <Button onClick={() => history.goBack()}>Ir atras</Button>
        </Layout>
        </>
    )
}

export default News;
