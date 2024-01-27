const url = 'https://jsonplaceholder.typicode.com/photos';
const btn_previous = document.getElementById('btn_previous');
const btn_next = document.getElementById('btn_next');
const cardContainer = document.getElementById('cardContainer'); // Assuming you have a container for your cards
let currentPage = 1;

async function fetchData(page) {
  try {
    let limit = 10;
    let start = (page - 1) * limit;
    let end = start + limit;

    const response = await fetch(`${url}?_start=${start}&_end=${end}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error so that the caller can handle it
  }
}

function createCard(item) {
  const { id, title, url, thumbnailUrl } = item;

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const imgElement = document.createElement('img');
  imgElement.src = thumbnailUrl;
  imgElement.alt = title;

  const cardContentDiv = document.createElement('div');
  cardContentDiv.classList.add('card-content');

  const titleElement = document.createElement('h2');
  titleElement.textContent = title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = 'This is a simple card example.';

  const readMoreLink = document.createElement('a');
  readMoreLink.href = url;
  readMoreLink.textContent = 'Read more';

  cardDiv.appendChild(imgElement);
  cardDiv.appendChild(cardContentDiv);
  cardContentDiv.appendChild(titleElement);
  cardContentDiv.appendChild(descriptionElement);
  cardContentDiv.appendChild(readMoreLink);

  cardContainer.appendChild(cardDiv);
}

async function updateCards(page) {
  try {
    const data = await fetchData(page);
    cardContainer.innerHTML = ''; // Clear existing cards

    data.map((item) => {
      createCard(item);
    });
  } catch (err) {
    console.error(err);
    // Handle error as needed
  }
}

btn_previous.addEventListener('click', async () => {
  if (currentPage > 1) {
    currentPage--;
    await updateCards(currentPage);
  }
});

btn_next.addEventListener('click', async () => {
  currentPage++;
  await updateCards(currentPage);
});

// Initial data fetch and rendering
updateCards(currentPage);
