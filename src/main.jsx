import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const toggle = document.querySelector(".main-img");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
});

let Icons = document.querySelectorAll(".navigation .icon");
Icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    changeactive();
    icon.classList.add("active-nav");
  });
});
function changeactive() {
  Icons.forEach((icon) => {
    icon.classList.remove("active-nav");
  });
}
