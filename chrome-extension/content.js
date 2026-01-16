const foodData = {
  burger: {
    calories: 295,
    better: [
      { name: "Fruit Bar", calories: 120 },
      { name: "Makhana", calories: 100 }
    ]
  },
  pizza: {
    calories: 285,
    better: [
      { name: "Protein Bar", calories: 180 },
      { name: "Granola", calories: 150 }
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

function removeAllBoxes() {
  document.querySelectorAll(".sustainable-box").forEach(b => b.remove());
}

function applySustainability() {
  chrome.storage.sync.get("enabled", (data) => {

    // 🔴 DISABLED → REMOVE ALL
    if (data.enabled === false) {
      removeAllBoxes();
      return;
    }

    // 🟢 ENABLED → ADD BOXES
    document.querySelectorAll(".product-card").forEach(card => {
      if (card.querySelector(".sustainable-box")) return;

      const title = card.querySelector("h3");
      if (!title) return;

      const key = title.innerText.toLowerCase();
      const info = foodData[key];
      if (!info) return;

      const box = document.createElement("div");
      box.className = "sustainable-box";
      box.style.border = "2px solid green";
      box.style.padding = "10px";
      box.style.marginTop = "10px";
      box.style.background = "#eaffea";
      box.style.borderRadius = "8px";
      box.style.fontSize = "14px";

      let html = `<strong>🌱 Sustainable Recommendation</strong><br>`;
      html += `Calories: <b>${info.calories} kcal</b><br><br>`;
      info.better.forEach(b => {
        html += `➡️ ${b.name} (${b.calories} kcal)<br>`;
      });

      box.innerHTML = html;
      card.appendChild(box);
    });
  });
}

// Watch dynamically loaded products
setInterval(applySustainability, 1000);






