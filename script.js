const API_URL = 'https://api.freeapi.app/api/v1/public/randomproducts';

const productsGrid = document.getElementById('productsGrid');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const infoText = document.getElementById('infoText');
const searchInput = document.getElementById('searchInput');
const pagination = document.getElementById('pagination');

let currentPage = 1;
let totalPages = 1;
let limit = 10;

// FETCH PRODUCTS
async function fetchProducts(page = 1) {
  try {
    loading.style.display = "block";
    error.innerText = "";
    productsGrid.innerHTML = "";

    const res = await fetch(API_URL);
    const data = await res.json();

    const products = data?.data?.data || [];
    totalPages = data?.data?.totalPages || 1;

    currentPage = page;

    loading.style.display = "none";

    renderProducts(products);
    renderPagination();

    infoText.innerText = `Page ${currentPage} / ${totalPages} • ${products.length} items`;
  } catch (err) {
    loading.style.display = "none";
    error.innerText = "Failed to load products 😢";
    console.log(err);
  }
}

// RENDER PRODUCTS
function renderProducts(products) {
  productsGrid.innerHTML = products.map(p => `
    <div class="window-card">
      <div class="window-header">
        <div class="dots">
          <div class="dot red"></div>
          <div class="dot yellow"></div>
          <div class="dot green"></div>
        </div>
        <div class="title">${p.title}</div>
      </div>

      <div class="window-body">
        <img class="avatar" src="${p.thumbnail}" alt="${p.title}" />

        <div class="info">
          <h3>${p.title}</h3>
          <p class="desc">${p.description || "No description"}</p>

          <div class="tags">
            <span>${p.category || "item"}</span>
            <span>⭐ ${p.rating || "4.0"}</span>
          </div>

          <div class="price">₹ ${p.price}</div>

          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join("");
}

// PAGINATION UI
function renderPagination() {
  let html = "";

  // PREV BUTTON
  html += `
    <button class="page-btn" ${currentPage === 1 ? "disabled" : ""} onclick="changePage(${currentPage - 1})">
      ⬅ Prev
    </button>
  `;

  // PAGE NUMBERS
  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      html += `<button class="page-btn active">${i}</button>`;
    } else {
      html += `<button class="page-btn" onclick="changePage(${i})">${i}</button>`;
    }
  }

  // NEXT BUTTON
  html += `
    <button class="page-btn" ${currentPage === totalPages ? "disabled" : ""} onclick="changePage(${currentPage + 1})">
      Next ➡
    </button>
  `;

  pagination.innerHTML = html;
}

// CHANGE PAGE
function changePage(page) {
  if (page < 1 || page > totalPages) return;
  fetchProducts(page);
}

// SEARCH (basic filter frontend)
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".window-card");

  cards.forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
});

// INIT
fetchProducts(1);