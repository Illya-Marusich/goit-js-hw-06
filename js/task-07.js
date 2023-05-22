const inputChange = document.querySelector("#font-size-control");
const abr = document.querySelector("#text");

abr.style.fontSize = inputChange.value + "px";
inputChange.addEventListener("input", () => {
  abr.style.fontSize = inputChange.value + "px";
});
