🚇 Metro Mitra

Smart Journey Companion for Namma Metro, Bengaluru

Metro Mitra helps Bengaluru commuters plan smarter metro journeys — check crowd levels before leaving, find the right coach to board, and get exit guidance at every station.


🌐 Live Demo

👉 metro-mitra.github.io (update after deploying)


✨ Features (Version 1)

FeatureStatus🗺️ Journey PlannerUI Ready👥 Crowd AlertComing in Version 2🚃 Coach & Exit GuideUI Ready🌙 Dark / Light ThemeUI Ready📱 Mobile Friendly✅ Fully responsive⚡ Offline ReadyComing in Version 4


🗺️ Project Roadmap

✅ Version 1 — Frontend (Current)


Clean separate files: index.html, styles.css, script.js
UI ready — Journey planner & Coach and Exit guide
Dark / Light theme toggle
Weekday / Weekend crowd patterns (UI only)
Hosted on GitHub Pages


🔜 Version 2 — Languages + Logic


app.js added — all buttons functional
lang.js added for multilingual support
English / ಕನ್ನಡ (Kannada) / हिंदी (Hindi) toggle


🔜 Version 3 — Backend


Firebase Realtime Database integration
Data no longer hardcoded
User feedback: "Is this crowd info accurate?"


🔜 Version 4 — Crowdsourcing


Real crowd reports from users
Admin panel to verify reports
Optional user accounts


🔜 Version 5 — PWA + App


Service Worker for offline support
Installable as PWA (Android + iOS)
Play Store release via Capacitor



🚀 How to Run Locally

bash# Clone the repo
git clone https://github.com/your-username/metro-mitra.git

# Open in browser — no build step needed!
cd metro-mitra
open index.html

Or just drag index.html into your browser. That's it!


📁 File Structure

metro-mitra/
├── index.html    — App structure and layout
├── styles.css    — All styling (light + dark theme)
├── script.js     — Station data, crowd patterns, coach & exit info
└── README.md     — This file


🚇 Metro Lines Covered

LineStations🟣 Purple LineWhitefield (Kadugodi) ↔ Kengeri (24 stations)🟢 Green LineNagasandra ↔ Yelachenahalli (24 stations)🟡 Yellow LineRV Road ↔ Manjunatha Nagar (19 stations)


🛠️ Tech Stack


HTML5 — Semantic structure
CSS3 — Custom properties, dark/light theme, responsive
Vanilla JavaScript — No frameworks, no dependencies
Google Fonts — Syne (display) + DM Sans (body)



🙋 About

Built by Rachana —  CS student at RV College of Engineering, Bengaluru.

A real-world project to solve a genuine problem for Namma Metro commuters — started as a learning project, built to eventually become a live product.


📄 License

MIT License — free to use, modify, and share.



Crowd data is simulated based on historical patterns. Designed for future integration with BMRCL live data.
