import Grid from "@material-ui/core/Grid";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const data = [
  {
    imageUrl: "https://api-metakage-4misc.kakao.com/dn/connection/admin/icon512.png",
    title: "수급단타 전략의 숨겨진 알파!",
    subtitle: "수급 의존도가 높은 종목을 선별하여 매매하고, 수급이 살아있다면 최대 2일까지 보유",
    rate: "211.66%",
    price: "4000000",
    htmlPath: "www.naver.com",
    htmlPage: "<div>ㄱㄴㄷㄹ</div>"
  },
  {
    imageUrl: "https://api-metakage-4misc.kakao.com/dn/connection/admin/icon512.png",
    title: "수급단타 전략의 숨겨진 알파!",
    subtitle: "수급 의존도가 높은 종목을 선별하여 매매하고, 수급이 살아있다면 최대 2일까지 보유",
    rate: "211.66%",
    price: "4000000",
    htmlPath: "www.daum.net"
  },
  {
    imageUrl: "https://api-metakage-4misc.kakao.com/dn/connection/admin/icon512.png",
    title: "수급단타 전략의 숨겨진 알파!",
    subtitle: "수급 의존도가 높은 종목을 선별하여 매매하고, 수급이 살아있다면 최대 2일까지 보유",
    rate: "211.66%",
    price: "4000000",
    htmlPath: "www.nate.com"
  },
  {
    imageUrl: "https://api-metakage-4misc.kakao.com/dn/connection/admin/icon512.png",
    title: "수급단타 전략의 숨겨진 알파!",
    subtitle: "수급 의존도가 높은 종목을 선별하여 매매하고, 수급이 살아있다면 최대 2일까지 보유",
    rate: "211.66%",
    price: "4000000",
    htmlPath: "www.google.com"
  }
];

export default function Main(props) {
  const { history } = props;

  function handleClick(event){
    const { dataset: {link}} = event.currentTarget;

    history.push({pathname: "/page", state: {htmlPage: link}})
  }

  return(
    <Grid container spacing={6}>
      {
        data.map((d, i) => {
          const { imageUrl, title, subtitle, rate, price, htmlPath, htmlPage } = d;
          return (
            <Grid item xs={4} key={i}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    src={imageUrl}
                    data-link={htmlPage}
                    onClick={handleClick}
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
                <CardActions>
                  <Button onClick={handleClick} data-link={htmlPath}>버튼</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })
      }
    </Grid>
  )
}