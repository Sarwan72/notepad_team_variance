# Notes App

A simple full-stack Notes Application built using the MERN stack.

## Features

* Create a new note
* View all notes
* Display title and first 60 characters of content
* Click a note to view full content
* Edit existing notes
* Delete notes
* Loading indicator while fetching data
* Error handling for API requests

## Tech Stack

### Frontend

* React
* Vite
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

---

## Project Structure

```text
frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
│
└── package.json

backend/
│
├── src/
│   ├── controllers/
│   ├── db/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── package.json
```

---

## Backend Setup

1. Navigate to the backend directory

```bash
cd backend
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

4. Start the backend server

```bash
npm start
```

or

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

1. Navigate to the client directory

```bash
cd frontend
```

2. Install dependencies

```bash
npm install
```

3. Start the frontend application

```bash
npm start
```

or

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Endpoints

### Create Note

```http
POST /api/notes
```

### Get All Notes

```http
GET /api/notes
```

### Get Single Note

```http
GET /api/notes/:id
```

### Update Note

```http
PUT /api/notes/:id
```

### Delete Note

```http
DELETE /api/notes/:id
```

---

## Assumptions and Decisions

* MongoDB Atlas is used as the database.
* Notes are sorted by newest first using `createdAt`.
* Notes display only the first 60 characters initially.
* Clicking a note reveals the full content.
* React functional components and hooks are used.
* Axios is used for API communication.
* Tailwind CSS is used for styling.
* Authentication was not implemented because it was not required in the assignment.

---

## Author

Sarwan Kumar

B.Tech Computer Science Engineering

BIET Jhansi
