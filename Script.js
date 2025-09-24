// --- Contact Form Validation ---
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    e.preventDefault();
  } else if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  }
});

// --- To-Do List Functionality ---
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";

}
