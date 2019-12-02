const tasks = [
  {
    name: "Buy groceries",
    done: false
  },
  {
    name: "Pay bills",
    done: false
  },
  {
    name: "Call insurance",
    done: true
  }
];

const filteredTasks = tasks.filter(task => !task.done);
