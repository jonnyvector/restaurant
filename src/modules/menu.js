const menuContainer = document.createElement("div");
const heading = document.createElement("h3");

heading.innerText = "Menu";

menuContainer.appendChild(heading);

const menu = () => {
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";

  div.appendChild(menuContainer);
  return div;
};

export { menu };
