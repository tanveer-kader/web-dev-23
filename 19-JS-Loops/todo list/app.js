const todo = [];

let command = prompt("Enter command");

while (command) {
  if (command === "new") {
    let task = prompt("Enter Task");
    todo.push(task);
    console.log(`${task} added to the list`);
  } else if (command === "delete") {
    let taskNo = parseInt(prompt("Enter task no"));
    if (!Number.isNaN(taskNo) && taskNo < todo.length) {
      const deleted = todo.splice(taskNo, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("Unknown Task");
    }
  } else if (command === "list") {
    console.log("*********");
    for (let i = 0; i < todo.length; ++i) {
      console.log(`${i}: ${todo[i]}`);
    }
    console.log("*********");
  } else if (command === "quit") {
    console.log("OK, YOU QUIT THE APP");
    break;
  } else {
    console.log("enter valid command");
    // command = prompt("Enter valid command");
  }
  command = prompt("Enter command");
}
