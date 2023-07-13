const itemCount = document.querySelectorAll("li.item");
console.log("Number of categories: ", itemCount.length);
for (let item of itemCount) {
  let itemName = item.querySelector("h2").textContent;
  console.log("Category: ", itemName);
  let elCount = item.querySelectorAll("li");
  console.log("Elements: ", elCount.length);
}
