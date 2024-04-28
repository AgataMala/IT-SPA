import { AddToCartButton } from "../cart/AddToCartButton";
import { NavButton } from "../navigation/NavButton";
import { RoomDetails } from "./RoomDetails";
import { cartManager } from "../cart/cart-manager";

export function RoomList() {
  const section = document.createElement("section");

  section.innerHTML = `
        <h1 class="header">Room List</h2>
        <p class="loading text-danger">Ladowanie pokoi...</p>
    `;

  const ul = document.createElement("ul");
  ul.classList.add("rooms-container")
  //http://localhost:3000/rooms
  // Pobieramy pokoje (surowe dane)
  fetch("http://localhost:3000/rooms")
    .then((response) => response.json())
    .then((rooms) => {
      // Wytwarzamy elementy listy
      const list = rooms.map((room) => {
        const li = document.createElement("li");
        li.classList.add('room-item')
        li.innerHTML = `
        <img src="${require("../assets/capybaras.jpg")}"/>
                    <h4 class="name">${room.name}</h4>
                    
                    
                    <p class="price">
                        ${room.price.toFixed(2)} PLN
                    </p>
                 
                `;

        const readMoreButton = NavButton("Read more", () => RoomDetails(room));
        const addToCartButton = AddToCartButton(() => cartManager.add(room));
        readMoreButton.classList.add("read-more")
        li.append(readMoreButton, addToCartButton);

        return li;
      });

      // ul.append(lis[0]. list[1], ...);
      ul.append(...list);
      section.append(ul);
      section.querySelector(".loading").remove();
    });

  return section;
}
