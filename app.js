let addBtn = document.querySelector(".input-container button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let themeToggle = document.getElementById("themeToggle");

// Add Task
addBtn.addEventListener("click", function () {
  let taskText = inp.value.trim();
  if (taskText === "") return;

  // Create list item
  let item = document.createElement("li");

  // Task Text
  let span = document.createElement("span");
  span.innerText = taskText;
  item.appendChild(span);

  // Delete Button
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");
  item.appendChild(delBtn);

  // Add to list
  ul.appendChild(item);
  inp.value = "";
});

// Handle Delete and Complete
ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
    console.log("Task deleted");
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.classList.toggle("completed");
    console.log("Task marked complete/incomplete");
  }
});

// Theme Toggle
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀" : "🌙";
});
