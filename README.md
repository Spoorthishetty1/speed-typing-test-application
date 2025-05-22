# ⌨️ Typing Speed Test Application

A simple and interactive web app that measures your typing speed (WPM) and accuracy within 30 seconds.  
It displays a sentence for you to type, starts a countdown timer, and calculates your performance based on your input.

---

## 🚀 Features

- Displays a random sentence to type  
- 30-second countdown timer  
- Calculates typing speed (Words Per Minute)  
- Calculates typing accuracy (%)  
- Retry option to practice multiple times  
- Clean and responsive design

---

## 📦 Project Structure

typing-speed-test-application/
├── index.html # HTML layout
├── style.css # Styling and UI design
├── script.js # JavaScript logic and timer
└── README.md # Project documentation


---

## ⚙️ How It Works

### ▶️ Start Test
- Displays a paragraph  
- Enables input field  
- Starts a 30-second countdown  

### ⏲ Timer
- Updates every second  
- Ends test at 0 and shows results  

### 🧮 Result Calculation
- **Speed (WPM)** = `(Correct Words / 30) * 60`  
- **Accuracy (%)** = `(Correct Characters / Total Characters in Original Text) * 100`  

### 🔁 Retry
- Resets timer to 30 seconds  
- Clears input field  
- Allows a new attempt  

---

## 📦 How to Use

1. Clone the repository:  
   ```bash
   git clone https://github.com/spoorthishetty1/speed-typing-test-application.git
   cd speed-typing-test-application
Open index.html in any modern browser.

🌐 Live Demo
Check out the live demo here:
https://spoorthishetty1.github.io/speed-typing-test-application/
