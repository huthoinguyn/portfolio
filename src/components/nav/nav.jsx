import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

import React from "react";

export default function Navbar() {
  function handleActive(event) {
    changeactive();
    event.target.classList.add("active-nav");
  }
  function changeactive() {
    let Icons = document.querySelectorAll(".navigation .icon");
    Icons.forEach((icon) => {
      icon.classList.remove("active-nav");
    });
  }
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" onClick={handleActive} />
      </a>
      <a href="#about">
        <AiOutlineUser className="icon" onClick={handleActive} />
      </a>
      <a href="#members">
        <TiGroupOutline className="icon" onClick={handleActive} />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon" onClick={handleActive} />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon" onClick={handleActive} />
      </a>
    </div>
  );
}
