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

const listEl = document.querySelector(".gallery");
const liEl = document.querySelectorAll(".gallery li");
const imgEl = document.createElement("img");
const imgColEl = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-item"><img src="${url}" alt="${alt}"></img></li>`
  )
  .join(" ");
listEl.insertAdjacentHTML("beforeend", imgColEl);

const pictures = document.querySelectorAll("img");

listEl.style.listStyle = "none";
listEl.style.gap = "20px";

liEl.style.width = "width: calc((100% - 20px * 2) / 3)";

pictures.style.display = "block";
pictures.style.maxWidth = "100%";
pictures.style.height = "auto";
