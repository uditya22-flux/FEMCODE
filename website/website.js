document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("productContainer");
  const categorySelect = document.getElementById("categorySelect");

  const products = {
    food: [
      { name: "Burger", price: "₹99", img: "https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/4:3/w_2666,h_2000,c_limit/basically-burger-1.jpg" },
      { name: "Pizza", price: "₹149", img: "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza-jpg" },
      { name: "Granola", price: "₹120", img: "https://littlespoonfarm.com/wp-content/uploads/2021/07/Granola-in-a-bowl.jpg" },
      { name: "Makhana", price: "₹80", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTPaY1l0drT3a1kdg3YEJUPpjhc4E5AH3NHQ&s" },
      { name: "Fruit Bar", price: "₹60", img: "https://naturo.in/cdn/shop/files/fruit-bars.jpg?v=1739161857" },
      { name: "Nut Bar", price: "₹70", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-PawAn4mWlhBiH1ucmPVWFygUNGvJtD_xtA&s" },
      { name: "Lays", price: "₹20", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1b0obtXixoKS-UMd8ZHSneUvBF7roVIZDSA&s" },
      { name: "Kurkure", price: "₹20", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gcD_BtcmltRrRJXNGpe7w0Cv3y-Q17Jtlg&s" },
      { name: "Protein Bar", price: "₹85", img: "https://www.bbassets.com/media/uploads/p/l/40064910_5-ritebite-max-protein-ultimate-choco-almond-bar.jpg" }
    ],
    clothing: [
      { name: "Men T-Shirt", price: "₹499", img: "https://images.unsplash.com/photo-1586363104862-4b3e16a8fba1" },
      { name: "Women Kurti", price: "₹899", img: "https://images.unsplash.com/photo-1618354691229-6f3a2e1f3f7d" }
    ],
    electronics: [
      { name: "Smartphone", price: "₹14,999", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" }
    ]
  };

  function showProducts(category) {
    productContainer.innerHTML = "";

    if (!products[category]) {
      productContainer.innerHTML = '<p class="placeholder">Select a category to view products</p>';
      return;
    }

    products[category].forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p class="price">${product.price}</p>
        </div>
      `;
      productContainer.appendChild(card);
    });
  }

  categorySelect.addEventListener("change", () => {
    showProducts(categorySelect.value);
  });
});
