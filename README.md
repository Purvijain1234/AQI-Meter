# 🌫️ Air Quality Index (AQI) Meter

A simple and interactive web application that displays real-time Air Quality Index (AQI) values using a color-coded meter.  
Users can check AQI for any location by entering its name, and the app visually represents the air quality using the standard AQI scale.

---

## 📸 Screenshot

> Replace the image path below with your actual screenshot file inside your repository.

![AQI Meter Screenshot](./screenshot.png)

---

## ⭐ Features

- Shows AQI using a color-coded gauge (Good → Hazardous)
- Displays default AQI values (e.g., New Delhi)
- Allows users to enter any location and fetch its AQI
- Simple, clean UI with strong visual indicators
- Fully responsive for desktop and mobile screens

---

## 📂 Project Structure

/
|-- index.html # Main structure
|-- styles.css # UI styling
|-- script.js # Logic for AQI fetching + meter update
|-- assets/ # (optional) images or screenshots
|-- README.md # Project documentation

yaml
Copy code

---

## 🚀 How to Use

1. Open `index.html` in your web browser.
2. The page will display:
   - Current date
   - New Delhi AQI
   - Your device’s AQI (if configured)
3. Enter any location in the input box.
4. Click **Get AQI**.
5. The meter will update and show the air quality for the entered location.

---

## 🔧 API Configuration

To enable real AQI fetching:

1. Open `script.js`
2. Locate the API request section
3. Replace with your preferred AQI API provider, such as:

- OpenWeather Air Pollution API  
- WAQI (World Air Quality Index) API  
- Government AQI APIs  

4. Add your API key (if required)

---

## 🎨 Customization

You can modify:

- Colors of the AQI meter  
- Font sizes and UI theme  
- AQI threshold values  
- Default location (e.g., New Delhi)  
- Animation speed of the pointer  

All customization can be done in:
- `styles.css` (UI)
- `script.js` (logic)

---

## 🌐 Deployment

The project is fully static and can be hosted anywhere:

### GitHub Pages
1. Push your repository to GitHub
2. Go to: Repository → Settings → Pages
3. Select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Your AQI site will be live

### Other hosting options:
- Netlify  
- Vercel  
- Cloudflare Pages  
- Any static hosting server  

---

## 🤝 Contributing

Contributions are welcome.

Steps:
1. Fork this repository
2. Create a new branch  
git checkout -b feature-name

yaml
Copy code
3. Make changes and commit  
4. Open a pull request

---

## 📄 License

This project is open-source and free to use.  
Add a LICENSE file (MIT recommended) if needed.

---

## 📘 Author

Developed as a simple and efficient tool to check AQI visually and interactively.

---
