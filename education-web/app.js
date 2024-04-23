window.addEventListener("scroll", function () {
  this.document
    .querySelector("nav")
    .classList.toggle("scroll-nav", window.scrollY > 0);
});

// faqs section
const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

const openBtn = document.getElementById("open-menu");
const closeBtn = document.getElementById("close-menu");
const menu = document.querySelector(".menu");
openBtn.addEventListener("click", function () {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  openBtn.style.display = "none";
});
closeBtn.addEventListener("click", function () {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";
});
