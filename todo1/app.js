function addInfo() {
  const p = document.createElement("p");
  p.innerText = "No tasks";
  document.getElementById("todos-content").append(p);
}

function handleRemove() {
  const removeButtons = document.querySelectorAll(".js-delete");
  removeButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      event.target.parentElement.parentElement.remove();

      if (document.querySelector("li") === null) {
        document.querySelector("ul").remove();
        addInfo();
      }
    });
  });
}

handleRemove();
