const restaurantList = document.querySelector("#restaurant-list");
const restaurantCount = document.querySelector("#restaurant-count");
const pickButton = document.querySelector("#pick-button");
const resultDialog = document.querySelector("#result-dialog");
const selectedRestaurant = document.querySelector("#selected-restaurant");
const selectedCategory = document.querySelector("#selected-category");
const closeButton = document.querySelector("#close-button");
let previousCategory = null;

function renderRestaurants() {
  restaurantCount.textContent = `${restaurants.length}곳`;

  restaurants.forEach((restaurant, index) => {
    const item = document.createElement("li");
    item.className = "restaurant-card";
    item.style.setProperty("--delay", `${index * 90}ms`);

    const name = document.createElement("strong");
    name.textContent = restaurant.name;

    const category = document.createElement("span");
    category.textContent = restaurant.category;

    item.append(name, category);

    restaurantList.appendChild(item);
  });
}

function pickRestaurant() {
  const candidates = restaurants.filter(
    (restaurant) => restaurant.category !== previousCategory,
  );
  const randomIndex = Math.floor(Math.random() * candidates.length);
  const selected = candidates[randomIndex];

  previousCategory = selected.category;
  selectedRestaurant.textContent = selected.name;
  selectedCategory.textContent = selected.category;
  resultDialog.showModal();
}

pickButton.addEventListener("click", pickRestaurant);
closeButton.addEventListener("click", () => resultDialog.close());
resultDialog.addEventListener("click", (event) => {
  if (event.target === resultDialog) {
    resultDialog.close();
  }
});

renderRestaurants();
