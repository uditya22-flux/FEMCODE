// MOCK AI LOGIC (NO BILLING)
function getSustainableAlternative(productName) {
  const name = productName.toLowerCase();

  if (name.includes("pizza") || name.includes("burger")) {
    return ["Protein bar", "Homemade whole-grain meal"];
  }

  if (name.includes("chips") || name.includes("kurkure") || name.includes("lays")) {
    return ["Roasted makhana", "Mixed nuts"];
  }

  if (name.includes("t-shirt") || name.includes("shirt")) {
    return ["Ethical cotton clothing", "Thrift alternatives"];
  }

  return ["Choose a minimally processed, sustainable option"];
}

// REMOVE OLD BOXES
function clearBoxes() {
  document.querySelectorAll(".sustainable-box").forEach(b => b.remove());
}

// MAIN LOGIC
function applySustainability() {
  chrome.storage.sync.get("enabled", data => {
    if (data.enabled === false) {
      clearBoxes();
      return;
    }

    const products = document.querySelectorAll("div._1AtVbE");

    products.forEach(card => {
      if (card.querySelector(".sustainable-box")) return;

      const title = card.querySelector("div._4rR01T");
      if (!title) return;

      const suggestions = getSustainableAlternative(title.innerText);

      const box = document.createElement("div");
      box.className = "sustainable-box";
      box.style.border = "2px solid green";
      box.style.padding = "8px";
      box.style.marginTop = "8px";
      box.style.background = "#eaffea";
      box.style.fontSize = "13px";
      box.style.borderRadius = "6px";

      box.innerHTML = `
        <strong>🌱 Sustainable Alternative</strong><br>
        ${suggestions.map(s => "• " + s).join("<br>")}
      `;

      card.appendChild(box);
    });
  });
}

// RUN CONTINUOUSLY (Flipkart loads dynamically)
setInterval(applySustainability, 1500);


// Watch dynamically loaded products
setInterval(applySustainability, 1000);






