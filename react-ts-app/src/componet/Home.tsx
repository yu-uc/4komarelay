import React, { useContext } from "react";
import { UsersContext } from "../App";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Scroll from "./Scroll";

const Home = () => {
  const { state } = useContext(UsersContext);
  return (
    <div>
      <div>
        <Navbar />
        <h3>userID:{state.uid}</h3>
        <Scroll />
        <p>
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
