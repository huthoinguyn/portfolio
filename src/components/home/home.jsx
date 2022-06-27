import "./home.css";
import { BsMouse } from "react-icons/bs";
import img from "../props/img2.jpg";
import Buttons from "../button/button";
import React from "react";

export default function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="main-img">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <img src={img} alt="" />
      </div>
      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>
      <h2>
        <span>About me</span>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente
          enim placeat eveniet, alias eius assumenda doloremque adipisci?
          Tempore, at expedita aut nemo maiores provident. Porro natus illo
          minus adipisci?
        </p>
      </h2>
      <Buttons />
    </div>
  );
}
