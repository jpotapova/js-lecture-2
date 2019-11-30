function createRemoveButton() {
  const removeButton = document.createElement("button");
  removeButton.className = "float-right icon-button icon-button--delete";
  const icon = document.createElement("i");
  icon.className = "fas fa-minus-circle";
  removeButton.append(icon);

  return removeButton;
}

function createLi(title) {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerText = title;

  return li;
}

function getCompleteButtonClass(done) {
  let className = "mr-3 icon-button";
  if (done) {
    className = className + " icon-button--done";
  }
  return className;
}

function createCompleteButton(done) {
  const completeButton = document.createElement("button");
  completeButton.className = getCompleteButtonClass(done);
  const icon = document.createElement("i");
  icon.className = done ? "fas fa-check-circle" : "far fa-circle";
  completeButton.append(icon);

  return completeButton;
}

function displayTask(ul, task) {
  const li = createLi(task.title);
  ul.append(li);

  const removeButton = createRemoveButton();
  const completeButton = createCompleteButton(task.done);
  li.append(removeButton);
  li.prepend(completeButton);
}

/* --------------------------------------- */

const container = document.getElementById("todos-content");
container.innerHTML = "";

const ul = document.createElement("ul");
ul.className = "list-group";
container.append(ul);

tasks.forEach(function(task) {
  displayTask(ul, task);
});
