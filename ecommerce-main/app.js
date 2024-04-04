const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.querySelector(".nav");

if (bar) {
  bar.addEventListener("click", function () {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", function () {
    nav.classList.remove("active");
  });
}
