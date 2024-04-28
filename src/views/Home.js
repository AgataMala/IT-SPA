import { cartManager } from "../cart/cart-manager";
import { RemoveFromCartButton } from "../cart/RemoveFromCartButton";

export function Home() {
  const section = document.createElement("section");

  section.innerHTML = `
    <h1 class="header">Home</h1>
    <div class="home">
      <div class="home-text">
      <h3>Witaj w hotelu IT SPA</h3>
      <p>Wszyscy programiści i programistki lubią do nas przyjeżdżać.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. </p>
      </div>
      <div class="home-img">
        <img src="${require("../assets/elephant.jpg")}"/>
        <img src="${require("../assets/3cats.jpg")}"/>
        <img src="${require("../assets/dogmasage.jpg")}"/>
        <img src="${require("../assets/capybaras.jpg")}"/>
      </div>
    </div>
    

    `;

//   function showCart() {
//     miniCart.style.display = "block";
//   }
//   function hideCart() {
//     miniCart.style.display = "none";
//   }

//   window.addEventListener("DOMContentLoaded", (event) => {
//     const cartIcon = document.querySelector(".icon-cart");
//     //cartIcon.addEventListener("click", console.log("test"));
//     if (cartIcon) {
//       cartIcon.addEventListener("mouseover", showCart);
//     }
//     const closeBtn = document.querySelector(".action-btn.close");
//     if (closeBtn) {
//       closeBtn.addEventListener("click", hideCart);
//       cartIcon.addEventListener("mouseover", showCart);
//     }
//   });

//   const miniCart = document.createElement("div");
//   miniCart.style.display = "none";
//   miniCart.classList.add("mini-cart");
//   miniCart.innerHTML = `
//         <h3 class="mini-cart--title">Shopping Cart</h3>
//         <div class="mini-cart--list">
//             <ul></ul>
//         </div>
//         <div class="actions">
//         <button class="action-btn close">Close</button>
//         <button class="action-btn">Check out</button>
//         </div>
    
//   `;

//   const cartItems = cartManager.getAll().map((item) => {
//     const li = document.createElement("li");

//     li.innerHTML = `
//             <p>${item.name}</p>
//             <p>${item.quantity}</p>
//             <span>${(item.quantity * item.price).toFixed(2)}</span>
//         `;

//     const removeFromCartButton = RemoveFromCartButton(() => {
//       cartManager.remove(item);
//     });

//     li.lastElementChild.append(removeFromCartButton);

//     return li;
//   });
//   miniCart.querySelector(".mini-cart--list").append(...cartItems);

  // const img = document.createElement("img");
  // img.src = require("../assets/domek-letniskowy-nad-jeziorem.jpg");
  // img.width = "500";
  // section.append(img);
 // section.append(miniCart);
  return section;
}
