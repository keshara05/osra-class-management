# 🏛️ Osra Higher Education Institute — Management System

Modern, high-performance institute management portal tailored for **Osra Higher Education Institute (Dehiattakandiya)**.

Built with a decoupled full-stack architecture featuring a **24K Royal Gold & Midnight Navy** executive theme, QR card attendance scanning, automated receipt and report card generation, and comprehensive student & teacher fee accounting.

---

## 🚀 Tech Stack

- **Frontend**: React 19, Material-UI (MUI v7), Framer Motion, HTML5 QR Scanner, jsPDF, i18next (Bilingual SI/EN).
- **Backend**: Node.js & Express 5 (REST API), Mongoose & MongoDB Atlas, JWT Authentication, Rate Limiting & Helmet Security.
- **Hardware Integrations**: 2D QR Barcode Scanner (Keyboard Wedge & Webcam), ESC/POS Thermal Printers.

---

## 🛠️ Project Structure

```
Osra/
├── frontend/          # React Single Page Application (CRA)
├── backend/           # Express REST API & Mongoose models
├── IMPLEMENTATION_PLAN.md
└── README.md
```

---

## ⚙️ Getting Started

### 1. Prerequisites
- Node.js (v18+)
- MongoDB Atlas cluster or local MongoDB instance

### 2. Backend Setup
```bash
cd backend
npm install
# Configure your .env file using .env.example
node seedAdmin.js   # Seed initial administrator account
node server.js       # Runs API server on http://localhost:5000
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start           # Launches portal on http://localhost:3000
```

---

## 🔑 Default Credentials
- **Username**: `admin`
- **Password**: `password123` *(Change on first login)*

---

© 2026 Osra Higher Education Institute, Dehiattakandiya. All rights reserved.
