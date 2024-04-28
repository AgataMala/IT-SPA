import "bootstrap/dist/css/bootstrap.css";
import "./it-spa.css";

import { Nav } from "./navigation/Nav";
import { Home } from "./views/Home";
import { Cart } from "./views/Cart";
import { MiniCart } from "./views/MiniCart";

const main = document.querySelector("main");
main.classList.add("main-container")
const body = document.querySelector("body");
//body.classList.add("showCartTab");
body.append(MiniCart());
// Wstawiamy nawigacje
main.before(Nav());

// Startuemy z widoku Home
main.append(Home());

document.body.addEventListener("navigate", (event) => {
  // Pamietamy, ze pod detail przekazywany jest komponent (fn)
  const Component = event.detail;

  main.innerHTML = "";
  main.append(Component());
});
