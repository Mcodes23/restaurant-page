import homepageImg from "./asset/homepage-img.jpg";
export function loadHomePage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const secElement = document.createElement("section");
  secElement.classList.add("homepage");

  const headingElem = document.createElement("h1");
  headingElem.textContent = "Welcome to Codekage’s Kitchen";

  const img = document.createElement("img");
  img.src = homepageImg;
  img.alt = "Delicious meal";

  const paragraphElem = document.createElement("p");
  paragraphElem.innerHTML = `Experience the taste of tradition with a modern twist. At Codekage’s
          Kitchen, we serve fresh, flavorful meals crafted with love. Whether
          you’re here for a quick bite or a family feast, we promise
          unforgettable dining.`;
  secElement.append(headingElem, img, paragraphElem);
  content.appendChild(secElement);
}
loadHomePage();
