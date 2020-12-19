import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      backgroundColor: "#FFB549",
      color: "#FFFFFF",
      marginBottom: "8px",
    },
  })
);

const Login = (props: any) => {
  const classes = useStyles();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const getAuthentication = () => {
    console.log(userEmail);
    console.log(userPassword);
    //入力したidとパスワードをapiに送信
    const res = window.fetch(
      "http://localhost:3000/api/v1/works/http://localhost:3000/api/v1/user/login?id=" +
        userEmail +
        "&pwd=" +
        userPassword
    );
    console.log(res);
    if (res) {
      console.log("true");
    } else {
      console.log("false");
    }
  };

  return (
    <div>
      <div>
        <div>
          <label htmlFor="">ID</label>
          <input type="text" onChange={(id) => setUserEmail(id.target.value)} />
        </div>
        <label htmlFor="">パスワード</label>
        <input
          type="password"
          onChange={(pass) => setUserPassword(pass.target.value)}
        />
        <div>
          <Button
            className={classes.button}
            variant="contained"
            onClick={() => getAuthentication()}
          >
            ログイン
          </Button>
        </div>
        <p>
          <Link to="/">home</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
