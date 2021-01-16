import { push } from "connected-react-router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { UsersContext } from "../App";
import { signInAction } from "../reducks/users/actons";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Scroll from "./Scroll";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state);
  const num = selector.serches.count;
  // const [list, setList] = useState<any[]>([]);

  console.log(selector);

  return (
    <div>
      <div>
        {" "}
        {(() => {
          if (!selector.users.isLogin) {
            return <Redirect to="/login" />;
          } else {
            return;
          }
        })()}
      </div>
      {/* {if(selectpr.users.isLogin)<Redirect to="/login" />} */}
      <div>
        <Navbar />
        <h3>userID:{selector.users.uid}</h3>
        <h3>{selector.serches.genre}の検索結果</h3>
        <button onClick={() => dispatch(push("/login"))}></button>
        <Scroll />
      </div>
    </div>
  );
};

export default Home;
