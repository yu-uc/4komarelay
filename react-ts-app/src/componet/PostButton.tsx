import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { SidAction } from "../reducks/users/actons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: "#39B5FF",
      color: "#FFFFFF",
      borderLeftColor: "#39B5FF",
      marginBottom: "8px",
      margin: theme.spacing(1),
      width: "20ch",
      "&:hover": {
        backgroundColor: "#FFF",
        color: "##39B5FF",
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

const PsotButton = (props: any) => {
  const classes = useStyles();
  const selector = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const readSid = (sid: any, koma: any) => {
    console.log(sid);
    console.log(selector.sakuhin.sid);
    dispatch(SidAction({ sid: sid, koma: koma }));
    dispatch(push("/PostContinus"));
  };

  return (
    <div>
      <Grid container spacing={2} alignItems="center" justify="center">
        <div>
          <Button
            className={classes.button}
            variant="contained"
            onClick={() => readSid(props.sid, props.koma)}
          >
            続きを投稿
          </Button>
        </div>
      </Grid>
    </div>
  );
};
export default PsotButton;
