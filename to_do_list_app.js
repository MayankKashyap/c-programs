<!DOCTYPE html>
<html>
<head>
  <title>To-Do List</title>
</head>
<body>
  <h2>To-Do List</h2>
  <input id="taskInput" placeholder="Add a task..." />
  <button onclick="addTask()">Add</button>
  <ul id="taskList"></ul>

  <script>
    function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskList = document.getElementById("taskList");
      const task = taskInput.value.trim();

      if (task === "") return;

      const li = document.createElement("li");
      li.textContent = task;
      li.onclick = () => li.remove(); // Click to remove
      taskList.appendChild(li);
      taskInput.value = "";
    }
  </script>
</body>
</html>
