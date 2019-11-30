function getCompleteButtonClass(done) {
  let className = "mr-3 icon-button icon-button--complete";
  if (done) {
    className = className + " icon-button--done";
  }
  return className;
}

function getTaskIdAttr(id) {
  return "task-" + id;
}

function removeTask(tasks, id) {
  return tasks.filter(function(task) {
    return task.id !== id;
  });
}

function toggleTask(tasks, id) {
  return tasks.map(function(task) {
    if (task.id === id) {
      task.done = !task.done;
    }
    return task;
  });
}

function getTask(tasks, id) {
  const index = tasks.findIndex(function(task) {
    return task.id === id;
  });
  return tasks[index];
}

function getCompleteIconClass(done) {
  return done ? "fas fa-check-circle" : "far fa-circle";
}
