import React, {useEffect, useState} from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';

import "./Page.css";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

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

export default function Page(props) {
  const info = props.state;

  //fetch(props.location.state.htmlPath).then(res => res.text()).then(setHtml)
  
  useEffect(() => {
    console.log("start")
  }, [])

  return info && (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.open}
      onClose={props.onClose}
    >
      <div className={"page-div " + props.className} style={props.style}>
        <h2 className="simple-modal-title">
          {info.title}
        </h2>
        <div className="simple-modal-description">
          <iframe style={{width: "100%", height: "100%"}} src={info.htmlPath}></iframe>
        </div>
      </div>
    </Modal>
  )
}