const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const ourGallery = document.querySelector("ul.gallery");
const markup = images
  .map(
    ({ url, alt }) =>
      `<li><img width="160" height="120" src="${url}" alt="${alt}"></li>`
  )
  .join("");
// console.log("markup", markup);
ourGallery.insertAdjacentHTML("beforeend", markup);
ourGallery.style.display = "flex";
ourGallery.style.flexDirection = "column";
