window.addEventListener("scroll", function () {
  this.document
    .querySelector("nav")
    .classList.toggle("scroll-nav", window.scrollY > 0);
});
