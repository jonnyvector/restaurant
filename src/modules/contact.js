import Dinky from "../images/dinky.svg";
import Rotjana from "../images/rotjana.svg";
import Am from "../images/am.svg";

const DinkyImage = new Image();
const RotjanaImage = new Image();
const AmImage = new Image();

DinkyImage.src = Dinky;
RotjanaImage.src = Rotjana;
AmImage.src = Am;

const contactContainer = document.createElement("div");
const heading = document.createElement("h1");

heading.innerText = "Contact Us";

contactContainer.appendChild(heading);

const contacts = [
  {
    id: "Dinky",
    name: "Stinky Dinky",
    image: DinkyImage,
    phone: "069 420 690",
    email: "donkeyhead42069@dinkys.com",
  },
  {
    id: "Rotjana",
    name: "Rotjana Totoro",
    image: RotjanaImage,
    phone: "089 892 921",
    email: "rotlovestotoro@dinkys.com",
  },
  {
    id: "Am",
    name: "Am 'Lil Devil'",
    image: AmImage,
    phone: "066 666 666",
    email: "amthelildevil@dinkys.com",
  },
];

console.log(contacts);
const contact = () => {
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.appendChild(heading);

  contacts.forEach((contact) => {
    const containerDiv = document.createElement("div");
    const name = document.createElement("h3");
    const phone = document.createElement("p");
    const email = document.createElement("p");

    containerDiv.setAttribute("id", contact.id);
    containerDiv.classList.add("container");

    contact.image.classList.add("icon-image");
    containerDiv.appendChild(contact.image);

    name.innerText = contact.name;
    name.classList.add("heading");
    containerDiv.appendChild(name);

    phone.innerText = `Phone: ${contact.phone}`;
    phone.classList.add("text");
    containerDiv.appendChild(phone);

    email.innerText = `Email: ${contact.email}`;
    email.classList.add("text");
    containerDiv.appendChild(email);

    div.appendChild(containerDiv);
  });

  div.appendChild(contactContainer);
  console.log(div);
  return div;
};

export { contact };
