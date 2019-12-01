document.querySelectorAll(".js-nav").forEach(function(navItem) {
  navItem.addEventListener("click", function(event) {
    event.preventDefault();
    const id = event.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
