import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


export default function CardGrid(props) {

  return(
    <Grid container spacing={6}>
      {
        props.data.map((d, i) => {
          const { imageUrl, title, subtitle, rate, price, htmlPath } = d;
          return (
            <Grid item xs={4} key={i}>
              <Card>
                <CardActionArea>
                {/*
                  <a href={"/backtesting/html/" + htmlPath}>
                    <CardMedia
                      component="img"
                      src={imageUrl}
                    />
                  </a>
                */}
                  <CardMedia
                    component="img"
                    src={imageUrl}
                    data-info={JSON.stringify(d)}
                    onClick={props.onClick}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      {subtitle}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" component="p">
                      {rate}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" component="p">
                      {price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })
      }
    </Grid>
  )
}
