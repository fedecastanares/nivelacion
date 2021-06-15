import React from "react";

import { Card, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const NewSkeleton = () => {
  return (
    <>
      {React.Children.toArray(
        Array(8).fill(
          <Card>
            <Grid container spacing={3}>
              <Grid item>
                <Skeleton variant="text" />
              </Grid>
              <Grid item>
                <Skeleton variant="circle" width={40} height={40} />
              </Grid>
            </Grid>
            <Skeleton variant="rect" width={210} height={118} />
          </Card>
        )
      )}
    </>
  );
};

export default NewSkeleton;
