export function TreatmentDetails(treatmentId) {
  const section = document.createElement("section");

  fetch(`http://localhost:3000/treatments/${treatmentId}`)
    .then((response) => response.json())
    .then((treatment) => {
      section.innerHTML = `
   <h2 class="header">${treatment.name}</h2>
   <p>${treatment.price.toFixed(2)} PLN</p>
   <p>${treatment.area} 💆‍♀️ </p>
   <p>${treatment.time} miunutes </p>
   `;
    });

  return section;
}
