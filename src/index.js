import { pageLoad } from "./modules/pageLoad";
import { home } from "./modules/home";
const content = document.querySelector("#content");
const div = document.createElement("div");
const h1 = document.createElement("h1");
h1.textContent = "Dinky's BBQ";

div.appendChild(h1);
console.log("we're using webpack");

pageLoad(content.appendChild(home()));
