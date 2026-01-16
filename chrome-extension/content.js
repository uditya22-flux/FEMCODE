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

function removeAllBoxes() {
  document.querySelectorAll(".sustainable-box").forEach(box => box.remove());
}

function applySustainability() {
  chrome.storage.sync.get("enabled", (data) => {
    // 🔴 IF DISABLED → REMOVE EVERYTHING
    if (data.enabled === false) {
      removeAllBoxes();
      return;
    }

    // ✅ ENABLED → ADD BOXES
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
      if (card.querySelector(".sustainable-box")) return;

      const title = card.querySelector("h3");
      if (!title) return;

      const foodName = title.innerText.toLowerCase();





