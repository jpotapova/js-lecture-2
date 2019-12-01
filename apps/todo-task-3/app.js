// TASK: find all toggle buttons and attach a click handler
// (no need to perform any specific action on click yet,
// you can just console.log for testing purposes)

function addInfo() {
  var p = document.createElement("p");
  p.innerText = "No tasks";
  document.getElementById("todos-content").append(p);
}

function handleRemove() {
  var removeButtons = document.querySelectorAll(".js-delete");
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

function handleToggle() {
  // attach click handle to each of the toggle buttons here
}

handleRemove();
handleToggle();
