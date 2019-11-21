import React, { useEffect } from "react";
import { useState } from "react";
import CardGrid from "./CardGrid";
import { makeStyles } from '@material-ui/core/styles';
import Page from "./Page";

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: "90%",
    height: "90%",
    top: "5%",
    left: "5%",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    //padding: theme.spacing(2, 4, 3),
  },
}));


export default function Main(props) {
  const classes = useStyles();

  const { history } = props;

  const [info, setInfo] = useState([]);
  const [opened, open] = useState(false)

  useEffect(() => {
    fetch("/backtesting/index.json")
      .then(res => res.json())
      .then(data => setInfo(data))
  }, []);

  function openPage(event){
    const info = JSON.parse(event.currentTarget.dataset.info);
    console.log(info)
    window.history.pushState(info, info.title, "/backtesting/html/" + info.htmlPath)
    open(true)
  }

  function closePage(event) {
    window.history.back()
    open(false)
  }

  return(
    <div>
      <Page className={classes.paper} state={window.history.state} open={opened} onClose={closePage} />
      <CardGrid data={info} onClick={openPage}/>
    </div>
  )
}