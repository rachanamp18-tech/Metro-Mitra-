// LANGUAGE DATA //
const LANGUAGES = {

  en: {
    name: "English",
    flag: "🇬🇧",

    /* Placeholders */
      placeholderSrc: "Select source station",
      placeholderDst: "Select destination station",
      placeholderGuide: "Select your destination station",

    /* Header */
      appName: "Metro Mitra",
      appSub: "Namma Metro · Bengaluru",

    /* Hero */
      eyebrow: "Smart Travel Assistant",
      heroTitle1: "Travel",
      heroAccent: "smarter,",
      heroTitle2: "not harder.",
      heroDesc: "Plan your Namma Metro journey, check crowd levels before you leave, and find the right exit gate.",

    /* Tabs */
      tabJourney: "🗺️ Plan Journey",
      tabGuide: "🚪 Station Guide",

    /* Journey card */
      cardTitle: "Where are you going?",
      labelFrom: "From",
      labelTo: "To",
      labelTime: "Departure time",
      labelDay: "Day type",
      btnWeekday: "Weekday",
      btnWeekend: "Weekend",
      btnPlan: "Check Crowd & Plan →",

    /* Station guide card */
      guideTitle: "Station Exit Guide",
      labelDest: "Your destination station",
      btnGates: "Find Exit Gates →",

    /* Results */
      stops: "stops",
      min: "min",
      change: "change",
      changes: "changes",
      direct: "Direct",
      crowdLow: "Low",
      crowdMid: "Moderate",
      crowdHigh: "High",
      boardingAt: "Boarding at",
      changeAt: "Change at",
      arrivingAt: "Arriving at",
      exitGuide: "Exit guide for",
      bestTimes: "Best times",
      journeyBreakdown: "Journey Breakdown",
      crowdTrend: "Crowd trend today",

    /* Advice */
      adviceBusy: "⚠️ Busy journey ahead. Consider travelling 30–45 min earlier or later for comfort.",
      adviceMid: "🟡 Moderate crowd expected. Board from the middle of the platform for more space.",
      adviceLow: "🟢 Great time to travel! Low crowd across your entire route. Enjoy the ride!",

    /* Footer */
      footer: "Metro Mitra · Built for Bengaluru 🚇",
      footerSub: "Crowd data is simulated — live crowd updates are planned for future versions.",

    /* Errors */
      errSelect: "Select both source and destination stations to plan your journey.",
      errSame: "Source and destination are the same. Choose different stations.",
      errNoStation: "Select a destination station to see exit gate information.",

    /* Line Pills */
      linePurple: "🟣 Purple Line",
      lineGreen: "🟢 Green Line",
      lineYellow: "🟡 Yellow Line",
  },


  kn: {
    name: "ಕನ್ನಡ",
    flag: "🇮🇳",

    /* Placeholders */
      placeholderSrc: "ಮೂಲ ನಿಲ್ದಾಣ ಆಯ್ಕೆ ಮಾಡಿ ",
      placeholderDst: "ಗಮ್ಯ ನಿಲ್ದಾಣ ಆಯ್ಕೆ ಮಾಡಿ ",
      placeholderGuide: "ನಿಮ್ಮ ಗಮ್ಯ ನಿಲ್ದಾಣ ಆಯ್ಕೆ ಮಾಡಿ ",

    /* Header */
      appName: "ಮೆಟ್ರೊ  ಮಿತ್ರ",
      appSub: "ನಮ್ಮ ಮೆಟ್ರೋ · ಬೆಂಗಳೂರು",

    /* Hero */
      eyebrow: "ಸ್ಮಾರ್ಟ್ ಪ್ರಯಾಣ ಸಹಾಯಕ",
      heroTitle1: "ಪ್ರಯಾಣಿಸಿ",
      heroAccent: "ಜಾಣ್ಮೆಯಿಂದ,",
      heroTitle2: "ಕಷ್ಟವಿಲ್ಲದೆ.",
      heroDesc: "ನಿಮ್ಮ ನಮ್ಮ ಮೆಟ್ರೋ ಪ್ರಯಾಣ ಯೋಜಿಸಿ, ಜನದಟ್ಟಣೆ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಸರಿಯಾದ ನಿರ್ಗಮನ ದ್ವಾರ ಕಂಡುಕೊಳ್ಳಿ.",

    /* Tabs */
      tabJourney: "🗺️ ಪ್ರಯಾಣ ಯೋಜಿಸಿ",
      tabGuide: "🚪 ನಿಲ್ದಾಣ ಮಾರ್ಗದರ್ಶಿ",

    /* Journey card */
      cardTitle: "ನೀವು ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತಿದ್ದೀರಿ?",
      labelFrom: "ಇಲ್ಲಿಂದ",
      labelTo: "ಇಲ್ಲಿಗೆ",
      labelTime: "ಹೊರಡುವ ಸಮಯ",
      labelDay: "ದಿನದ ವಿಧ",
      btnWeekday: "ವಾರದ ದಿನ",
      btnWeekend: "ವಾರಾಂತ್ಯ",
      btnPlan: "ಜನದಟ್ಟಣೆ ಪರಿಶೀಲಿಸಿ →",

    /* Station guide card */
      guideTitle: "ನಿಲ್ದಾಣ ನಿರ್ಗಮನ ಮಾರ್ಗದರ್ಶಿ",
      labelDest: "ನಿಮ್ಮ ಗಮ್ಯಸ್ಥಾನ ನಿಲ್ದಾಣ",
      btnGates: "ನಿರ್ಗಮನ ದ್ವಾರ ಹುಡುಕಿ →",

    /* Results */
      stops: "ನಿಲ್ದಾಣಗಳು",
      min: "ನಿಮಿಷ",
      change: "ಬದಲಾವಣೆ",
      changes: "ಬದಲಾವಣೆಗಳು",
      direct: "ನೇರ",
      crowdLow: "ಕಡಿಮೆ",
      crowdMid: "ಮಧ್ಯಮ",
      crowdHigh: "ಹೆಚ್ಚು",
      boardingAt: "ಹತ್ತುವ ಸ್ಥಳ",
      changeAt: "ಬದಲಾಯಿಸಿ",
      arrivingAt: "ತಲುಪುವ ಸ್ಥಳ",
      exitGuide: "ನಿರ್ಗಮನ ಮಾರ್ಗದರ್ಶಿ",
      bestTimes: "ಉತ್ತಮ ಸಮಯಗಳು",
      journeyBreakdown: "ಪ್ರಯಾಣ ವಿವರ",
      crowdTrend: "ಇಂದಿನ ಜನದಟ್ಟಣೆ ಪ್ರವೃತ್ತಿ",

    /* Advice */
      adviceBusy: "⚠️ ಜನದಟ್ಟಣೆ ಹೆಚ್ಚಿದೆ. 30–45 ನಿಮಿಷ ಮುಂಚೆ ಅಥವಾ ನಂತರ ಪ್ರಯಾಣಿಸಿ.",
      adviceMid: "🟡 ಮಧ್ಯಮ ಜನದಟ್ಟಣೆ ನಿರೀಕ್ಷಿತ. ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಮಧ್ಯದಿಂದ ಹತ್ತಿರಿ.",
      adviceLow: "🟢 ಪ್ರಯಾಣಕ್ಕೆ ಉತ್ತಮ ಸಮಯ! ಕಡಿಮೆ ಜನದಟ್ಟಣೆ. ಆನಂದಿಸಿ!",

    /* Footer */
      footer: "ಮೆಟ್ರೋ ಮಿತ್ರ · ಬೆಂಗಳೂರಿಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ 🚇",
      footerSub: "ಜನದಟ್ಟಣೆ ಡೇಟಾ ಅನುಕರಣೀಯ — ನೇರ ಜನದಟ್ಟಣೆ ನವೀಕರಣಗಳು ಭವಿಷ್ಯದ ಆವೃತ್ತಿಗಳಲ್ಲಿ ಯೋಜಿಸಲಾಗಿದೆ.",

    /* Errors */
      errSelect: "ಪ್ರಯಾಣ ಯೋಜಿಸಲು ಮೂಲ ಮತ್ತು ಗಮ್ಯ ನಿಲ್ದಾಣಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.",
      errSame: "ಮೂಲ ಮತ್ತು ಗಮ್ಯ ಒಂದೇ ಆಗಿದೆ. ಬೇರೆ ನಿಲ್ದಾಣಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.",
      errNoStation: "ನಿರ್ಗಮನ ಮಾಹಿತಿ ನೋಡಲು ಗಮ್ಯ ನಿಲ್ದಾಣ ಆಯ್ಕೆ ಮಾಡಿ.",
   
    /* Line Pills */
      linePurple: "🟣 ನೇರಳೆ ಮಾರ್ಗ",
      lineGreen: "🟢 ಹಸಿರು ಮಾರ್ಗ",
      lineYellow: "🟡 ಹಳದಿ ಮಾರ್ಗ",

    /* Station Names */
    stations: {
     "Whitefield (Kadugodi)": "ವೈಟ್‌ಫೀಲ್ಡ್ (ಕಾಡುಗೋಡಿ)",
     "Hopefarm Channasandra": "ಹೋಪ್‌ಫಾರ್ಮ್ ಚನ್ನಸಂದ್ರ",
     "Kadugodi Tree Park": "ಕಾಡುಗೋಡಿ ಟ್ರೀ ಪಾರ್ಕ್",
     "Pattandur Agrahara": "ಪಟ್ಟಂದೂರು ಅಗ್ರಹಾರ",
     "Sri Sathya Sai Hospital": "ಶ್ರೀ ಸತ್ಯಸಾಯಿ ಆಸ್ಪತ್ರೆ",
     "Nallur Halli": "ನಲ್ಲೂರು ಹಳ್ಳಿ",
     "Kundalahalli": "ಕುಂದಲಹಳ್ಳಿ",
     "Seetharampalya": "ಸೀತಾರಾಂಪಾಳ್ಯ",
     "Hoodi": "ಹೂಡಿ",
     "Garudacharpalya": "ಗರುಡಾಚಾರಪಾಳ್ಯ ",
     "Singayyanapalya": "ಸಿಂಗಯ್ಯನಪಾಳ್ಯ",
     "Krishnarajapura": "ಕೃಷ್ಣರಾಜಪುರ",
     "Benniganahalli": "ಬೆನ್ನಿಗಾನಹಳ್ಳಿ",
     "Baiyappanahalli": "ಬೈಯಪ್ಪನಹಳ್ಳಿ",
     "Swami Vivekananda Road": "ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ರಸ್ತೆ",
     "Indiranagar": "ಇಂದಿರಾನಗರ",
     "Halasuru": "ಹಲಸೂರು",
     "Trinity": "ಟ್ರಿನಿಟಿ",
     "Mahathma Gandhi Road": "ಮಹಾತ್ಮ ಗಾಂಧಿ ರಸ್ತೆ",
     "Cubbon Park": "ಕಬ್ಬನ್ ಉದ್ಯಾನ ",
     "Dr.B.R.Ambedkar Station Vidhana Soudha": "ಡಾ. ಬಿ.ಆರ್. ಅಂಬೇಡ್ಕರ್ ನಿಲ್ದಾಣ ವಿಧಾನಸೌಧ",
     "Sir M Visveshwaraya Station Central College": "ಸರ್ ಎಂ. ವಿಶ್ವೇಶ್ವರಯ್ಯ ನಿಲ್ದಾಣ ಸೆಂಟ್ರಲ್ ಕಾಲೇಜು",
     "Nadaprabhu Kempegowda Station Majestic": "ನಾಡಪ್ರಭು ಕೆಂಪೇಗೌಡ ನಿಲ್ದಾಣ ಮೆಜೆಸ್ಟಿಕ್",
     "Krantivira Sangolli Rayanna Railway Station": "ಕ್ರಾಂತಿವೀರ ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣ ರೈಲು ನಿಲ್ದಾಣ",
     "Magadi Road": "ಮಾಗಡಿ ರಸ್ತೆ",
     "Sri Balagangadharanatha Swamiji Station Hosahalli": "ಶ್ರೀ ಬಾಲಗಂಗಾಧರನಾಥ ಸ್ವಾಮೀಜಿ ನಿಲ್ದಾಣ ಹೊಸಹಳ್ಳಿ",
     "Vijayanagar": "ವಿಜಯನಗರ",
     "Attiguppe": "ಅತ್ತಿಗುಪ್ಪೆ", 
     "Deepanjali Nagar": "ದೀಪಾಂಜಲಿ ನಗರ",
     "Mysore Road": "ಮೈಸೂರು ರಸ್ತೆ",
     "Pantharapalya Nayandahalli": "ಪಂತರಪಾಳ್ಯ ನಾಯಂಡಹಳ್ಳಿ",
     "Rajarajeshwari Nagar": "ರಾಜರಾಜೇಶ್ವರಿ ನಗರ",
     "Jnanabharathi": "ಜ್ಞಾನಭಾರತಿ",
     "Pattanagere": "ಪಟ್ಟಣಗೆರೆ",
     "Kengeri Bus Terminal": "ಕೆಂಗೇರಿ ಬಸ್ ಟರ್ಮಿನಲ್",
     "Kengeri": "ಕೆಂಗೇರಿ",
     "Challaghatta": "ಚಲ್ಲಘಟ್ಟ",

     "Madavara": "ಮಾದಾವರ",
     "Chikkabidarakallu": "ಚಿಕ್ಕಬಿದರಕಲ್ಲು",
     "Manjunatha nagar": "ಮಂಜುನಾಥ ನಗರ",
     "Nagasandra": "ನಾಗಸಂದ್ರ",
     "Dasarahalli": "ದಾಸರಹಳ್ಳಿ",
     "Jalahalli": "ಜಾಲಹಳ್ಳಿ",
     "Peenya Industry": "ಪೀಣ್ಯ  ಇಂಡಸ್ಟ್ರಿ",
     "Peenya": "ಪೀಣ್ಯ ",
     "Goraguntepalya": "ಗೊರಗುಂಟೆಪಾಳ್ಯ",
     "Yeshwanthpur": "ಯಶವಂತಪುರ",
     "Sandal Soap Factory": "ಸ್ಯಾಂಡಲ್ ಸೋಪ್ ಫ್ಯಾಕ್ಟರಿ",
     "Mahalakshmi": "ಮಹಾಲಕ್ಷ್ಮಿ",
     "Rajajinagar": "ರಾಜಾಜಿನಗರ",
     "Mahakavi Kuvempu Road": "ಮಹಾಕವಿ ಕುವೆಂಪು ರಸ್ತೆ",
     "Srirampura": "ಶ್ರೀರಾಂಪುರ",
     "Mantri Square Sampige Road": "ಮಂತ್ರಿ ಸ್ಕ್ವೇರ್ ಸಂಪಿಗೆ ರಸ್ತೆ",
     "Chickpete": "ಚಿಕ್ಕಪೇಟೆ",
     "Krishna Rajendra Market": "ಕೃಷ್ಣ ರಾಜೇಂದ್ರ ಮಾರುಕಟ್ಟೆ",
     "National College": "ನ್ಯಾಷನಲ್ ಕಾಲೇಜ್  ರಸ್ತೆ ",
     "Lalbagh": "ಲಾಲ್‌ಬಾಗ್",
     "South End Circle": "ಸೌತ್ ಎಂಡ್ ಸರ್ಕಲ್",
     "Jayanagar": "ಜಯನಗರ",
     "Rashtreeya Vidyalaya Road": "ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾಲಯ ರಸ್ತೆ",
     "Banashankari": "ಬನಶಂಕರಿ",
     "Jaya Prakash Nagar": "ಜಯಪ್ರಕಾಶ್ ನಗರ",
     "Yelachenahalli": "ಯೆಲಚೇನಹಳ್ಳಿ",
     "Konanakunte Cross": "ಕೋಣನಕುಂಟೆ ಕ್ರಾಸ್",
     "Doddakallasandra": "ದೊಡ್ಡಕಲ್ಲಸಂದ್ರ",
     "Vajarahalli": "ವಾಜರಹಳ್ಳಿ",
     "Thalaghattapura": "ತಲಘಟ್ಟಪುರ",
     "Silk Institute": "`ರೇಷ್ಮೆ ಸಂಸ್ಥೆ ",

     "Ragigudda": "ರಾಗಿಗುಡ್ಡ",
     "Jayadeva Hospital": "ಜಯದೇವ ಆಸ್ಪತ್ರೆ",
     "BTM Layout": "ಬಿಟಿಎಂ ಲೇಔಟ್",
     "Central Silk Board": "ಕೇಂದ್ರ ರೇಷ್ಮೆ ಮಂಡಳಿ ",
     "Bommanahalli": "ಬೊಮ್ಮನಹಳ್ಳಿ",
     "Hongasandra": "ಹೊಂಗಸಂದ್ರ",
     "Kudlu Gate": "ಕುಡ್ಲು ಗೇಟ್",
     "Singasandra": "ಸಿಂಗಸಂದ್ರ",
     "Hosa Road": "ಹೊಸ ರಸ್ತೆ",
     "Beratena Agrahara": "ಬೆರಟೇನ ಅಗ್ರಹಾರ",
     "Electronic City": "ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ",
     "Infosys Foundation Konappana Agrahara": "ಇನ್ಫೋಸಿಸ್ ಫೌಂಡೇಶನ್ ಕೋನಪ್ಪನ ಅಗ್ರಹಾರ",
     "Huskur Road": "ಹುಸ್ಕೂರು ರಸ್ತೆ",
     "Biocon Hebbagodi": "ಬಯೋಕಾನ್ ಹೆಬ್ಬಗೋಡಿ",
     "Delta Electronics Bommasandra": "ಡೆಲ್ಟಾ ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಬೊಮ್ಮಸಂದ್ರ"
    },
  },

  hi: {
    name: "हिंदी",
    flag: "🇮🇳",

    /* Placeholders */
      placeholderSrc: "स्रोत स्टेशन चुनें",
      placeholderDst: "गंतव्य स्टेशन चुनें",
      placeholderGuide: "अपना गंतव्य स्टेशन चुनें",

    /* Header */
      appName: "मेट्रो मित्र",
      appSub: "नम्मा मेट्रो · बेंगलुरु",

    /* Hero */
      eyebrow: "स्मार्ट यात्रा सहायक",
      heroTitle1: "यात्रा करें",
      heroAccent: "स्मार्ट तरीके से,",
      heroTitle2: "मुश्किल नहीं।",
      heroDesc: "अपनी नम्मा मेट्रो यात्रा की योजना बनाएं, भीड़ जांचें और सही निकास द्वार खोजें।",

    /* Tabs */
      tabJourney: "🗺️ यात्रा योजना",
      tabGuide: "🚪 स्टेशन गाइड",

    /* Journey card */
      cardTitle: "आप कहाँ जा रहे हैं?",
      labelFrom: "यहाँ से",
      labelTo: "यहाँ तक",
      labelTime: "प्रस्थान समय",
      labelDay: "दिन का प्रकार",
      btnWeekday: "सप्ताह का दिन",
      btnWeekend: "सप्ताहांत",
      btnPlan: "भीड़ जांचें और योजना बनाएं →",

    /* Station guide card */
      guideTitle: "स्टेशन निकास गाइड",
      labelDest: "आपका गंतव्य स्टेशन",
      btnGates: "निकास द्वार खोजें →",

    /* Results */
      stops: "स्टेशन",
      min: "मिनट",
      change: "बदलाव",
      changes: "बदलाव",
      direct: "सीधा",
      crowdLow: "कम",
      crowdMid: "मध्यम",
      crowdHigh: "अधिक",
      boardingAt: "यहाँ चढ़ें",
      changeAt: "यहाँ बदलें",
      arrivingAt: "यहाँ पहुँचें",
      exitGuide: "निकास गाइड",
      bestTimes: "सबसे अच्छे समय",
      journeyBreakdown: "यात्रा विवरण",
      crowdTrend: "आज की भीड़ प्रवृत्ति",

    /* Advice */
      adviceBusy: "⚠️ भीड़ भरी यात्रा। 30–45 मिनट पहले या बाद में यात्रा करें।",
      adviceMid: "🟡 मध्यम भीड़ की उम्मीद। प्लेटफॉर्म के बीच से चढ़ें।",
      adviceLow: "🟢 यात्रा का अच्छा समय! कम भीड़। आनंद लें!",

    /* Footer */
      footer: "मेट्रो मित्र · बेंगलुरु के लिए बनाया गया 🚇",
      footerSub: "भीड़ डेटा अनुकरणीय है — लाइव भीड़ अपडेट भविष्य के संस्करणों में योजनाबद्ध हैं।",

    /* Errors */
      errSelect: "यात्रा योजना बनाने के लिए स्रोत और गंतव्य स्टेशन चुनें।",
      errSame: "स्रोत और गंतव्य एक ही हैं। अलग स्टेशन चुनें।",
      errNoStation: "निकास जानकारी देखने के लिए गंतव्य स्टेशन चुनें।",
     
    /* Line Pills */
      linePurple: "🟣 बैंगनी लाइन",
      lineGreen: "🟢 हरी लाइन",
      lineYellow: "🟡 पीली लाइन",
  }
};

/* Current language — default English */
let currentLang = 'en';

/* Get translation */
function t(key) {
  return LANGUAGES[currentLang][key] || LANGUAGES['en'][key] || key;
}

/* Change language */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mm-lang', lang);
  applyLanguage();

  /* Line Pills */
  const pills = document.querySelectorAll('.pill');
  pills[0].textContent = t('linePurple');
  pills[1].textContent = t('lineGreen');
  pills[2].textContent = t('lineYellow');
}

/* Load saved language */
function loadLanguage() {
  const saved = localStorage.getItem('mm-lang') || 'en';
  currentLang = saved;
  applyLanguage();
}

/* Apply language to all elements */
function applyLanguage() {
  
  /* Repopulate dropdowns with new language placeholders */
  populateSelects();

  /* Header */
  document.querySelector('.header-title').textContent = t('appName');
  document.querySelector('.header-sub').textContent = t('appSub');

  /* Hero */
  document.querySelector('.hero-eyebrow').textContent = t('eyebrow');
  document.querySelector('.hero-desc').textContent = t('heroDesc');

  /* Tabs */
  document.querySelectorAll('.tab-btn')[0].textContent = t('tabJourney');
  document.querySelectorAll('.tab-btn')[1].textContent = t('tabGuide');

  /* Journey card */
  document.querySelectorAll('.card-title')[0].textContent = t('cardTitle');
  document.querySelectorAll('.field-label')[0].textContent = t('labelFrom');
  document.querySelectorAll('.field-label')[1].textContent = t('labelTo');
  document.querySelectorAll('.field-label')[2].textContent = t('labelTime');
  document.querySelectorAll('.field-label')[3].textContent = t('labelDay');
  document.querySelectorAll('.day-btn')[0].textContent = t('btnWeekday');
  document.querySelectorAll('.day-btn')[1].textContent = t('btnWeekend');
  document.querySelectorAll('.cta-btn')[0].textContent = t('btnPlan');

  /* Station guide card */
  document.querySelectorAll('.card-title')[1].textContent = t('guideTitle');
  document.querySelectorAll('.field-label')[4].textContent = t('labelDest');
  document.querySelectorAll('.cta-btn')[1].textContent = t('btnGates');

  /* Footer */
  document.querySelectorAll('.footer')[0].innerHTML =
    `${t('footer')}<br>${t('footerSub')}`;

  /* Update language buttons */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}