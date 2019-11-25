import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: "90%",
    height: "90%",
    top: "5%",
    left: "5%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5]
  },
  title: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 50
  },
  description: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    bottom: 0
  },
  iframe: {
    display: "block",
    width: "100%",
    height: "100%",
    border: "none"
  }
}));

export default function Page(props) {
  const { info, open, onClose } = props;
  const { title, htmlPath } = info || {};

  const classes = useStyles();

  if (!info) return <></>;

  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.paper}>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.description}>
          <iframe className={classes.iframe} src={`/backtesting/html/${htmlPath}`} title={htmlPath} />
        </div>
      </div>
    </Modal>
  );
}
