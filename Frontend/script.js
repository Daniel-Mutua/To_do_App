const apiUrl = "http://localhost:5000/api/tasks";

// 1. Fetch tasks from backend and display them
async function fetchTasks() {
  try {
    const res = await fetch(apiUrl);
    
    // Check if the response is actually JSON
    if (!res.ok) {
        throw new Error(`Server error: ${res.status}. Check if backend is running.`);
    }

    const tasks = await res.json();

    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
      const li = document.createElement("li");
      li.className = task.completed ? "completed" : "";
      
      // Use a span for the text to separate it from the delete button
      const span = document.createElement("span");
      span.textContent = task.title;
      span.style.flex = "1";
      span.onclick = () => toggleTask(task._id);
      
      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.onclick = (e) => {
        e.stopPropagation(); // Prevents triggering the toggleTask on the parent <li>
        deleteTask(task._id);
      };

      li.appendChild(span);
      li.appendChild(delBtn);
      taskList.appendChild(li);
    });
  } catch (err) {
    console.error("Error fetching tasks:", err.message);
    document.getElementById("taskList").innerHTML = `<p style="color:red">Could not connect to server.</p>`;
  }
}

// 2. Add a new task
async function addTask() {
  const input = document.getElementById("taskInput");
  const taskTitle = input.value.trim();
  
  if (!taskTitle) {
    alert("Please enter a task name");
    return;
  }

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: taskTitle })
    });

    if (!res.ok) throw new Error("Failed to add task");

    input.value = ""; // Clear input
    fetchTasks();     // Refresh list
  } catch (err) {
    console.error("Error adding task:", err);
    alert("Error: " + err.message);
  }
}

// 3. Delete a task
async function deleteTask(id) {
  if (!confirm("Are you sure you want to delete this task?")) return;

  try {
    const res = await fetch(`${apiUrl}/${id}`, { 
        method: "DELETE" 
    });

    if (!res.ok) throw new Error("Failed to delete task");
    
    fetchTasks();
  } catch (err) {
    console.error("Error deleting task:", err);
  }
}

// 4. Toggle completed status
async function toggleTask(id) {
  try {
    const res = await fetch(`${apiUrl}/${id}`, { 
        method: "PUT" 
    });

    if (!res.ok) throw new Error("Failed to toggle task");

    fetchTasks();
  } catch (err) {
    console.error("Error toggling task:", err);
  }
}

// Initialize the app
document.addEventListener("DOMContentLoaded", fetchTasks);