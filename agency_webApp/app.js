let prevScrollPos = window.pageYOffset;
const header = document.querySelector("header");
const navbar = document.getElementById("navbar");
const whitleLogo = document.querySelector("navbar");
const DarkLogo = document.querySelector("navbar");

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos == 0) {
    navbar.classList.remove("fixed-nav");
    navbar.classList.add("tranparent");
  } else if (prevScrollPos > currentScrollPos) {
    console.log(currentScrollPos);
    navbar.classList.add("fixed-nav");
    navbar.classList.remove("tranparent");
    navbar.style.top = `0px`;
  } else {
    navbar.style.top = `-${header.offsetHeight}px`;
  }
  prevScrollPos = currentScrollPos;
};
