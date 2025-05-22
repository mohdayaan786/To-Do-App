# 📝 Full Stack To-Do App

A beautiful and minimal full-stack **To-Do List** application built with:

- ⚛️ React + Vite (Frontend)
- 🌐 Express.js (Backend)
- 🍃 MongoDB Atlas (Database)
- 🚀 Deployed using Vercel (Frontend) & Render (Backend)

---

## 🔗 Live Demo

- **Frontend**: [https://to-do-app-pk3z.vercel.app/](https://to-do-app-pk3z.vercel.app/)
- **Backend API**: [https://to-do-app-si1y.onrender.com/api/v1/tasks](https://to-do-app-si1y.onrender.com/tasks)

---

## 🛠 Tech Stack

### Frontend
- **React.js** with **Vite**
- **Axios** for HTTP requests
- Custom CSS for styling

### Backend
- **Express.js**
- **Mongoose** for MongoDB connection
- **MongoDB Atlas** for cloud storage

---

## 🚀 Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
````

### 2. Setup Backend

```bash
cd Backend
npm install
```

Create a `.env` file in `Backend/`:

```env
MONGO_URI=your-mongodb-atlas-uri
PORT=5000
```

Start backend:

```bash
npm start
```

### 3. Setup Frontend

```bash
cd ../Frontend
npm install
```

Create a `.env` file in `Frontend/`:

```env
VITE_BACKEND_URL=http://localhost:5000
```

Start frontend:

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## ✨ Features

* ✅ Add and delete tasks
* 💾 Data persists using MongoDB Atlas
* 📱 Responsive UI
* 🔗 RESTful API
* 📂 Organized code structure (Frontend / Backend)

---

## 🧾 Folder Structure

```
todo-app/
├── Frontend/        # React + Vite app
│   └── src/
│       └── App.jsx
│       └── ...
├── Backend/         # Express server
│   └── controllers/
│   └── routes/
│   └── models/
│   └── server.js
├── README.md
└── .gitignore
```

---

## ⚙️ API Endpoints

| Method | Route        | Description    |
| ------ | ------------ | -------------- |
| GET    | `/tasks`     | Get all tasks  |
| POST   | `/tasks`     | Add a new task |
| DELETE | `/tasks/:id` | Delete a task  |

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
