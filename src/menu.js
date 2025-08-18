import pizzaImg from "./asset/pizza.jpg";
import burgerImg from "./asset/burger.jpg";
import pastaImg from "./asset/pasta.jpg";

export function loadMenuPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const secElement = document.createElement("section");
  secElement.classList.add("menu");

  const headingElem = document.createElement("h1");
  headingElem.textContent = "Our Menu";

  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  const menuItems = [
    {
      img: pizzaImg,
      alt: "Pizza",
      title: "Classic Margherita",
      desc: "Fresh tomatoes, mozzarella, basil — a timeless favorite.",
      price: "$8.99",
    },
    {
      img: burgerImg,
      alt: "Burger",
      title: "Cheese Burger",
      desc: "Juicy beef patty, cheddar cheese, and our secret sauce.",
      price: "$6.50",
    },
    {
      img: pastaImg,
      alt: "Pasta",
      title: "Spaghetti Carbonara",
      desc: "Creamy sauce, parmesan, and crispy bacon bits.",
      price: "$7.75",
    },
  ];

  menuItems.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("menu-item");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.alt;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const desc = document.createElement("p");
    desc.textContent = item.desc;

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = item.price;

    div.append(img, title, desc, price);
    menuGrid.appendChild(div);
  });
  secElement.append(headingElem, menuGrid);
  content.appendChild(secElement);
}

loadMenuPage();
