// STATE VARIABLES //
let dayType = 'weekday';
let theme = 'light';
let activeTab = 'journey'; // 'journey' | 'coach'

//HELPER FUNCTION //
/* Calculates crowd level based on station , hour and minute */
function getCrowd(station, hour, minute) {
  const pattern = CROWD_PATTERNS[dayType];
  let v = pattern[hour] * (1 - minute / 60) + pattern[(hour + 1) % 24] * (minute / 60);
  const factor = STATION_CROWD_FACTOR[station] || 1.0;
  v = Math.min(100, v * factor);
  const seed = station.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % 14;
  return Math.round(Math.min(100, Math.max(2, v + seed - 7)));
}

/* Crowd classification helpers */
function crowdLevel(p) { return p <= 40 ? 'low' : p <= 70 ? 'mid' : 'high'; }
function crowdLabel(p) { return p <= 40 ? 'Low' : p <= 70 ? 'Moderate' : 'High'; }
function crowdEmoji(p) { return p <= 40 ? '🟢' : p <= 70 ? '🟡' : '🔴'; }

/* Get metro line name for a station */
function getLineOf(name) {
  for (const [line, list] of Object.entries(STATIONS))
    if (list.includes(name)) return line;
  return null;
}

// INTERCHANGING SYSTEM //
const INTERCHANGES = {
  "purple-green": "Nadaprabhu Kempegowda Station Majestic",
  "green-purple": "Nadaprabhu Kempegowda Station Majestic",
  "green-yellow": "Rashtreeya Vidyalaya Road",
  "yellow-green": "Rashtreeya Vidyalaya Road",
  "purple-yellow": "Nadaprabhu Kempegowda Station Majestic",
  "yellow-purple": "Nadaprabhu Kempegowda Station Majestic"
};

/* Returns interchange station between two lines */
function getInterchange(srcLine, dstLine) {
  return INTERCHANGES[`${srcLine}-${dstLine}`] || null;
}

/* Count number of stops between stations */
function countStops(line, from, to) {
  const list = STATIONS[line];
  if (!list) return 1;
  const a = list.indexOf(from), b = list.indexOf(to);
  if (a === -1 || b === -1) return 1;
  return Math.abs(b - a);
}

/* Estimate travel time based on stops */
function travelMinutes(stops) { 
  return stops * 2 + 3;
}

// ROUTE OPTIMIZATION //
/* Finds best travel times with lowest crowd */
function getBestTimes(src, dst, srcLine, dstLine) {
  const slots = [];
  const interchangeStn = (srcLine !== dstLine) ? getInterchange(srcLine, dstLine) : null;
  for (let h = 6; h < 23; h++) {
    const sp = getCrowd(src, h, 0);
    const dp = getCrowd(dst, h, 0);
    const ip = interchangeStn ? getCrowd(interchangeStn, h, 0) : 0;
    slots.push({ h, max: Math.max(sp, dp, ip) });
  }
  return slots.sort((a, b) => a.max - b.max).slice(0, 3);
}

/* Format hour into AM/PM */
function formatHour(h) {
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return `${h12}:00 ${ampm}`;
}

/* Get exit information for station */
function getCoachExit(station) {
  const found = EXIT_GUIDE_DATA.find(s => s.station === station);
  return found || DEFAULT_STATION_INFO;
}

// INITIALIZATION //
function init() {
  populateSelects();
  setCurrentTime();
  autoDetectDay();
  loadTheme();
  bindTabs();
}

// STATION SELECT DROPDOWNS //
function populateSelects() {
  const all = [];
  Object.entries(STATIONS).forEach(([line, list]) => {
    list.forEach(s => {
      if (!all.find(x => x.name === s)) 
         all.push({ name: s, line }); 
     });
  });
  all.sort((a, b) => a.name.localeCompare(b.name));

  ['sourceSelect', 'destSelect', 'coachSelect'].forEach((id, i) => {
    const sel = document.getElementById(id);
    if (!sel) return;
    const ph = ['Select source station', 'Select destination station', 'Select your destination station'][i];
    sel.innerHTML = `<option value="">${ph}</option>`;
    all.forEach(s => {
      const o = document.createElement('option');
      o.value = s.name;
      o.textContent = s.name;
      sel.appendChild(o);
    });
  });
}

// TIME AND DAY DETECTION //
function setCurrentTime() {
  const now = new Date();
  const t = String(now.getHours()).padStart(2, '0') + ':' + 
            String(now.getMinutes()).padStart(2, '0');
  const el = document.getElementById('journeyTime');
  if (el) el.value = t;
}

/* Auto detect weekday/weekend */
function autoDetectDay() {
  const day = new Date().getDay();
  if (day === 0 || day === 6) setDay('weekend');
  else setDay('weekday');
}

// THEME SYSTEM //
function loadTheme() {
  const saved = localStorage.getItem('mm-theme') || 'light';
  applyTheme(saved);
}

function toggleTheme() {
  applyTheme(theme === 'light' ? 'dark' : 'light');
}

function applyTheme(t) {
  theme = t;
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('mm-theme', t);
  const btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = t === 'light' ? '🌙' : '☀️';
}

// TAB SYSTEM //
function bindTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
}

function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === tab + 'Panel'));
}

// DAY SELECTION //
function setDay(type) {
  dayType = type;
  document.querySelectorAll('.day-btn').forEach(b => b.classList.toggle('active', b.dataset.day === type));
}

// STATION SWAP //
function swapStations() {
  const s = document.getElementById('sourceSelect');
  const d = document.getElementById('destSelect');
  [s.value, d.value] = [d.value, s.value];
}

// JOURNEY PLANNER //
function planJourney() {
  const src = document.getElementById('sourceSelect').value;
  const dst = document.getElementById('destSelect').value;
  const timeVal = document.getElementById('journeyTime').value || '08:00';
  const [h, m] = timeVal.split(':').map(Number);
  const resultEl = document.getElementById('journeyResult');

  if (!src || !dst) {
    showError(resultEl, 'Select both source and destination stations to plan your journey.');
    return;
  }
  if (src === dst) {
    showError(resultEl, 'Source and destination are the same. Choose different stations.');
    return;
  }

  const srcLine = getLineOf(src);
  const dstLine = getLineOf(dst);
  const needsChange = srcLine !== dstLine;

  const srcPct = getCrowd(src, h, m);
  const dstPct = getCrowd(dst, h, m);
  const interchangeStation = needsChange ? getInterchange(srcLine, dstLine) : null;
  const intPct = (needsChange && interchangeStation) ?getCrowd(interchangeStation, h, m) : null;

  const totalStops = needsChange? countStops(srcLine, src, interchangeStation) + countStops(dstLine, interchangeStation, dst): countStops(srcLine, src, dst);
  const mins = travelMinutes(totalStops);

  const allPct = needsChange
     ? [srcPct, intPct ?? srcPct, dstPct] 
     : [srcPct, dstPct];
  const maxPct = Math.max(...allPct);
  const avgPct = Math.round(allPct.reduce((a, b) => a + b, 0) / allPct.length);

  const bestTimes = getBestTimes(src, dst, srcLine, dstLine);
  const dstCoach = getCoachExit(dst) || {tip: "",gates: {} };
 
  const html = `
    <div class="result-summary">
      <div class="summary-route">
        <span class="route-label">From</span>
        <span class="route-name">${src}</span>
        <span class="route-arrow">→</span>
        <span class="route-label">To</span>
        <span class="route-name">${dst}</span>
      </div>
      <div class="summary-chips">
        <div class="chip">${totalStops} stops</div>
        <div class="chip">~${mins} min</div>
        <div class="chip">${needsChange ? '1 change' : 'Direct'}</div>
        <div class="chip chip-crowd chip-${crowdLevel(avgPct)}">${crowdEmoji(avgPct)} ${crowdLabel(avgPct)}
       </div>
      </div>
    </div>

    <div class="advice-card advice-${crowdLevel(maxPct)}">
      ${maxPct > 70 ? '<strong>⚠️ Busy journey ahead.</strong> Consider travelling 30–45 min earlier or later for comfort.'
        : maxPct > 40
        ? '<strong>🟡 Moderate crowd expected.</strong> Board from the middle of the platform for more space.'
        : '<strong>🟢 Great time to travel!</strong> Low crowd across your entire route. Enjoy the ride!'}
    </div>

    <div class="stops-section">
      <div class="section-label">Journey Breakdown</div>
      ${buildStop('source', src, srcLine, srcPct, srcPct > 70
        ? 'Crowded platform — let passengers exit before boarding.'
        : srcPct > 40 ? 'Moderate crowd. Board from the middle of the platform.'
        : 'Low crowd. Easy boarding!')}
      ${needsChange ? buildStop('interchange', interchangeStation, srcLine, intPct,
        intPct > 70? 'Very busy interchange! Allow extra time to switch lines.'
        :intPct > 40 ? `Moderate crowd. Head to the ${dstLine} line platform quickly.`
        : `Comfortable interchange. Switch to the ${dstLine} line at your own pace.`) : ''}
      ${buildStop('dest', dst, dstLine, dstPct, dstPct > 70
        ? 'Crowded arrival — move toward exit doors before the train stops.'
        : dstPct > 40 ? 'Moderate crowd. Follow exit signs steadily.'
        : 'Easy arrival. Comfortable exit.')}
    </div>

    <div class="coach-hint">
      <div class="coach-hint-icon">🚃</div>
      <div class="coach-hint-body">
      <div class="coach-hint-title">Exit guide for ${dst}</div>
      <div class="coach-hint-sub">${dstCoach.tip}</div>
      </div>
    </div>

    <div class="best-times-card">
      <div class="section-label">Best times</div>
      <div class="best-times-row">
        ${bestTimes.map(s => `
          <div class="best-slot">
            <div class="best-time">${formatHour(s.h)}</div>
            <div class="best-crowd">${crowdEmoji(s.max)} ${s.max}%</div>
          </div>`).join('')}
      </div>
    </div>
  `;

  resultEl.innerHTML = html;
  resultEl.style.display = 'block';
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function buildStop(type, name, line, pct, tip) {
  const lv = crowdLevel(pct);
  const icons = { source: '🔵', interchange: '🔄', dest: '🟣' };
  const tags  = { source: 'Boarding at', interchange: 'Change at', dest: 'Arriving at' };
  const isLast = type === 'dest';

  return `
    <div class="journey-stop ${isLast ? 'stop-last' : ''}">
      <div class="stop-left">
        <div class="stop-icon icon-${type}">${icons[type]}</div>
        ${!isLast ? '<div class="stop-connector"></div>' : ''}
      </div>
      <div class="stop-body">
        <div class="stop-tag">${tags[type]}</div>
        <div class="stop-name">${name} <span class="line-badge badge-${line}">${line}</span></div>
        <div class="crowd-row">
          <div class="crowd-track"><div class="crowd-bar bar-${lv}" style="width:${pct}%"></div></div>
          <div class="crowd-pct pct-${lv}">${pct}%</div>
        </div>
        <div class="stop-tip">${tip}</div>
      </div>
    </div>`;
}

// EXIT GATES //
function checkGates() {
  const dst = document.getElementById('coachSelect').value;
  const resultEl = document.getElementById('coachResult');

  if (!dst) {
    showError(resultEl, 'Select a destination station to see coach and exit info.');
    return;
  }

  const info = getCoachExit(dst);
  const line = getLineOf(dst);

  resultEl.innerHTML = `
    <div class="coach-result-card">
      <div class="coach-result-header">
        <div class="coach-result-station">${dst}</div>
        <span class="line-badge badge-${line}">${line}</span>
      </div>

     <div class="coach-info-grid">
       ${Object.entries(info.gates || {}).map(([k, v]) => `
          <div class="coach-info-item">
           <div class="info-icon">🚪</div>
           <div class="info-body">
             <div class="info-label">Gate ${k}</div>
             <div class="info-value">${v}</div>
           </div>
          </div>`).join('')}
     </div>

      <div class="coach-tip-box">
        💡 ${info.tip}
      </div>

      <a href="https://www.google.com/maps/search/${encodeURIComponent(dst + ' Metro Station Bengaluru')}"
       target="_blank"
       class="maps-btn"
      >
       📍 Open in Google Maps
      </a>

    </div>
  `;

  resultEl.style.display = 'block';
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ERROR HANDLING //
function showError(el, msg) {
  el.innerHTML = `<div class="error-box">⚠️ ${msg}</div>`;
  el.style.display = 'block';
}

// START APPLICATION //
document.addEventListener('DOMContentLoaded', init);
