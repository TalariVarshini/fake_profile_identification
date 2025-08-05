# 🕵️‍♀️ Fake Profile Identification – Spot Real from Fake with ML and NLP

![Python](https://img.shields.io/badge/Python-3.10-blue)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-green)
![React](https://img.shields.io/badge/Frontend-React-blueviolet)
![ML](https://img.shields.io/badge/ML%20Model-Scikit--Learn-orange)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

> A full-stack Machine Learning-powered app that **detects fake social media profiles** using profile data like bios, followers, likes, and URLs.  
> Built with **FastAPI** for the backend and **React (Vite)** for the frontend.  
> Ideal for resumes, demos, and proof-of-concept security tools.

---

## 👀 Demo Preview

🎬 *Coming Soon!* Demo video and live preview will be linked here after deployment.

---

## 💡 Features

✅ Input any social media profile URL (LinkedIn, Instagram, etc.)  
✅ Uses trained ML model (Logistic Regression + Random Forest)  
✅ Extracts profile features like URL patterns, platform type, etc.  
✅ Detects "Real" or "Fake" and provides reason for prediction  
✅ Clean, responsive UI built with React + Axios  
✅ Works locally on both Windows and Mac  

---

## 🧠 Tech Stack

| Layer       | Technology           |
|-------------|----------------------|
| Frontend    | React (Vite), Axios, CSS |
| Backend     | FastAPI (Python)     |
| ML Model    | Scikit-Learn (`model.pkl`) |
| NLP Tools   | Regex, Custom Feature Extraction |
| Data        | Self-built dataset (URL patterns, bios, etc.) |
| Auth        | Simple Email/Password System |
| Deployment  | Localhost (future: Render, Vercel, etc.) |

---

## ⚙️ Installation & Running the App

```bash
# 1. Clone the Repository
git clone https://github.com/yourusername/fake-profile-identifier.git
cd fake-profile-identifier

# 2. Run the Backend
cd backend
uvicorn main:app --reload --port 8001

# 3. Run the Frontend (in a separate terminal)
cd client
npm install
npm run dev
