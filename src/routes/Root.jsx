import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="appContainer">
      <div className="appWrapper">
        <Header />

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Root;
