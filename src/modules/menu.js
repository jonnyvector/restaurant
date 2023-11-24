import Taco from "../images/taco.svg";
import Sausage from "../images/sausage.svg";
import Sandwich from "../images/pork-sammie.svg";
import Ribs from "../images/ribs.svg";
import FullRibs from "../images/full-ribs.svg";

const TacoImage = new Image();
const SausageImage = new Image();
const RibsImage = new Image();
const SandwichImage = new Image();
const FullRibsImage = new Image();

TacoImage.src = Taco;
SausageImage.src = Sausage;
RibsImage.src = Ribs;
FullRibsImage.src = FullRibs;
SandwichImage.src = Sandwich;

const menuContainer = document.createElement("div");
const heading = document.createElement("h1");

heading.innerText = "Menu";

const menuItems = [
  {
    id: "half-ribs",
    name: "1/2 Rack Of Ribs",
    image: RibsImage,
    description: "Smoked for 6 hours and rubbed in our house-made dry rub.",
    price: "฿300",
  },
  {
    id: "full-ribs",
    name: "Full Rack Of Ribs",
    image: FullRibsImage,
    description: "Smoked for 6 hours and rubbed in our house-made dry rub.",
    price: "฿550",
  },
  {
    id: "pork-sandwich",
    name: "Pulled Pork Sandwich",
    image: SandwichImage,
    description:
      "Smoked, dry-rubbed pulled pork piled on to a fresh, homemade bun, topped with house-made BBQ sauce and pickles",
    price: "฿250",
  },
  {
    id: "tacos",
    name: "Tacos",
    image: TacoImage,
    description:
      "Your choice of meat (pulled pork, pulled chicken, pork belly, or beef cheek) in our house-made, beef fat tortillas topped with onions, cilantro and homemade salsa.",
    price: "฿89",
  },
  {
    id: "sausage",
    name: "Smoked Sausage",
    image: SausageImage,
    description:
      "House-made smoked sausage stuffed with jalapenos and cheddar cheese.",
    price: "฿125",
  },
];

menuContainer.appendChild(heading);

const menu = () => {
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.appendChild(heading);

  menuItems.forEach((item) => {
    const containerDiv = document.createElement("div");
    const heading = document.createElement("h3");
    const body = document.createElement("p");
    const price = document.createElement("p");

    containerDiv.setAttribute("id", item.id);
    containerDiv.classList.add("container");

    heading.innerText = item.name;
    heading.classList.add("heading");

    containerDiv.appendChild(heading);

    // check if item has image & render
    if (item.image) {
      if (item.id === "full-ribs") {
        item.image.classList.add("full-ribs-image");
      } else {
        item.image.classList.add("icon-image");
      }
      containerDiv.appendChild(item.image);
    }
    div.appendChild(containerDiv);

    // item description
    body.innerText = item.description;
    containerDiv.appendChild(body);
    body.classList.add("text");

    // render price
    price.innerText = item.price;
    price.classList.add("price");
    containerDiv.appendChild(price);
  });

  div.appendChild(menuContainer);
  return div;
};

export { menu };
