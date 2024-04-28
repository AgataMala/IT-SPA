import { NavButton } from "../navigation/NavButton";
import { TreatmentDetails } from "./TreatmentDetails";
import { cartManager } from "../cart/cart-manager";
import { AddToCartButton } from "../cart/AddToCartButton";

export function TreatmentList() {
  const section = document.createElement("section");

  section.innerHTML = `
        <h1 class="header">Treatment List</h1>
        <p class="loading text-danger">Ladowanie zabiegów...</p>
    `;

  const ul = document.createElement("ul");

  // Pobieramy zabiegi (surowe dane)
  fetch("http://localhost:3000/treatments")
    .then((response) => response.json())
    .then((treatments) => {
      // Wytwarzamy elementy listy
      const lis = treatments.map((treatment) => {
        const li = document.createElement("li");

        li.innerHTML = `
                    <h4>${treatment.name}</h4>
                    <p>
                        <strong>${treatment.price.toFixed(2)} PLN</strong>
                    </p>
                    <footer></footer>
                `;
        const readMoreButton = NavButton("Read more", () =>
          TreatmentDetails(treatment.id)
        );
        const addToCartButton = AddToCartButton(() =>
          cartManager.add(treatment)
        );
        li.lastElementChild.append(readMoreButton, addToCartButton);
        return li;
      });

      // ul.append(lis[0]. list[1], ...);
      ul.append(...lis);
      section.append(ul);
      section.querySelector(".loading").remove();
    });

  return section;
}
