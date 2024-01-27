// Elements
const cardView = document.getElementById("card-view");
const listView = document.getElementById("list-view");
const toggleViewButton = document.getElementById("toggle-view");
const prevPageButton = document.getElementById("prev-page");
const nextPageButton = document.getElementById("next-page");
const pageInfo = document.getElementById("page-info");

// Data and Pagination Variables
let items = [];
let start = 0;
const limit = 10;
let currentPage = 1;
let totalPages = 0;

// Fetch Photos from New API
function fetchPhotos() {
  fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((response) => response.json())
    .then((data) => {
      totalPages = Math.ceil(data.length / limit);
      updatePageInfo();
      const paginatedItems = data.slice(start, start + limit);
      renderItems(paginatedItems);
    });
}

// Update Page Info
function updatePageInfo() {
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  prevPageButton.disabled = currentPage === 1;
  nextPageButton.disabled = currentPage === totalPages;
}

// Render Items to the Page
function renderItems(items) {
  cardView.innerHTML = "";
  listView.innerHTML = "";
  items.forEach((item) => {
    const card = createCard(item);
    const listItem = createListItem(item);

    cardView.appendChild(card);
    listView.appendChild(listItem);
  });
}

// Create Card Element
function createCard(item) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<img src="${item.url}" alt=""><p>${item.title}</p>`;
  return card;
}

// Create List Item Element
function createListItem(item) {
  const listItem = document.createElement("div");
  listItem.className = "list-item";
  listItem.innerHTML = `<img src="${item.url}" alt=""><p>${item.title}</p>`;
  return listItem;
}

// Event Listener for Toggle View Button
toggleViewButton.addEventListener("click", () => {
  if (cardView.style.display === "none") {
    cardView.style.display = "flex";
    listView.style.display = "none";
    toggleViewButton.textContent = "List View"; // Change button text to List View
  } else {
    cardView.style.display = "none";
    listView.style.display = "flex";
    toggleViewButton.textContent = "Card View"; // Change button text to Card View
  }
});

prevPageButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    start -= limit;
    fetchPhotos();
  }
});

nextPageButton.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    start += limit;
    fetchPhotos();
  }
});

// Initial Fetch
fetchPhotos();