document.addEventListener("DOMContentLoaded", () => {

  const foodData = {
    pizza: {
      calories: 285,
      better: [
        { name: "Protein Bar", calories: 180, link: "#protein-bar" },
        { name: "Granola", calories: 150, link: "#granola" }
      ]
    },
    burger: {
      calories: 295,
      better: [
        { name: "Fruit Bar", calories: 120, link: "#fruit-bar" },
        { name: "Makhana", calories: 100, link: "#makhana" }
      ]
    },
    lays: {
      calories: 160,
      better: [
        { name: "Nut Bar", calories: 130, link: "#nut-bar" },
        { name: "Makhana", calories: 100, link: "#makhana" }
      ]
    },
    kurkura: {
      calories: 155,
      better: [
        { name: "Protein Bar", calories: 180, link: "#protein-bar" }
      ]
    }
  };

  const items = document.querySelectorAll(".food-item");

  items.forEach(item => {
    // prevent duplicate boxes
    if (item.querySelector(".sustainable-box")) return;

    const foodName = item.dataset.food;
    if (!foodData[foodName]) return;

    const data = foodData[foodName];

    const box = document.createElement("div");
    box.className = "sustainable-box";
    box.style.border = "2px solid green";
    box.style.padding = "10px";
    box.style.marginTop = "10px";
    box.style.background = "#eaffea";
    box.style.borderRadius = "8px";

    let html = `<strong>🌱 Sustainable Recommendation</strong><br>`;
    html += `Calories: <b>${data.calories} kcal</b><br><br>`;

    data.better.forEach(b => {
      html += `➡️ <a href="${b.link}">${b.name}</a> (${b.calories} kcal)<br>`;
    });

    box.innerHTML = html;
    item.appendChild(box);
  });

});

