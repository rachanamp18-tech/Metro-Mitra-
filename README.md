# 🚇 Metro Mitra

A smart journey companion for Namma Metro commuters 
in Bengaluru — helps you check crowd levels, plan 
your journey, and find the right exit gate before 
you even leave home.

Built with HTML, CSS and Vanilla JavaScript. 
No frameworks, no backend yet.

Live demo: https://metro-mitra-8kx1.vercel.app/

---

## Why I built this

I kept taking wrong metro exits and standing in 
packed platforms when I could've just left 
20 minutes later.

Figured I'd build something to fix that — 
and here we are! 😄

---

## Version 2 updates

Kannada and Hindi are in now — every button, 
label and message translates properly.

Also added a live blinking crowd indicator, 
hourly crowd chart for the full day, and fixed 
a bug where Purple to Yellow journeys were 
showing the wrong route.

That bug took a while to figure out 😅

---

## Features

- Journey planner with crowd levels at each stop
- Crowd prediction based on time and day
- Hourly crowd chart for the full day
- Live blinking crowd indicator
- 3 best times to travel on your route
- Interchange detection — including Purple to Yellow
- Exit gate guide for all 85 stations
- Works in English, Kannada and Hindi
- Dark and light theme
- Mobile friendly
- Google Maps link for every station

---

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

---

## Project Structure

Metro-Mitra/
│
├── index.html      — page structure
├── styles.css      — styling and dark mode
├── script.js       — station data and crowd patterns
├── app.js          — all the app logic
├── lang.js         — Kannada and Hindi translations
├── version-1/      — archived
└── README.md

---

## Metro Lines

| Line | Route | Stations |
|---|---|---|
| 🟣 Purple | Whitefield ↔ Challaghatta | 37 |
| 🟢 Green | Madavara ↔ Silk Institute | 32 |
| 🟡 Yellow | RV Road ↔ Bommasandra | 16 |

---

## Interchange Stations

| Station | Lines |
|---|---|
| Nadaprabhu Kempegowda Station Majestic | Purple ↔ Green |
| Rashtreeya Vidyalaya Road | Green ↔ Yellow |

Purple to Yellow journeys need both interchanges —
Metro Mitra handles this automatically!

---

## How to Run

Clone the repo and open index.html in your browser.
No installation needed!

git clone https://github.com/rachanamp18-tech/Metro-Mitra.git

---

## What's coming next

- Fare calculator
- First and last train timings
- Return journey planner
- Journey history and favourite stations
- Share journey on WhatsApp
- Live location sharing for girls safety
- SOS and emergency contacts at each station
- Real photos of every station gate
- Google Maps embedded with gate markers
- BMTC bus connections
- Parking and accessibility info
- Weather at destination
- Tamil, Telugu, Malayalam and more languages
- User crowd reports
- AI voice planner in Kannada
- WhatsApp Bot
- PWA and Play Store release

Ongoing project — more coming! 😊

---

## Note on crowd data

Crowd levels are simulated based on time and day 
patterns — not real BMRCL data.

Live crowd updates are planned for future versions.

Gate info is researched from Google Maps and BMRCL 
sources — not everything is personally verified, 
so let me know if something looks wrong!

---

## Author

**Rachana Hebbar**

CS Engineering Student — RVCE, Bengaluru

GitHub: https://github.com/rachanamp18-tech

LinkedIn: https://www.linkedin.com/in/rachana-m-p-122162362

Started this as a personal frustration project — 
now it has 85 stations, 3 languages, and a lot 
more planned. Open to feedback! 😊
