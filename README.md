# 🧩 Mini Excalidraw Whiteboard

A simplified version of [Excalidraw](https://excalidraw.com/) — a collaborative whiteboard tool built using **React**, **TypeScript**, **TailwindCSS**, and **Node.js (Express)**.

This project was created as part of the **Full Stack Engineer Take-Home Assignment** for **The AppLaunchpad**.

---

## 🚀 Live Demo

🔗 [Hosted Link (Frontend)](https://excalidraw-smoky-beta.vercel.app/E5F4qfcK_hJWL-NP2vUon)  

---

## 📁 Project Structure

```bash
assignment/
│
├── client/                     # React + TypeScript frontend
│   ├── src/
│   │   ├── components/         # Toolbar, Canvas, Shape tools
│   │   ├── hooks/              # Custom React hooks
│   │   ├── pages/              # Multi-page whiteboard views
│   │   ├── store/              # Zustand store for state management
│   │   ├── types/              # Shared TypeScript interfaces
│   │   └── App.tsx
│   ├── public/
│   ├── package.json
│   └── tsconfig.json
│
├── server/                     # Node.js + Express backend
│   ├── src/
│   │   ├── routes/
│   │   │   ├── shapes.ts
│   │   │   └── pages.ts
│   │   ├── models/
│   │   │   └── shape.model.ts  # (if using MongoDB)
│   │   ├── controllers/
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
│
└── README.md




---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React + TypeScript + TailwindCSS + HTML Canvas |
| Backend | Node.js + Express |
| State Management | Zustand |
| Optional DB | MongoDB or In-memory storage |
| Deployment | Vercel / Render / Netlify |

---

## 🧩 Features by Stage

### **Stage 1 – Core Whiteboard Functionality**
- Interactive canvas built using `<canvas>`.
- Tools:
  - ✏️ Pencil (freehand drawing)
  - ➖ Line
  - ⭕ Circle
  - ➤ Arrow
- Shapes are:
  - Clickable
  - Draggable
  - Selectable
- Data maintained in React state.

---

### **Stage 2 – Save and Update Shapes**
- Each shape is stored as a JSON object:
  ```json
  {
    "id": "rect_1",
    "type": "rectangle",
    "x": 150,
    "y": 200,
    "width": 100,
    "height": 50,
    "rotation": 0
  }
Shapes persist using localStorage.

Backend APIs for CRUD operations.

Shapes can be resized and rotated.

Stage 3 – Text Tools
🅰️ Add Text tool to insert editable text.

Text attributes:

Font family

Font size

Color

Text is draggable and updatable.

Extended backend to store text elements.

Stage 4 – Multi-Page Whiteboard
➕ Create multiple pages.

✏️ Rename pages.

🔁 Switch between pages.

Each page has its own shape list.

In-memory data reset on refresh.

⚙️ Setup Instructions
1️⃣ Clone the Project

git clone <project-folder>
cd assignment
2️⃣ Install Dependencies
Frontend

cd client
npm install
npm run dev
Backend

cd ../server
npm install
npm run dev
🔌 API Documentation
Base URL:

http://localhost:5000/api
Shape APIs
Method	Endpoint	Description
GET	/shapes	Get all shapes
POST	/shapes	Create a new shape
PUT	/shapes/:id	Update an existing shape
DELETE	/shapes/:id	Delete a shape

POST /api/shapes
Request Body:

json

  "id": "circle_1",
  "type": "circle",
  "x": 200,
  "y": 300,
  "width": 80,
  "height": 80,
  "rotation": 0,
  "color": "#000000",
  "pageId": "page_1"
}
Response:
json
{
  "success": true,
  "message": "Shape added successfully"
}
Page APIs
Method	Endpoint	Description
GET	/pages	Get all pages
POST	/pages	Create a new page
GET	/pages/:id/shapes	Get shapes of a specific page
DELETE	/pages/:id	Delete a page

POST /api/pages
Request Body:

json
{
  "name": "Whiteboard Page 1"
}
Response:
json
{
  "id": "page_1",
  "name": "Whiteboard Page 1"
}
🧠 Data Model
Shape Interface
ts

interface Shape {
  id: string;
  type: 'rectangle' | 'circle' | 'line' | 'arrow' | 'text';
  x: number;
  y: number;
  width?: number;
  height?: number;
  rotation?: number;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  content?: string;
  pageId: string;
}
Page Interface
ts

interface Page {
  id: string;
  name: string;
  shapes: Shape[];
}
🧪 Example Flow
Select a tool (Pencil, Line, Circle, Arrow, or Text).

Draw or add the shape on the canvas.

Click and drag shapes to move them.

Resize or rotate shapes.

Shapes are stored in localStorage or backend.

Create or switch between multiple whiteboard pages.
