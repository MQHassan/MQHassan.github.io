const appContent = document.getElementById('app-content');
const searchBar = document.getElementById('search-bar');
let lastViewedTopic = null;

const drugRegistry = {
  // Antibiotics
  "amoxicillin": { low: 15, high: 30, text: "15-30 mg/kg/dose", cap: 1000, display: "Amoxicillin" },
  "co-amoxiclav": { low: 15, high: 30, text: "15-30 mg/kg/dose (amox part)", cap: 1000, display: "Co-amoxiclav" },
  "flucloxacillin": { low: 12.5, high: 25, text: "12.5-25 mg/kg/dose", cap: 1000, display: "Flucloxacillin" },
  "ceftriaxone": { low: 50, high: 80, text: "50-80 mg/kg/dose", cap: 4000, display: "Ceftriaxone" },
  "azithromycin": { low: 10, high: 10, text: "10 mg/kg/dose", cap: 500, display: "Azithromycin" },
  "benzylpenicillin": { low: 30, high: 60, text: "30-60 mg/kg/dose", cap: 2400, display: "Benzylpenicillin" },
  "gentamicin": { low: 5, high: 7.5, text: "5-7.5 mg/kg/dose", cap: 400, display: "Gentamicin" },
  "cefotaxime": { low: 50, high: 50, text: "50 mg/kg/dose", cap: 2000, display: "Cefotaxime" },
  "vancomycin": { low: 15, high: 15, text: "15 mg/kg/dose", cap: 750, display: "Vancomycin" },
  "clindamycin": { low: 6, high: 10, text: "6-10 mg/kg/dose", cap: 600, display: "Clindamycin" },
  "metronidazole": { low: 7.5, high: 7.5, text: "7.5 mg/kg/dose", cap: 500, display: "Metronidazole" },
  "piperacillin": { low: 90, high: 90, text: "90 mg/kg/dose", cap: 4500, display: "Pip-Tazobactam" },
  "meropenem": { low: 20, high: 40, text: "20-40 mg/kg/dose", cap: 2000, display: "Meropenem" },
  "clarithromycin": { low: 7.5, high: 7.5, text: "7.5 mg/kg/dose", cap: 500, display: "Clarithromycin" },
  "ciprofloxacin": { low: 10, high: 20, text: "10-20 mg/kg/dose", cap: 750, display: "Ciprofloxacin" },
  
  // TB Drugs
  "isoniazid": { low: 10, high: 15, text: "10-15 mg/kg/dose", cap: 300, display: "Isoniazid" },
  "rifampicin": { low: 15, high: 20, text: "15-20 mg/kg/dose", cap: 600, display: "Rifampicin" },
  "pyrazinamide": { low: 35, high: 40, text: "35-40 mg/kg/dose", cap: 2000, display: "Pyrazinamide" },
  "ethambutol": { low: 20, high: 25, text: "20-25 mg/kg/dose", cap: 1200, display: "Ethambutol" },
  "dexamethasone": { low: 0.15, high: 0.15, text: "0.15 mg/kg/dose", cap: 10, display: "Dexamethasone" },
  
  // Antifungals
  "micafungin": { low: 2, high: 10, text: "2-10 mg/kg/dose", cap: 200, display: "Micafungin" },
  "fluconazole": { low: 6, high: 12, text: "6-12 mg/kg/dose", cap: 800, display: "Fluconazole" },
  "amphotericin": { low: 3, high: 10, text: "3-10 mg/kg/dose", cap: 250, display: "L-Amphotericin B" },
  "voriconazole": { low: 9, high: 9, text: "9 mg/kg/dose (TDM needed)", cap: 400, display: "Voriconazole" },
  "itraconazole": { low: 5, high: 5, text: "5 mg/kg/dose", cap: 400, display: "Itraconazole" },
  "flucytosine": { low: 25, high: 25, text: "25 mg/kg/dose", cap: 1500, display: "Flucytosine" },
  "nystatin": { low: 0, high: 0, text: "Fixed: 100,000 units QDS", cap: 0, display: "Nystatin" },
  "caspofungin": { low: 0, high: 0, text: "Fixed: 50 mg/m²", cap: 0, display: "Caspofungin" },
  "terbinafine": { low: 0, high: 0, text: "Check guidelines", cap: 0, display: "Terbinafine" },
  "posaconazole": { low: 0, high: 0, text: "Fixed: 300 mg OD", cap: 0, display: "Posaconazole" },
  
  // Antivirals
  "aciclovir": { low: 10, high: 20, text: "10-20 mg/kg/dose", cap: 800, display: "Aciclovir" },
  "valaciclovir": { low: 20, high: 20, text: "20 mg/kg/dose", cap: 1000, display: "Valaciclovir" },
  "valganciclovir": { low: 16, high: 16, text: "16 mg/kg/dose", cap: 900, display: "Valganciclovir" },
  "ganciclovir": { low: 5, high: 5, text: "5 mg/kg/dose", cap: 500, display: "Ganciclovir" },
  "palivizumab": { low: 15, high: 15, text: "15 mg/kg/dose", cap: 1000, display: "Palivizumab" },
  "immunoglobulin": { low: 2000, high: 2000, text: "2 g/kg (IVIG)", cap: 100000, display: "IVIG" },
  "oseltamivir": { low: 0, high: 0, text: "Weight banded (check text)", cap: 0, display: "Oseltamivir" },
  "tamiflu": { low: 0, high: 0, text: "Weight banded (check text)", cap: 0, display: "Oseltamivir" },
  "foscarnet": { low: 0, high: 0, text: "Check guidelines", cap: 0, display: "Foscarnet" },
  "cidofovir": { low: 0, high: 0, text: "Check guidelines", cap: 0, display: "Cidofovir" },
  "remdesivir": { low: 0, high: 0, text: "Weight banded (check text)", cap: 0, display: "Remdesivir" },
  "ribavirin": { low: 0, high: 0, text: "Check guidelines", cap: 0, display: "Ribavirin" },
  "tenofovir": { low: 0, high: 0, text: "Fixed Dose", cap: 0, display: "Tenofovir" },
  "entecavir": { low: 0, high: 0, text: "Fixed Dose", cap: 0, display: "Entecavir" },
  "sofosbuvir": { low: 0, high: 0, text: "Fixed Dose", cap: 0, display: "Sofosbuvir" },
  "dolutegravir": { low: 0, high: 0, text: "Fixed Dose", cap: 0, display: "Dolutegravir" },
  "lopinavir": { low: 0, high: 0, text: "Fixed Dose", cap: 0, display: "Lopinavir" }
};

let currentCalcDrugs = [];

function renderHome() {
  let html = '';
  abxData.forEach((part, index) => {
    html += `
      <div class="part-card">
        <div class="part-title" onclick="togglePart(${index})">
          ${part.part_title} <span>▼</span>
        </div>
        <div class="part-content" id="part-content-${index}">
    `;
    part.topics.forEach((topic, tIndex) => {
      html += `<button class="topic-btn" onclick="openTopic(${index}, ${tIndex})">${topic.topic_title}</button>`;
    });
    html += `</div></div>`;
  });
  appContent.innerHTML = html;
}

function togglePart(index) {
  document.getElementById(`part-content-${index}`).classList.toggle('open');
}

function openTopic(pIndex, tIndex) {
  const topic = abxData[pIndex].topics[tIndex];
  lastViewedTopic = topic; // Context awareness for calculator
  
  let html = `<button class="back-btn" onclick="loadHome()">← Back to list</button>`;
  html += `<h2 class="detail-title">${topic.topic_title}</h2>`;
  
  html += `<div class="detail-card"><h3>Guidelines</h3>`;
  let hasNotes = false;
  let notesHtml = `<div class="notes-container"><strong>Important Notes</strong>`;

  topic.details.forEach(detail => {
    if (detail.type === 'key_value') {
      let isImportant = detail.label.toLowerCase().includes('first-line');
      let colorClass = isImportant ? 'style="color:#2563eb;"' : '';
      html += `<div class="kv-row"><strong ${colorClass}>${detail.label}</strong><span>${detail.value}</span></div>`;
    } else if (detail.type === 'notes_start') {
      hasNotes = true;
    } else if (detail.type === 'note_line' && hasNotes) {
      notesHtml += `<div class="note-item">${detail.value}</div>`;
    } else if (detail.type === 'text') {
      html += `<p style="margin-bottom:8px; font-size:0.95rem; color:#475569;">${detail.value}</p>`;
    }
  });

  html += `</div>`;
  if (hasNotes) {
    notesHtml += `</div>`;
    html += notesHtml;
  }

  appContent.innerHTML = html;
  window.scrollTo(0, 0);
}

function loadHome() {
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.nav-btn')[0].classList.add('active');
  searchBar.value = '';
  document.querySelector('header').style.display = 'block';
  renderHome();
}

function openCalculator() {
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.nav-btn')[1].classList.add('active');
  document.querySelector('header').style.display = 'none';
  
  // Context-Aware Logic
  currentCalcDrugs = [];
  let detectedKeys = new Set();
  
  if (lastViewedTopic) {
    let combinedText = lastViewedTopic.topic_title.toLowerCase();
    lastViewedTopic.details.forEach(d => {
      if (d.value) combinedText += " " + d.value.toLowerCase();
    });
    
    Object.keys(drugRegistry).forEach(key => {
      if (combinedText.includes(key)) detectedKeys.add(key);
    });
  }
  
  detectedKeys.forEach(k => currentCalcDrugs.push({ key: k, ...drugRegistry[k] }));
  
  let subtitleText = lastViewedTopic && currentCalcDrugs.length > 0
    ? `Drugs found for: ${lastViewedTopic.topic_title.split('—')[0]}`
    : `General Calculator`;

  if (currentCalcDrugs.length === 0) {
    currentCalcDrugs = [
        { key: "amoxicillin", ...drugRegistry["amoxicillin"] },
        { key: "flucloxacillin", ...drugRegistry["flucloxacillin"] },
        { key: "ceftriaxone", ...drugRegistry["ceftriaxone"] },
        { key: "azithromycin", ...drugRegistry["azithromycin"] }
    ];
  }
  
  let html = `
    <div class="calc-box">
      <h2 style="color:var(--primary); margin-bottom: 8px;">Dosage Calculator</h2>
      <p style="font-size:0.9rem; color:#64748b; font-weight:600; text-transform:uppercase; margin-bottom: 24px;">${subtitleText}</p>
      
      <div style="margin-bottom: 30px; background: #f1f5f9; padding: 16px; border-radius: 8px;">
        <label style="font-weight:600; color:#475569; display:block; margin-bottom:8px;">Enter Patient Weight</label>
        <div style="display:flex; justify-content:center; align-items:center;">
          <input type="number" id="weight-input" class="calc-input" placeholder="0" onkeyup="calcDoses()" style="margin:0; margin-right:12px;"> 
          <span style="font-size:1.4rem; font-weight:bold; color:#475569;">kg</span>
        </div>
      </div>

      <div style="text-align:left;">
  `;

  currentCalcDrugs.forEach((drug, index) => {
    let borderStyle = index < currentCalcDrugs.length - 1 ? 'border-bottom:1px solid #e2e8f0;' : '';
    html += `
        <div style="display:flex; justify-content:space-between; ${borderStyle} padding:16px 0;">
          <div><strong style="color:#1e293b;">${drug.display}</strong><br><span style="font-size:0.85rem; color:#64748b;">(${drug.text})</span></div>
          <div style="text-align:right;"><strong id="dose-${drug.key}" style="font-size:1.25rem; color:var(--primary);">-</strong><br><span style="font-size:0.85rem; color:#64748b;">mg / dose</span></div>
        </div>
    `;
  });

  html += `</div></div>`;
  appContent.innerHTML = html;
}

function calcDoses() {
  const w = parseFloat(document.getElementById('weight-input').value) || 0;
  
  currentCalcDrugs.forEach(drug => {
    const el = document.getElementById(`dose-${drug.key}`);
    if(w === 0) {
      el.innerText = '-';
      return;
    }
    
    if (drug.low === 0 && drug.high === 0) {
      el.innerText = '—';
      return;
    }
    
    let low = Math.round(w * drug.low);
    let high = Math.round(w * drug.high);
    
    if (low > drug.cap) low = drug.cap;
    if (high > drug.cap) high = drug.cap;
    
    if (low === high) {
        el.innerText = low;
    } else {
        el.innerText = low + ' - ' + high;
    }
  });
}

searchBar.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  if (!query) return renderHome();
  
  let resultsHtml = '<h3 style="margin-bottom:16px; color:#64748b; font-size:0.9rem; text-transform:uppercase;">Search Results</h3>';
  let found = false;
  abxData.forEach((part, pIndex) => {
    part.topics.forEach((topic, tIndex) => {
      let isMatch = topic.topic_title.toLowerCase().includes(query);
      topic.details.forEach(d => {
        if(d.value && d.value.toLowerCase().includes(query)) isMatch = true;
      });
      if (isMatch) {
        found = true;
        resultsHtml += `<div class="part-card"><button class="topic-btn" style="padding:16px; border:none;" onclick="openTopic(${pIndex}, ${tIndex})">${topic.topic_title}</button></div>`;
      }
    });
  });
  appContent.innerHTML = found ? resultsHtml : '<p style="text-align:center; margin-top:40px; color:#64748b;">No results found</p>';
});

renderHome();
