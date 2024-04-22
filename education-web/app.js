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

const menuBtn = document.querySelectorAll("nav button");
const menu = document.querySelector(".menu");
menuBtn.forEach(function (item) {
  item.addEventListener("click", function (e) {
    let idName = e.target.parentElement.id;
    if (idName === "open-menu") {
      idName = "close-menu";
    }
    if (idName === "close-menu") {
      idName = "open-menu";
    }
  });
});
