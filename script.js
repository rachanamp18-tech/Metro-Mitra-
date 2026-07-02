// STATIONS  //
const STATIONS = {
  purple: [
    "Whitefield (Kadugodi)", "Hopefarm Channasandra", "Kadugodi Tree Park", "Pattandur Agrahara", "Sri Sathya Sai Hospital", "Nallur Halli", "Kundalahalli", "Seetharampalya", "Hoodi", "Garudacharpalya", "Singayyanapalya", "Krishnarajapura", "Benniganahalli", "Baiyappanahalli", "Swami Vivekananda Road", "Indiranagar", "Halasuru", "Trinity", "Mahathma Gandhi Road", "Cubbon Park", "Dr.B.R.Ambedkar Station Vidhana Soudha", "Sir M Visveshwaraya Station Central College", "Nadaprabhu Kempegowda Station Majestic", "Krantivira Sangolli Rayanna Railway Station", "Magadi Road", "Sri Balagangadharanatha Swamiji Station Hosahalli", "Vijayanagar", "Attiguppe", "Deepanjali Nagar", "Mysore Road", "Pantharapalya Nayandahalli", "Rajarajeshwari Nagar", "Jnanabharathi", "Pattanagere", "Kengeri Bus Terminal", "Kengeri", "Challaghatta"
  ],
  green: [
    "Madavara", "Chikkabidarakallu", "Manjunatha nagar", "Nagasandra", "Dasarahalli", "Jalahalli", "Peenya Industry", "Peenya", "Goraguntepalya", "Yeshwanthpur", "Sandal Soap Factory", "Mahalakshmi", "Rajajinagar", "Mahakavi Kuvempu Road", "Srirampura", "Mantri Square Sampige Road", "Nadaprabhu Kempegowda Station Majestic", "Chickpete", "Krishna Rajendra Market", "National College", "Lalbagh", "South End Circle", "Jayanagar", "Rashtreeya Vidyalaya Road", "Banashankari", "Jaya Prakash Nagar", "Yelachenahalli", "Konanakunte Cross", "Doddakallasandra", "Vajarahalli", "Thalaghattapura", "Silk Institute"
  ],
  yellow: [
    "Rashtreeya Vidyalaya Road", "Ragigudda", "Jayadeva Hospital", "BTM Layout", "Central Silk Board", "Bommanahalli", "Hongasandra", "Kudlu Gate", "Singasandra", "Hosa Road", "Beratena Agrahara", "Electronic City", "Infosys Foundation Konappana Agrahara", "Huskur Road", "Biocon Hebbagodi", "Delta Electronics Bommasandra"
  ]
};

// Interchange station
const INTERCHANGE = "Nadaprabhu Kempegowda Station Majestic";
const INTERCHAGE = "Rashtreeya Vidyalaya Road";
// CROWD PATTERNS //
/* Crowd % by hour (0–23) */
const CROWD_PATTERNS = {
  weekday: [10,8,6,5,5,8,22,65,85,72,52,48,58,52,46,42,52,80,88,72,56,42,30,18],
  weekend: [8,6,5,5,5,7,15,35,55,62,58,55,60,58,55,52,58,65,70,62,52,40,28,15]
};

/* During festivals */
const FESTIVAL_MULTIPLIER = 1.25;

/* Stations that are consistently busier */
const STATION_CROWD_FACTOR = {
  "Nadaprabhu Kempegowda Station Majestic": 1.35,
  "Mahathma Gandhi Road": 1.25,
  "Indiranagar": 1.20,
  "Yeshwanthpur": 1.20,
  "Baiyappanahalli": 1.15,
  "Whitefield (Kadugodi)": 1.15,
  "Central Silk Board": 1.30,
  "Electronic City": 1.25
};

// EXIT DATA //
const EXIT_GUIDE_DATA = [
// -- Purple line -- //
{
  line: "Purple",
  station: "Whitefield (Kadugodi)",
  gates: {
    A: "Whitefield Traffic Police Station side",
    B: "Whitefield Railway Station / Kadugodi Bus Stand"
  },
  facilities: {
    buses: "BMTC Bus Stand (Gate B)",
    parking: "Two-wheeler parking and EV charging available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate B for Whitefield Railway Station and Kadugodi Bus Stand."
},

{
  line: "Purple",
  station: "Hopefarm Channasandra",
  gates: {
    A: "Kadugodi Colony side",
    B: "Hopefarm Junction side"
  },
  facilities: {
    buses: "BMTC buses available near Hopefarm Junction",
    parking: "Paid two-wheeler parking",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate B for Hopefarm Junction and bus connectivity."
},

{
  line: "Purple",
  station: "Kadugodi Tree Park",
  gates: {
    A: "Kadugodi Tree Park / Reserved Forest side",
    B: "Pattandur Agrahara / Prashanth Layout side"
  },
  facilities: {
    buses: "BMTC bus stop nearby",
    parking: "Paid two-wheeler parking",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Tree Park and Gate B for ECC Road access."
},

{
  line: "Purple",
  station: "Pattandur Agrahara",
  gates: {
    A: "Thigalarapalya side",
    B: "Pattandur Agrahara side",
    C: "ITPB & Park Square Mall FOB"
  },
  facilities: {
    buses: "BMTC buses and auto stand at Gate B",
    parking: "Paid two-wheeler parking",
    accessibility: "Escalators, lifts, FOB connection"
  },
  tip: "Use Gate C for direct access to ITPB and Park Square Mall."
},

{
  line: "Purple",
  station: "Sri Sathya Sai Hospital",
  gates: {
    A: "Sri Sathya Sai Super Speciality Hospital",
    B: "ITPL Main Road / KTPO side"
  },
  facilities: {
    buses: "BMTC buses on ITPL Main Road",
    parking: "Paid two-wheeler parking",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for the hospital and Gate B for KTPO."
},

{
  line: "Purple",
  station: "Nallur Halli",
  gates: {
    A: "GE Healthcare / EPIP Zone",
    B: "Prasad Tech Park / AECS Layout"
  },
  facilities: {
    buses: "BMTC buses nearby",
    parking: "Paid two-wheeler parking",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for GE Healthcare and Gate B for AECS Layout."
},

{
  line: "Purple",
  station: "Kundalahalli",
  gates: {
    A: "SAP Labs India side",
    B: "Trinity Club Lounge / Ginger Hotel side"
  },
  facilities: {
    buses: "Major BMTC bus stop below station",
    parking: "Paid two-wheeler parking",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for SAP Labs and Gate B for hotels and residential areas."
},

{
  line: "Purple",
  station: "Seetharampalya",
  gates: {
    A: "Brigade Lakefront side",
    B: "IFB Industries side"
  },
  facilities: {
    buses: "BMTC buses nearby",
    parking: "Paid two-wheeler parking",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Brigade Lakefront and Gate B for IFB Industries."
},

{
  line: "Purple",
  station: "Hoodi",
  gates: {
    A: "Hoodi Circle / Siemens side",
    B: "Maheshwari Nagar side"
  },
  facilities: {
    buses: "BMTC buses on Whitefield Main Road",
    parking: "Paid two-wheeler parking",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Hoodi Circle and Gate B for Maheshwari Nagar."
},

{
  line: "Purple",
  station: "Garudacharpalya",
  gates: {
    A: "Mahadevapura corporate side",
    B: "Maheshwari Nagar side"
  },
  facilities: {
    buses: "BMTC buses and feeder services",
    parking: "Paid two-wheeler parking",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Phoenix Marketcity and VR Bengaluru are a short auto ride away."
},
{
  line: "Purple",
  station: "Singayyanapalya",
  gates: {
    A: "Mahadevapura Industrial Area",
    B: "Garudacharpalya Residential Area"
  },
  facilities: {
    buses: "BMTC buses available on Whitefield Main Road",
    parking: "Paid two-wheeler parking",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for industrial offices and Gate B for nearby residential layouts."
},

{
  line: "Purple",
  station: "Krishnarajapura",
  gates: {
    A: "KR Puram Railway Station",
    B: "Old Madras Road / KR Puram Bus Stand"
  },
  facilities: {
    buses: "BMTC Bus Stand (Gate B)",
    parking: "Two-wheeler parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for KR Puram Railway Station and Gate B for BMTC bus connectivity."
},

{
  line: "Purple",
  station: "Benniganahalli",
  gates: {
    A: "Benniganahalli Junction",
    B: "Tin Factory Road"
  },
  facilities: {
    buses: "BMTC buses available near station",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate B for Tin Factory Junction and connecting buses."
},

{
  line: "Purple",
  station: "Baiyappanahalli",
  gates: {
    A: "Metro Depot / Old Madras Road",
    B: "BMTC Bus Terminal"
  },
  facilities: {
    buses: "Major BMTC Bus Terminal (Gate B)",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate B for BMTC Bus Terminal and city bus connections."
},

{
  line: "Purple",
  station: "Swami Vivekananda Road",
  gates: {
    A: "Old Madras Road",
    B: "CMH Road"
  },
  facilities: {
    buses: "BMTC buses on Old Madras Road",
    parking: "Paid two-wheeler parking",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate B for CMH Road shopping area."
},

{
  line: "Purple",
  station: "Indiranagar",
  gates: {
    A: "100 Feet Road",
    B: "CMH Road"
  },
  facilities: {
    buses: "BMTC buses on 100 Feet Road",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for 100 Feet Road restaurants and Gate B for CMH Road."
},

{
  line: "Purple",
  station: "Halasuru",
  gates: {
    A: "Ulsoor Lake",
    B: "Cambridge Layout"
  },
  facilities: {
    buses: "BMTC buses nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Ulsoor Lake and nearby parks."
},

{
  line: "Purple",
  station: "Trinity",
  gates: {
    A: "Brigade Road Side",
    B: "MG Road Side"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate B for MG Road shopping and commercial area."
},

{
  line: "Purple",
  station: "Mahathma Gandhi Road",
  gates: {
    A: "Brigade Road",
    B: "MG Road Walking Street"
  },
  facilities: {
    buses: "BMTC buses available",
    parking: "Paid parking nearby",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Brigade Road and Gate B for MG Road."
},

{
  line: "Purple",
  station: "Cubbon Park",
  gates: {
    A: "Cubbon Park",
    B: "Visvesvaraya Industrial & Technological Museum"
  },
  facilities: {
    buses: "BMTC buses nearby",
    parking: "Paid parking available nearby",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Cubbon Park and Gate B for Visvesvaraya Museum."
},
{
  line: "Purple",
  station: "Dr.B.R.Ambedkar Station Vidhana Soudha",
  gates: {
    A: "Vidhana Soudha",
    B: "High Court of Karnataka",
    C: "Cubbon Park"
  },
  facilities: {
    buses: "BMTC buses available on Dr. Ambedkar Veedhi",
    parking: "Public parking available nearby",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Vidhana Soudha, Gate B for High Court and Gate C for Cubbon Park."
},

{
  line: "Purple",
  station: "Sir M Visvesvaraya Station Central College",
  gates: {
    A: "Central College",
    B: "Corporation Circle",
    C: "University of Agricultural Sciences"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Public parking available nearby",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Central College and Gate B for Corporation Circle."
},

{
  line: "Purple",
  station: "Nadaprabhu Kempegowda Station Majestic",
  gates: {
    A: "KSRTC Bus Stand",
    B: "KSR Bengaluru Railway Station Subway",
    C: "BMTC Bus Stand",
    D: "Majestic Shopping Area"
  },
  facilities: {
    buses: "KSRTC and BMTC Bus Terminals",
    parking: "Public parking available nearby",
    accessibility: "Escalators, lifts, ramps and interchange facilities"
  },
  tip: "Major interchange station. Use the appropriate gate for bus, railway or Green Line interchange."
},

{
  line: "Purple",
  station: "Krantivira Sangolli Rayanna Railway Station",
  gates: {
    A: "KSR Bengaluru Railway Station",
    B: "Platform Side Entrance"
  },
  facilities: {
    buses: "BMTC buses nearby",
    parking: "Railway parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for direct access to KSR Bengaluru Railway Station."
},

{
  line: "Purple",
  station: "Magadi Road",
  gates: {
    A: "Magadi Road",
    B: "Residential Area"
  },
  facilities: {
    buses: "BMTC buses on Magadi Road",
    parking: "Paid two-wheeler parking",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Magadi Road bus connectivity."
},

{
  line: "Purple",
  station: "Sri Balagangadharanatha Swamiji Station, Hosahalli",
  gates: {
    A: "Hosahalli",
    B: "Magadi Road Junction"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Hosahalli locality."
},

{
  line: "Purple",
  station: "Vijayanagar",
  gates: {
    A: "Vijayanagar Bus Stand",
    B: "RPC Layout"
  },
  facilities: {
    buses: "BMTC Bus Stand (Gate A)",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Vijayanagar Bus Stand."
},

{
  line: "Purple",
  station: "Attiguppe",
  gates: {
    A: "Attiguppe Main Road",
    B: "Residential Area"
  },
  facilities: {
    buses: "BMTC buses nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for main road access."
},

{
  line: "Purple",
  station: "Deepanjali Nagar",
  gates: {
    A: "Deepanjali Nagar",
    B: "Mysore Road"
  },
  facilities: {
    buses: "BMTC buses on Mysore Road",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate B for Mysore Road bus connectivity."
},

{
  line: "Purple",
  station: "Mysore Road",
  gates: {
    A: "Mysore Road Bus Terminal",
    B: "Gopalan Arcade Mall"
  },
  facilities: {
    buses: "Major BMTC Bus Terminal",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for the bus terminal and Gate B for Gopalan Arcade."
},
{
  line: "Purple",
  station: "Pantharapalya Nayandahalli",
  gates: {
    A: "Nayandahalli Junction",
    B: "Pantharapalya",
    C: "BMTC Bus Stop"
  },
  facilities: {
    buses: "BMTC buses available at Nayandahalli Junction",
    parking: "Paid two-wheeler parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Nayandahalli Junction and Gate C for BMTC buses."
},

{
  line: "Purple",
  station: "Rajarajeshwari Nagar",
  gates: {
    A: "Rajarajeshwari Nagar Main Road",
    B: "BEML Layout"
  },
  facilities: {
    buses: "BMTC buses available on Mysore Road",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Rajarajeshwari Nagar Main Road."
},

{
  line: "Purple",
  station: "Jnanabharathi",
  gates: {
    A: "Bengaluru University",
    B: "Jnana Bharathi Campus"
  },
  facilities: {
    buses: "BMTC buses available outside station",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Bengaluru University campus."
},

{
  line: "Purple",
  station: "Pattanagere",
  gates: {
    A: "Pattanagere Main Road",
    B: "Residential Area"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid two-wheeler parking",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Pattanagere Main Road."
},

{
  line: "Purple",
  station: "Kengeri Bus Terminal",
  gates: {
    A: "Kengeri TTMC / BMTC Bus Terminal",
    B: "Mysore Road Service Road"
  },
  facilities: {
    buses: "Major BMTC Bus Terminal (Gate A)",
    parking: "Two-wheeler and four-wheeler parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for TTMC and long-distance BMTC bus services."
},

{
  line: "Purple",
  station: "Kengeri",
  gates: {
    A: "Kengeri Railway Station Road",
    B: "Kengeri Market"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Railway Station Road and Gate B for Kengeri Market."
},

{
  line: "Purple",
  station: "Challaghatta",
  gates: {
    A: "Challaghatta Depot",
    B: "Mysore Road Service Road"
  },
  facilities: {
    buses: "BMTC feeder buses available",
    parking: "Metro parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Terminal station. Use Gate A for Metro Depot access and Gate B for Mysore Road."
},    

// -- Green line --// 
{
  line: "Green",
  station: "Madavara",
  gates: {
    A: "Madavara Bus Terminal",
    B: "Tumakuru Road Service Road"
  },
  facilities: {
    buses: "BMTC and KSRTC buses available",
    parking: "Metro parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for the bus terminal and Gate B for service road access."
},

{
  line: "Green",
  station: "Chikkabidarakallu",
  gates: {
    A: "Chikkabidarakallu Village",
    B: "Tumakuru Road"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid two-wheeler parking",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate B for Tumakuru Road bus connectivity."
},

{
  line: "Green",
  station: "Manjunatha nagar",
  gates: {
    A: "Manjunatha Nagar",
    B: "Residential Area"
  },
  facilities: {
    buses: "BMTC buses available",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Manjunatha Nagar locality."
},

{
  line: "Green",
  station: "Nagasandra",
  gates: {
    A: "Nagasandra Industrial Area",
    B: "Tumakuru Road"
  },
  facilities: {
    buses: "BMTC buses and feeder services",
    parking: "Metro parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Terminal station. Use Gate B for Tumakuru Road."
},

{
  line: "Green",
  station: "Dasarahalli",
  gates: {
    A: "Dasarahalli Main Road",
    B: "Residential Area"
  },
  facilities: {
    buses: "BMTC buses available",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Dasarahalli Main Road."
},

{
  line: "Green",
  station: "Jalahalli",
  gates: {
    A: "Jalahalli Cross",
    B: "BEL Residential Area"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Jalahalli Cross."
},

{
  line: "Green",
  station: "Peenya Industry",
  gates: {
    A: "Peenya Industrial Area Phase I",
    B: "Tumakuru Road"
  },
  facilities: {
    buses: "BMTC industrial route buses",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for industries and Gate B for Tumakuru Road."
},

{
  line: "Green",
  station: "Peenya",
  gates: {
    A: "Peenya Main Road",
    B: "Industrial Area"
  },
  facilities: {
    buses: "BMTC buses available",
    parking: "Metro parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Peenya Main Road."
},

{
  line: "Green",
  station: "Goraguntepalya",
  gates: {
    A: "People Tree Hospitals",
    B: "Tumakuru Road"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for People Tree Hospitals and Gate B for Tumakuru Road."
},

{
  line: "Green",
  station: "Yeshwanthpur",
  gates: {
    A: "Yeshwanthpur Railway Station",
    B: "BMTC Bus Stand",
    C: "Orion Mall & World Trade Center"
  },
  facilities: {
    buses: "BMTC Bus Stand and city buses",
    parking: "Metro parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Railway Station, Gate B for buses and Gate C for Orion Mall."
},    

{
  line: "Green",
  station: "Sandal Soap Factory",
  gates: {
    A: "Sandal Soap Factory",
    B: "Dr. Rajkumar Road"
  },
  facilities: {
    buses: "BMTC buses available on Dr. Rajkumar Road",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate B for Dr. Rajkumar Road and nearby commercial areas."
},

{
  line: "Green",
  station: "Mahalakshmi",
  gates: {
    A: "Mahalakshmi Layout",
    B: "West of Chord Road"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Mahalakshmi Layout."
},

{
  line: "Green",
  station: "Rajajinagar",
  gates: {
    A: "Rajajinagar Entrance",
    B: "Dr. Rajkumar Road"
  },
  facilities: {
    buses: "BMTC buses available",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate B for Dr. Rajkumar Road and shopping areas."
},

{
  line: "Green",
  station: "Mahakavi Kuvempu Road",
  gates: {
    A: "Mahakavi Kuvempu Road",
    B: "Rajajinagar Residential Area"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Mahakavi Kuvempu Road."
},

{
  line: "Green",
  station: "Srirampura",
  gates: {
    A: "Srirampura Main Road",
    B: "Residential Area"
  },
  facilities: {
    buses: "BMTC buses available",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Srirampura Main Road."
},

{
  line: "Green",
  station: "Mantri Square Sampige Road",
  gates: {
    A: "Mantri Square Mall",
    B: "Sampige Road",
    C: "Malleshwaram"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Mall and Metro parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Mantri Square Mall and Gate C for Malleshwaram."
},

{
  line: "Green",
  station: "Nadaprabhu Kempegowda Station Majestic",
  gates: {
    A: "KSRTC Bus Stand",
    B: "KSR Bengaluru Railway Station Subway",
    C: "BMTC Bus Stand",
    D: "Purple Line Interchange"
  },
  facilities: {
    buses: "KSRTC and BMTC Bus Terminals",
    parking: "Public parking available nearby",
    accessibility: "Escalators, lifts, ramps and interchange facilities"
  },
  tip: "Interchange station. Follow signs for Purple Line, buses or railway station."
},

{
  line: "Green",
  station: "Chickpete",
  gates: {
    A: "Chickpete Market",
    B: "Avenue Road"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Public parking available nearby",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Chickpete Market and Gate B for Avenue Road."
},

{
  line: "Green",
  station: "Krishna Rajendra Market",
  gates: {
    A: "KR Market",
    B: "City Market Bus Stand"
  },
  facilities: {
    buses: "BMTC City Market Bus Stand",
    parking: "Public parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for KR Market and Gate B for City Market bus services."
},

{
  line: "Green",
  station: "National College",
  gates: {
    A: "National College",
    B: "Basavanagudi"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for National College and Gate B for Basavanagudi."
},
{
  line: "Green",
  station: "Lalbagh",
  gates: {
    A: "Lalbagh West Gate",
    B: "Lalbagh Main Road"
  },
  facilities: {
    buses: "BMTC buses available on Lalbagh Road",
    parking: "Public parking available nearby",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Lalbagh Botanical Garden."
},

{
  line: "Green",
  station: "South End Circle",
  gates: {
    A: "South End Circle",
    B: "Jayanagar 1st Block"
  },
  facilities: {
    buses: "BMTC buses available at South End Circle",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for South End Circle and Gate B for Jayanagar."
},

{
  line: "Green",
  station: "Jayanagar",
  gates: {
    A: "Jayanagar 4th Block",
    B: "Jayanagar Shopping Complex"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for 4th Block shopping area."
},

{
  line: "Green",
  station: "Rashtreeya Vidyalaya Road",
  gates: {
    A: "RV Road",
    B: "R.V. Teachers College"
  },
  facilities: {
    buses: "BMTC buses available on RV Road",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for RV Road and nearby educational institutions."
},

{
  line: "Green",
  station: "Banashankari",
  gates: {
    A: "Banashankari TTMC",
    B: "Banashankari Temple"
  },
  facilities: {
    buses: "Major BMTC TTMC",
    parking: "Metro parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for TTMC and Gate B for Banashankari Temple."
},

{
  line: "Green",
  station: "Jaya Prakash Nagar",
  gates: {
    A: "JP Nagar",
    B: "Residential Area"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for JP Nagar Main Road."
},

{
  line: "Green",
  station: "Yelachenahalli",
  gates: {
    A: "Kanakapura Road",
    B: "Yelachenahalli Residential Area"
  },
  facilities: {
    buses: "BMTC buses on Kanakapura Road",
    parking: "Metro parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Kanakapura Road."
},

{
  line: "Green",
  station: "Konanakunte Cross",
  gates: {
    A: "Konanakunte Cross",
    B: "Kanakapura Road"
  },
  facilities: {
    buses: "BMTC buses available",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Konanakunte Cross Junction."
},

{
  line: "Green",
  station: "Doddakallasandra",
  gates: {
    A: "Doddakallasandra",
    B: "Kanakapura Main Road"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate B for Kanakapura Road bus connectivity."
},

{
  line: "Green",
  station: "Vajarahalli",
  gates: {
    A: "Vajarahalli Main Road",
    B: "Residential Area"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Vajarahalli Main Road."
},
{
  line: "Green",
  station: "Thalaghattapura",
  gates: {
    A: "Thalaghattapura Main Road",
    B: "Kanakapura Road"
  },
  facilities: {
    buses: "BMTC buses available on Kanakapura Road",
    parking: "Metro parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate B for Kanakapura Road and connecting bus services."
},

{
  line: "Green",
  station: "Silk Institute",
  gates: {
    A: "Central Silk Board Research & Training Institute",
    B: "Kanakapura Road Service Road"
  },
  facilities: {
    buses: "BMTC buses and feeder services available",
    parking: "Metro parking for two-wheelers and four-wheelers",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Terminal station. Use Gate A for the Silk Institute campus and Gate B for Kanakapura Road."
},
 
// -- Yellow line -- //
{
  line: "Yellow",
  station: "Rashtreeya Vidyalaya Road",
  gates: {
    A: "RV Road",
    B: "Green Line Interchange"
  },
  facilities: {
    buses: "BMTC buses available on RV Road",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Interchange station. Use Gate B to connect with the Green Line."
},

{
  line: "Yellow",
  station: "Ragigudda",
  gates: {
    A: "Ragigudda Temple",
    B: "JP Nagar 2nd Phase"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Ragigudda Temple."
},

{
  line: "Yellow",
  station: "Jayadeva Hospital",
  gates: {
    A: "Jayadeva Institute of Cardiovascular Sciences",
    B: "Bannerghatta Road"
  },
  facilities: {
    buses: "BMTC buses available on Bannerghatta Road",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Jayadeva Hospital."
},

{
  line: "Yellow",
  station: "BTM Layout",
  gates: {
    A: "BTM Layout 1st Stage",
    B: "BTM Layout 2nd Stage"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use the gate nearest your destination within BTM Layout."
},

{
  line: "Yellow",
  station: "Central Silk Board",
  gates: {
    A: "Outer Ring Road",
    B: "Silk Board Junction",
    C: "BTM Layout Side"
  },
  facilities: {
    buses: "Major BMTC bus interchange",
    parking: "Metro parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Outer Ring Road IT corridor and Gate B for Silk Board Junction."
},

{
  line: "Yellow",
  station: "Bommanahalli",
  gates: {
    A: "Bommanahalli Junction",
    B: "Hosur Road"
  },
  facilities: {
    buses: "BMTC buses available on Hosur Road",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate B for Hosur Road bus connectivity."
},

{
  line: "Yellow",
  station: "Hongasandra",
  gates: {
    A: "Hongasandra Main Road",
    B: "Residential Area"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Hongasandra Main Road."
},

{
  line: "Yellow",
  station: "Kudlu Gate",
  gates: {
    A: "Kudlu Gate Junction",
    B: "Hosur Road"
  },
  facilities: {
    buses: "BMTC buses available",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Kudlu Gate Junction."
},

{
  line: "Yellow",
  station: "Singasandra",
  gates: {
    A: "Singasandra",
    B: "Hosur Road Service Road"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate B for Hosur Road access."
},

{
  line: "Yellow",
  station: "Hosa Road",
  gates: {
    A: "Hosa Road Junction",
    B: "Residential Area"
  },
  facilities: {
    buses: "BMTC buses available",
    parking: "Metro parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Hosa Road Junction."
},
{
  line: "Yellow",
  station: "Beratena Agrahara",
  gates: {
    A: "Beratena Agrahara",
    B: "Hosur Road Service Road"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Beratena Agrahara and Gate B for Hosur Road."
},

{
  line: "Yellow",
  station: "Electronic City",
  gates: {
    A: "Electronic City Phase 1",
    B: "Electronic City Bus Stand",
    C: "Infosys Campus Side"
  },
  facilities: {
    buses: "BMTC and intercity buses available",
    parking: "Metro parking for two-wheelers and four-wheelers",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Electronic City Phase 1, Gate B for the bus stand and Gate C for nearby IT campuses."
},

{
  line: "Yellow",
  station: "Infosys Foundation Konappana Agrahara",
  gates: {
    A: "Infosys Campus",
    B: "Konappana Agrahara"
  },
  facilities: {
    buses: "BMTC buses available nearby",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Infosys Campus and Gate B for Konappana Agrahara."
},

{
  line: "Yellow",
  station: "Huskur Road",
  gates: {
    A: "Huskur Road",
    B: "Industrial Area"
  },
  facilities: {
    buses: "BMTC buses available",
    parking: "Metro parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Huskur Road and Gate B for nearby industries."
},

{
  line: "Yellow",
  station: "Biocon Hebbagodi",
  gates: {
    A: "Biocon Campus",
    B: "Hebbagodi"
  },
  facilities: {
    buses: "BMTC buses available on Hosur Road",
    parking: "Paid parking available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Use Gate A for Biocon Campus and Gate B for Hebbagodi."
},

{
  line: "Yellow",
  station: "Delta Electronics Bommasandra",
  gates: {
    A: "Delta Electronics",
    B: "Bommasandra Industrial Area"
  },
  facilities: {
    buses: "BMTC buses and feeder services available",
    parking: "Metro parking for two-wheelers and four-wheelers",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Terminal station. Use Gate A for Delta Electronics and Gate B for Bommasandra Industrial Area."
}
];

// Default exit for stations not in the above list //
const DEFAULT_STATION_INFO = {
  gates: {
    A: "Follow station exit signs"
  },
  facilities: {
    buses: "Available outside station",
    parking: "May be available",
    accessibility: "Escalators, lifts and ramps"
  },
  tip: "Board from the middle of the platform for easiest exit."
};
