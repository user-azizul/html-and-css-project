const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-icon");
const menuIcons = document.querySelector(".menu-icon .fa");
menuIcon.addEventListener("click", function (e) {
  console.log("menu");
  menu.classList.toggle("mobile");
  const icon = e.target.parentElement;
  if (icon.classList.contains("bar")) {
    console.log("bar");
    icon.classList.remove("bar");
    icon.classList.add("times");
  } else if (icon.classList.contains("times")) {
    icon.classList.remove("times");
    icon.classList.add("bar");
    console.log("times");
  } else {
    return;
  }
});
