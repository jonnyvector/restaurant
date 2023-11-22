const contactContainer = document.createElement("div");
const heading = document.createElement("h3");

heading.innerText = "Contact Us";

contactContainer.appendChild(heading);

const contact = () => {
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";

  div.appendChild(contactContainer);
  return div;
};

export { contact };
