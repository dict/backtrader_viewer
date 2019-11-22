import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Page from "./Page";

export default function CardGrid(props) {
  const { info } = props;
  const { imageUrl, title, subtitle, rate, price } = info;
  const [open, setOpen] = useState(false);

  function openPage() {
    setOpen(true);
  }

  function closePage() {
    setOpen(false);
  }

  return (
    <Card>
      <Page open={open} info={info} onClose={closePage} />
      <CardActionArea>
        <CardMedia component="img" src={imageUrl} onClick={openPage} />
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
  );
}
