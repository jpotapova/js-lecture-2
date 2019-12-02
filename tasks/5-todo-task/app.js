// TASK: perform required actions on toggle button click
// so that empty circle or green checkmark is displayed

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
  var toggleButtons = document.querySelectorAll(".js-toggle");
  toggleButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // TIP: manipulate classnames here
    });
  });
}

handleRemove();
handleToggle();
