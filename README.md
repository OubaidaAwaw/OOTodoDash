# OOTodoDash
![alt text](https://github.com/OubaidAawaw/OOTodoDash/blob/main/TodoDash.png?raw=true)

## 1. Project Overview
**Name:** OOTodoDash  
**Description:** A professional To-Do List application built with the MERN stack for practicing full-stack development.  
**Purpose:** Designed as a beginner-friendly full-stack project for hands-on learning and development.

## 2. Technologies Used
This project uses a combination of front-end, back-end, and supportive tools:

**Frontend:**
- React.js
- React-Quill (Rich text editor for professional To-Do creation)
- React-Loading-Skeleton (For a smooth loading experience)
- React-Router-Dom (Routing)
- React-Error-Boundary (Error handling)

**Backend:**
- Node.js
- Express.js
- MongoDB (Database)

**State Management:**
- Redux Toolkit

**Additional Tools:**
- IDB (IndexedDB for saving drafts when the page is closed, reloaded, or navigated)
- Axios (HTTP client for API requests)
- Dotenv (Environment variables)
- Helmet & Compression (Security and performance optimizations)

**Development Tools:**
- Nodemon (Auto-reloading server)
- Concurrently (Run frontend and backend simultaneously)
- Cross-Env (Set environment variables)

## 3. Installation Instructions
Follow these steps to set up the project locally:
1. Install [Node.js](https://nodejs.org/) (Ensure it is installed correctly).
2. Clone the repository.
3. Run the following commands in the root folder:
   ```bash
   npm install
   npm run start
   ```
4. Dependencies required for development:
   - **Nodemon**
   - **Concurrently**
   - **Cross-Env**

5. scripts
   - "start": "concurrently \"npm run server\" \"npm run client\"", // run both front and backend
   - "server": "nodemon server/server.js", // run server
   - "client": "cross-env PORT=3000 react-scripts start ", // run react project
   - "build": "react-scripts build" 	// build react

## 4. Features and API
The app supports CRUD operations and additional features:

### Features:
- **Create a To-Do:** Rich text input for detailed to-do creation.
- **Save Drafts:** Drafts are stored locally using IndexedDB (IDB) to prevent data loss.
- **Manage To-Dos:** Delete, update, search, and filter by status (To-Do, Saved, Checked, Bin).
- **Real-time Search:** Efficient search functionality based on to-do status and text.
- **Print:** View todo and print in white paper


### API Endpoints:
| Method | Endpoint                 | Description                          |
|--------|--------------------------|--------------------------------------|
| POST   | `/`                      | Create a new To-Do                   |
| DELETE | `/:id`                   | Delete a To-Do by ID                 |
| PUT    | `/:id`                   | Update a To-Do by ID                 |
| POST   | `/search`                | Search To-Dos (real-time with status)|
| POST   | `/status`                | Retrieve To-Dos by status            |

## 5. Folder Structure
The project is organized as follows:
```
OOTodoDash/
│
├── server/               # Backend (Node.js, Express, MongoDB)
│
└── src/                  # Frontend (React.js)

```

## 6. Usage
OOTodoDash is a professional To-Do List manager. Some key functionalities include:
- Creating detailed and formatted To-Dos.
- Saving drafts automatically.
- Managing and filtering tasks (Saved, Checked, Bin).
- Providing a clean and responsive UI-UX

## 7. License
This project is licensed under the [MIT License](LICENSE).

---
Let me know if you need further clarification or additional edits!

