import React from "react";
import avatar from "../assets/JeremyHeadshot.png";

export default function Header() {
  return (
    <div className="">
      <div className="headerContainer">
        <img src={avatar} alt="Avatar" class="img-avatar" />
        <h1 className="display-5">Jeremy's Portfolio</h1>
        <p className="lead">Welcome to my Full Stack Developer Portfolio</p>
      </div>
    </div>
  );
}
