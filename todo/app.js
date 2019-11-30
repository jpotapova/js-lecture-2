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

function setCompleteButtonClass(button, done) {
  button.className = getCompleteButtonClass(done);
  const icon = button.querySelector("i");
  icon.className = getCompleteIconClass(done);
}

function createCompleteButton() {
  const completeButton = document.createElement("button");

  const icon = document.createElement("i");
  completeButton.append(icon);

  return completeButton;
}

function displayTask(ul, task) {
  const li = createLi(task.title);
  li.id = getTaskIdAttr(task.id);
  ul.append(li);

  const removeButton = createRemoveButton();
  li.append(removeButton);

  const completeButton = createCompleteButton();
  setCompleteButtonClass(completeButton, task.done);
  li.prepend(completeButton);
}

function addRemoveListener(tasks, id) {
  const task = document.getElementById(getTaskIdAttr(id));
  const button = task.querySelector(`.icon-button--delete`);
  button.addEventListener("click", function() {
    tasks = removeTask(tasks);
    task.remove();
  });
}

function addCompleteListener(tasks, id) {
  const taskNode = document.getElementById(getTaskIdAttr(id));
  const button = taskNode.querySelector(`.icon-button--complete`);
  button.addEventListener("click", function() {
    tasks = toggleTask(tasks, id);
    var task = getTask(tasks, id);
    setCompleteButtonClass(button, task.done);
  });
}

/* --------------------------------------- */

const container = document.getElementById("todos-content");
container.innerHTML = "";

const ul = document.createElement("ul");
ul.className = "list-group";
container.append(ul);

tasks.forEach(function(task) {
  displayTask(ul, task);
  addRemoveListener(tasks, task.id);
  addCompleteListener(tasks, task.id);
});

/* --------------------------------------- */
