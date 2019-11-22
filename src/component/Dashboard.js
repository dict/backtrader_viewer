import Grid from "@material-ui/core/Grid";
import React from "react";
import CardGrid from "./CardGrid";

export default function Dashboard(props) {
  const { data } = props;

  return (
    <Grid container spacing={6}>
      {data.map((info, i) => (
        <Grid item xs={4} key={i}>
          <CardGrid info={info} />
        </Grid>
      ))}
    </Grid>
  );
}
