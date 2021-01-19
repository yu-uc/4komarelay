import {
  Grid,
  Button,
  makeStyles,
  createStyles,
  Divider,
  Container,
  Box,
} from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import React from "react";
import { useFileUpload } from "use-file-upload";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { SidAction } from "../reducks/users/actons";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    input: {
      display: "none",
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);

const PostContinus = () => {
  const classes = useStyles();

  const [file, selectFile] = useFileUpload();
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const uid = selector.users.uid;
  const sid = selector.sakuhin.sid;
  const koma = selector.sakuhin.koma;

  console.log(selector.sakuhin.koma);

  const url = "http://localhost:3000/api/method/upload";

  const postFetch = async () => {
    console.log(file.file);

    const formData = new FormData();
    formData.append("sid", sid);
    formData.append("uid", uid);
    formData.append("koma", koma);
    formData.append("file", file.file);
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
      mode: "cors",
    });
    const data = await res.json();

    if (data) {
      //投稿されたらsidをリセットする
      dispatch(SidAction({ sid: "", koma: "" }));
      //メインページに移動
      dispatch(push("/"));
    } else {
      alert("投稿に失敗しましたに失敗しました");
      console.log("false");
    }
  };

  return (
    <div>
      <div>
        <Navbar />
        <div>
          <Grid container alignItems="center" justify="center">
            <Divider></Divider>
            <Box
              textAlign="center"
              m={1}
              fontSize={30}
              fontWeight="fontWeightLight"
            >
              続きを投稿
            </Box>
            <Divider></Divider>
            <h1>sid:{selector.sakuhin.sid}</h1>
            <h2>num:{selector.sakuhin.koma}</h2>
          </Grid>
          <Container maxWidth="sm">
            <br></br>
            <Divider></Divider>
            <br></br>
            <Grid container>
              <Grid item xs={4}>
                画像をアップロード
              </Grid>
              <div>
                <button
                  onClick={() => {
                    // Single File Upload
                    selectFile();
                  }}
                >
                  画像をアップロード
                </button>
                {file ? (
                  <div>
                    <img src={file.source} alt="preview" />
                    <span> ファイル名: {file.name} </span>
                    <br></br>
                    <span> サイズ: {file.size} </span>
                  </div>
                ) : (
                  <span>ファイルが選択されていません</span>
                )}
              </div>
            </Grid>
            <br></br>
            <Divider></Divider>
            <br></br>
            <Grid container alignItems="center" justify="center">
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudUpload />}
                onClick={postFetch}
                type="submit"
              >
                作品を投稿
              </Button>
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default PostContinus;
