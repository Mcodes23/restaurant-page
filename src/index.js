import "./style.css";
import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadContactPage } from "./contact.js";

document.getElementById("homepageBtn").addEventListener("click", loadHomePage);
document.getElementById("menuBtn").addEventListener("click", loadMenuPage);
document
  .getElementById("contactBtn")
  .addEventListener("click", loadContactPage);

loadHomePage();
