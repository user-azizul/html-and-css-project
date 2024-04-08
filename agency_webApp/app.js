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
    navbar.classList.add("fixed-nav");
    navbar.classList.remove("tranparent");
    navbar.style.top = `0px`;
  } else {
    navbar.style.top = `-${header.offsetHeight}px`;
  }
  prevScrollPos = currentScrollPos;
};

// portfolio suffle
const portfolio = document.querySelector(".portfolio-btn");
const btns = document.querySelectorAll(".portfolio-btn li");
const boxes = document.querySelectorAll(".portfolio-list .box");

portfolio.addEventListener("click", function (e) {
  let targetId = e.target.dataset.id;
  if (btns) {
    btns.forEach(function (item) {
      item.classList.remove("active");
      e.target.classList.add("active");
    });

    boxes.forEach(function (box) {
      const boxId = box.dataset.id;
      if (targetId === "all" || targetId === boxId) {
        console.log(box);
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  }
});
