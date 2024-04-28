export function RoomDetails(room) {
  const section = document.createElement("section");

  section.innerHTML = `
 <h2 class="header">${room.name}</h2>
 <p>${room.price.toFixed(2)} PLN</p>
 <p>${room.beds}x 🚐 </p>
 <p>${room.guests}👨‍👩‍👧‍👦 </p>

 `;
 const img = document.createElement("img");
 img.src = require("../assets/1cat.jpg");
 img.width = "500";
 section.append(img);
 return section
}
