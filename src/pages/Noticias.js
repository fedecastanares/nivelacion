
import { Grid } from "@material-ui/core";

import News from "../components/News";
import Layout from "../components/Layout";
import Aside from "../components/Aside";
import InputSearch from '../components/InputSearch'


function Noticias() {


  return (
    <>
      <Layout>
        <Grid
          container
          spacing={3}
          style={{ paddingTop: 30, maxWidth: "100vw" }}
        >
          <Grid item xs={12} sm={6} md={2}>
            <Aside />
          </Grid>
          <Grid item xs={12} sm={6} md={10}>
            <Grid container justify="center" spacing={3}>
              <Grid container justify="flex-end" style={{marginRight: '5vw'}}>
                <InputSearch />
              </Grid>
              <News />
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default Noticias;
