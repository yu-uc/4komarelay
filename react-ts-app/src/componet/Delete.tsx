import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: "#FF4422",
      color: "#FFFFFF",
      borderLeftColor: "#39B5FF",
      marginBottom: "8px",
      margin: theme.spacing(2),
      width: "20ch",
      "&:hover": {
        backgroundColor: "#FFF",
        color: "#FF4422",
      },
    },
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "40ch",
      },
    },
  })
);

const Delete = (props: any) => {
  const classes = useStyles();
  const selector = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const getAuthentication = async () => {
    const url = "http://localhost:3000/api/method/delete?sid=" + props.sid;
    console.log(props.uid);

    const boolean = await fetch(url)
      .then((boolean) => {
        console.log("削除しました");
        return boolean.json();
      })
      .catch((error) => {
        console.error("エラー", error);
        return null;
      });

    console.log(boolean);
    if (boolean) {
      console.log("成功");
    } else {
      console.log("false");
    }

    if (boolean) {
      console.log("成功");
      alert("削除しました");
      dispatch(push("/Return"));
    } else {
      console.log("false");
      alert("削除に失敗しました");
    }
  };

  return (
    <div>
      <Grid container spacing={2} alignItems="center" justify="center">
        <div>
          <Button
            className={classes.button}
            variant="contained"
            onClick={() => getAuthentication()}
          >
            削除
          </Button>
        </div>
      </Grid>
    </div>
  );
};
export default Delete;
