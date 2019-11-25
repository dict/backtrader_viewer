import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Dashboard from "./Dashboard";

export default function Main() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("/backtesting/index.json")
      .then(res => res.json())
      .then(setInfo);
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Dashboard data={info} />
      </Grid>
    </Grid>
  );
}
