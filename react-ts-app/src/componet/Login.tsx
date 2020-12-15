import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      userEmail: "",
      password: "",
    };
  }

  setUserEmail(id: any) {
    this.setState({
      ...this.state,
      userEmail: id.target.value,
    });
  }
  setUserPassword(pass: any) {
    this.setState({
      ...this.state,
      userPassword: pass.target.value,
    });
  }
  getAuthentication(id: any, pass: any) {
    const res = window.fetch(
      "http://localhost:3000/api/v1/works/http://localhost:3000/api/v1/user/login?id=" +
        "id&pwd=" +
        pass
    );
    console.log(res);
  }
  render() {
    console.log(this.state.userEmail);

    return (
      <div>
        <div>
          <div>
            <label htmlFor="">ID</label>
            <input type="text" onChange={(id) => this.setUserEmail(id)} />
          </div>
          <label htmlFor="">パスワード</label>
          <input
            type="password"
            onChange={(pass) => this.setUserPassword(pass)}
          />
          <div>
            <Button
              id="login"
              variant="contained"
              color="primary"
              onClick={() => this.getAuthentication("uchida", "yuta")}
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
  }
}
