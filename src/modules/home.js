import Logo from "../images/dinkysbbq.jpeg";
import Cactus from "../images/Cactus.svg";
import CowboyHat from "../images/cowboy-hat.svg";
import Smoker from "../images/Smoker.svg";
import Map from "../images/map.svg";

const dinkyImage = new Image();
const cactusImage = new Image();
const cowboyHatImage = new Image();
const smokerImage = new Image();
const mapImage = new Image();

cactusImage.src = Cactus;
cowboyHatImage.src = CowboyHat;
smokerImage.src = Smoker;
mapImage.src = Map;

const containers = [
  {
    id: "story",
    heading: "Our Story",
    image: cactusImage,
    body: "Step into the heart of Texas right here in Chiang Mai at Dinky's BBQ, where the authentic taste of slow-smoked meats has been a local favorite for two flavorful years. Our passion for genuine Texas barbecue is evident in every succulent bite, from the perfectly smoked brisket to the finger-licking-good ribs.",
  },
  {
    id: "hours",
    heading: "Our Hours",
    image: smokerImage,
    body: [
      "Monday: 12pm - 9pm",
      "Tuesday: 5pm - 9pm",
      "Wednesday: 5pm - 9pm",
      "Thursday: 12pm -9pm",
      "Friday: 12pm - Late",
      "Saturday: 12pm - Late",
      "Sunday: 12pm - 9pm",
    ],
  },
  {
    id: "location",
    heading: "Our Location",
    image: mapImage,
    body: [
      "Lansieaw Complex",
      "175 Soi Wat Umong",
      "Suthep, Chang Wat",
      "Chiang Mai 50200",
    ],
  },
];

console.log(containers);

dinkyImage.src = Logo;
dinkyImage.style.width = "15rem";

const home = () => {
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.appendChild(dinkyImage);

  containers.forEach((element) => {
    const containerDiv = document.createElement("div");
    const heading = document.createElement("h3");
    const body = document.createElement("p");

    containerDiv.setAttribute("id", element.id);
    containerDiv.classList.add("home-container");

    heading.innerText = element.heading;
    heading.classList.add("heading");

    containerDiv.appendChild(heading);
    if (element.image) {
      element.image.classList.add("icon-image");
      containerDiv.appendChild(element.image);
    }
    div.appendChild(containerDiv);

    if (element.id === "story") {
      body.innerText = element.body;
      containerDiv.appendChild(body);
    }
    if (element.id === "hours" || element.id === "location") {
      element.body.forEach((day) => {
        const line = document.createElement("p");
        line.innerText = day;
        containerDiv.appendChild(line);
        line.classList.add("list");
      });
    }

    body.classList.add("text");
  });
  return div;
};

export { home };
