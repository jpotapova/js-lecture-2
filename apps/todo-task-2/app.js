function handleRemove() {
  var removeButtons = document.querySelectorAll(".js-delete");
  removeButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      event.target.parentElement.parentElement.remove();

      // TIP - detect if it was the last row that was removed
      // then remove ul
      // and add a <p> tag with no data
    });
  });
}

handleRemove();
handleToggle();
