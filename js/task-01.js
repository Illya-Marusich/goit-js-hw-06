const categories = document.querySelector("#categories");
const list = categories.querySelectorAll(".item");
console.log(`Number of categories ${list.lenght}`);

list.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li").lenght;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});
console.log(list);
