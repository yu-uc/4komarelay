import React, { useState } from "react";
import { push } from "connected-react-router";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

const Scroll = (props: any) => {
  const dispatch = useDispatch();
  return (
    <div>
      {(() => {
        dispatch(push("/"));
        return <Redirect to="/" />;
      })()}
    </div>
  );
};

export default Scroll;
