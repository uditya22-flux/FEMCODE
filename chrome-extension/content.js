
document.addEventListener("DOMContentLoaded", () => {

  const foodData = {
    pizza: {
      calories: 285,
      better: [
        { name: "Protein Bar", calories: 180 },
        { name: "Granola", calories: 150 }
      ]
    },
    burger: {
      calories: 295,
      better: [
        { name: "Fruit Bar", calories: 120 },
        { name: "Makhana", calories: 100 }
      ]
    },
    lays: {
      calories: 160,
      better: [
        { name: "Nut Bar", calories: 130 },
        { name: "Makhana", calories: 100 }
      ]
    },
    kurkure: {
      calories: 155,
      better: [
        { name: "Protein Bar", calories: 180 }
      ]
    }
  };

  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    if (card.querySelector(".sustainable-box")) return;

    const title = card.querySelector("h3");
    if (!title) return;

    const foodName = title.innerText.toLowerCase();
    const data = foodData[foodName];
    if (!data) return;

    const box = document.createElement("div");
    box.className = "sustainable-box";
    box.style.border = "2px solid green";
    box.style.padding = "10px";
    box.style.marginTop = "10px";
    box.style.background = "#eaffea";
    box.style.borderRadius = "8px";
    box.style.fontSize = "14px";

    let html = `<strong>🌱 Sustainable Recommendation</strong><br>`;
    html += `Calories: <b>${data.calories} kcal</b><br><br>`;

    data.better.forEach(b => {
      html += `➡️ ${b.name} (${b.calories} kcal)<br>`;
    });

    box.innerHTML = html;
    card.appendChild(box);
  });

});
