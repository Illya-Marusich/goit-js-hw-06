const inputChange = document.querySelector("#font-size-control");
const abr = document.querySelector("#text");

inputChange.addEventListener("change", (event) => {
  abr.style.fontSize = `${event.target.value}px`;
});
