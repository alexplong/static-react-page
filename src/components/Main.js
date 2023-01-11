/** @format */
import React from "react";
import reactBackgroundLogo from "../images/reactjs-icon 2.png";

function Main() {
  return (
    <main className="main--body">
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      {/* <img
        className="main--background_logo"
        alt="background logo"
        src={reactBackgroundLogo}
      /> */}
    </main>
  );
}

export default Main;
