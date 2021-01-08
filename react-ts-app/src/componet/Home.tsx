import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Scroll from "./Scroll";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Scroll/>
        <p>
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
