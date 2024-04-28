import { cartManager } from "../cart/cart-manager";
import { RemoveFromCartButton } from "../cart/RemoveFromCartButton";

export function Cart() {
  const section = document.createElement("section");

  section.innerHTML = `
        <h1 class="header">Cart</h1>
        <p>Przegladaj zawartosc swojego koszyka.</p>
        <table class="table">
            <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
            </tr>
        </table>
    `;

  // Pojedynczy obiekt z tablicy:
  // { name: 'Pokój binarny', quantity: 2, price: 170 }
  const tableRows = cartManager.getAll().map((item) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${(item.quantity * item.price).toFixed(2)}</td>
            <td></td>
        `;

    const removeFromCartButton = RemoveFromCartButton(() => {
      cartManager.remove(item);
    });

    tr.lastElementChild.append(removeFromCartButton);

    return tr;
  });

  // W stopce tabeli wyswietlamy calkowita cene towarow w koszyku
  const tableFooter = document.createElement("tr");

  tableFooter.innerHTML = `
        <td></td>
        <td></td>
        <td>
            <strong>${cartManager.getTotalPrice()} PLN</strong>
        </td>
        <td></td>
    `;

  section.querySelector("table").append(...tableRows, tableFooter);

  return section;
}
