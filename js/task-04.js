function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const ourDivs = document.querySelector("div#boxes");
function createBoxes(amount) {
  for (let i=1; i<=amount; i++) {
    let newDiv = document.createElement("div");
    let wd = 20 + i*10;
    let h = 20 + i*10;
    newDiv.style.width=`${wd}px`;
    newDiv.style.height=`${h}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    ourDivs.append(newDiv);
  }
}
function destroyBoxes() {
  let divs = ourDivs.querySelectorAll("div");
  divs.forEach( dv => dv.remove());
  // ourDivs.innerHTML=``;
 
}
const crBtn = document.querySelector('button[data-create]');
const desBtn = document.querySelector('button[data-destroy]');

crBtn.addEventListener("click", () => {
  let am = document.querySelector('input').value;
  createBoxes(am);
})

desBtn.addEventListener("click", destroyBoxes);
