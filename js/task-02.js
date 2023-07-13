const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ourList = document.querySelector("ul#ingredients");
for (let ingredient of ingredients) {
  let igredName = document.createElement("li");
  igredName.textContent = ingredient;
  igredName.classList.add("item");
  ourList.append(igredName);
}
