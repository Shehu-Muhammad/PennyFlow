![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-In%20Progress-yellow)

# 💸 PennyFlow App
A budgeting app designed for gig workers and freelancers with **irregular incomes**. 

_“Budgeting that works when your income doesn’t.”_

## 📚 Table of Contents
- [MVP Features](#-mvp-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Roadmap](#-roadmap)
- [License](#-license)

## 🚀 MVP Features
- ➕ Add income sources manually
- 💰 Auto budget splits using the 50/30/20 rule
- 📊 Track basic expenses
- 🧮 View “Safe-to-Spend” insights based on income vs. bills
- 💾 Local data storage (no sign-up required)

## 🛠️ Tech Stack
**MVP Phase**
- HTML + CSS + JS
- Deploy to Firebase Hosting, Netlify, or Vercel
- Collect email with:
    - ConvertKit
    - Mailchimp
    - Google Forms

**Future Phases**
- Firebase (Authentication + Firestore)
- Category-based budget (Food, Rent, Subscriptions, etc.)
- Multiple income sources
- Transaction list
- Daily safe-to-spend tracker
- Plaid API integration for auto income tracking
- Mobile layout
- Dark mode
- Sidebar navigation
- Validation
- Error messages
- Auto-save
- Switch to Firebase later
- Add login later
- Sync localStorage → cloud later


## 📦 Getting Started
1. Clone this repo  
   ```bash
   git clone https://github.com/shehu-muhammad/PennyFlow.git
   cd PennyFlow
   ```

## 📁 Project Structure
```
PennyFlow/
│
├── index.html
├── styles.css
├── app.js
│
├── /screens/
│     ├── income.html
│     ├── budget.html
│     ├── safe-to-spend.html
│     └── insights.html
│
├── /components/
│     ├── navbar.html
│     └── footer.html
│
├── /auth/
│     ├── login.html
│     ├── register.html
│     └── auth.js
│
├── /firebase/
│     └── firebase-config.js
│
├── /data/
│     └── model.js
│
└── /assets/
      └── (icons, images)

 ```

## 🧭 Roadmap

- [ ] MVP UI (4 screens: Income, Budget, Safe-to-Spend, Insights)  
- [ ] Local storage setup (AsyncStorage or localStorage)  
- [ ] Safe-to-spend logic implementation  
- [ ] Firebase integration (optional, Phase 2)  
- [ ] User feedback loop (Google Form or in-app button)  
- [ ] Landing page for signups and feature validation  
- [ ] Testing and QA  
- [ ] Prepare for next sprint (backend + analytics)

## 🧑‍💻 License


MIT License © 2025 [Shehu Muhammad]