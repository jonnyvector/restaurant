import { pageLoad } from "./modules/pageLoad";
import { home } from "./modules/home";
import { menu } from "./modules/menu";
import { contact } from "./modules/contact";
import "./style.css";

const content = document.querySelector("#content");
const navLinks = document.querySelectorAll(".nav-links");
const div = document.createElement("div");
const h1 = document.createElement("h1");

let activePage = "";

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    if (e.target.id === "home") {
      content.innerHTML = "";
      content.appendChild(home());
    }
    if (e.target.id === "menu") {
      content.innerHTML = "";
      content.appendChild(menu());
    }
    if (e.target.id === "contact") {
      content.innerHTML = "";
      content.appendChild(contact());
    }
  });
});

pageLoad(content.appendChild(home()));
