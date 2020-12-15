import React from "react";
import { Link } from "react-router-dom";

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

  render() {
    console.log(this.state.userEmail);

    return (
      <div>
        <div>
          <div>
            <label htmlFor="">ID</label>
            <input
              type="text"
              onChange={(id) => this.setUserEmail(id)}
            />
          </div>
          <label htmlFor="">パスワード</label>
          <input type="password" onChange={(pass) => this.setUserPassword(pass)} />
          <div>
            <button onClick={() => console.log("クリックされました")}>
              ログイン
            </button>
          </div>
          <p>
            <Link to="/">home</Link>
          </p>
        </div>
      </div>
    );
  }
}
