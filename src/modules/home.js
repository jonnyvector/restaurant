import Logo from "../../src/dinkysbbq.jpeg";

const headerContainer = document.createElement("div");
headerContainer.style.display = "flex";
headerContainer.style.alignItems = "center";
headerContainer.style.justifyContent = "center";
const img = document.createElement("img");

const dinkyImage = new Image();
dinkyImage.src = Logo;

dinkyImage.style.width = "15rem";

headerContainer.appendChild(dinkyImage);

const home = () => {
  const div = document.createElement("div");
  div.appendChild(headerContainer);
  return div;
};

export { home };
