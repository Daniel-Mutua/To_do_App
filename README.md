# 🌟 TaskMaster Legit

TaskMaster Legit is a **full-stack To-Do application** built with **Node.js, Express, MongoDB, and Vanilla JavaScript**. It allows users to manage tasks, separate pending and completed tasks, and track statistics in a modern dark & gold-themed interface.

---

## Features

* Add new tasks
* Delete tasks
* Mark tasks as completed or pending
* View tasks in **Pending** and **Completed** sections
* Dashboard showing **Total**, **Pending**, and **Completed** counts
* Clear all completed tasks
* Full-screen, responsive, dark + gold theme
* Real-time task statistics
* Simple and intuitive UI with hover effects

---

## Technologies Used

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with Mongoose)
* **Other:** Fetch API, RESTful API endpoints, CORS

---

## Project Structure

```
To_do_App/
│
├─ Backend/
│   ├─ server.js          # Express server
│   ├─ models/
│   │   └─ Task.js        # Mongoose model for tasks
│   └─ package.json       # Node dependencies
│
├─ Frontend/
│   ├─ index.html         # Main frontend page
│   ├─ scripts.js         # JS logic for frontend (optional)
│   └─ styles.css         # CSS styling (optional)
```

---

## Getting Started

### Prerequisites

* Node.js (v18+ recommended)
* MongoDB installed and running locally or using a cloud instance
* npm (Node package manager)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the backend folder and install dependencies:

```bash
cd To_do_App/Backend
npm install
```

3. Start MongoDB server (local installation):

```bash
mongod
```

4. Start the backend server:

```bash
node server.js
```

Server will run on `http://localhost:5000`.

5. Open the frontend:

Open `Frontend/index.html` in your browser or use a live server extension in VSCode.

---

## API Endpoints

| Method | Endpoint       | Description           |
| ------ | -------------- | --------------------- |
| GET    | /api/tasks     | Get all tasks         |
| POST   | /api/tasks     | Add a new task        |
| PUT    | /api/tasks/:id | Toggle task completed |
| DELETE | /api/tasks/:id | Delete a task         |

---

## Usage

1. Add a task in the input box and click **Add**.
2. Click a task to toggle between **Pending** and **Completed**.
3. Delete tasks using the **Delete** button.
4. Click **View Tasks** to refresh the lists.
5. Clear all completed tasks with **Clear Completed Tasks**.

---

## Troubleshooting

* If tasks don’t show up, ensure MongoDB is running.
* Check browser console for errors if the frontend does not fetch tasks.
* Ensure CORS is enabled in server.js.

---

## License

This project is open-source and free to use.

---

## Author

Daniel Mutua
