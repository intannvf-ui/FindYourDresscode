const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const resultArea = document.getElementById("resultArea");
const suggestionsBox = document.getElementById("suggestions");
const emptyState = document.getElementById("emptyState");

function normalize(str) {
  return str.toLowerCase().trim();
}

function findMatches(query) {
  const q = normalize(query);
  if (!q) return [];
  return STAFF_DATA.filter((s) => normalize(s.nama).includes(q));
}

function renderSuggestions(matches) {
  suggestionsBox.innerHTML = "";
  if (matches.length <= 1) {
    suggestionsBox.classList.remove("active");
    return;
  }
  matches.slice(0, 6).forEach((s) => {
    const btn = document.createElement("button");
    btn.innerHTML = `${s.nama}`;
    btn.addEventListener("click", () => {
      input.value = s.nama;
      suggestionsBox.classList.remove("active");
      showResult(s);
    });
    suggestionsBox.appendChild(btn);
  });
  suggestionsBox.classList.add("active");
}

function showResult(staff) {
  emptyState.classList.remove("active");

  if (!staff) {
    resultArea.innerHTML = `
      <div class="not-found-card">
        Nama tidak ditemukan di database staff BEM ITS.
      </div>
    `;
    emptyState.classList.add("active");
    return;
  }

  const dc = DRESSCODE_MAP[staff.divisiKode];

  if (!dc) {
    resultArea.innerHTML = `
      <div class="not-found-card">
        Divisi kamu belum punya mapping dresscode. Hubungi panitia ya!
      </div>
    `;
    return;
  }

  const borderStyle = dc.border ? `border: 2px solid ${dc.border};` : "";

  resultArea.innerHTML = `
    <div class="result-card">
      <div class="name">${staff.nama}</div>
      <div class="dresscode-badge" style="background:${dc.hex}; color:${dc.textColor}; ${borderStyle}">
        <div class="label">Dresscode Kamu</div>
        <div class="color-name">${dc.color}</div>
      </div>
      <div class="note">Simpan hasil ini dan pakai warna ${dc.color.toLowerCase()} besok ya! 🎉</div>
    </div>
  `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  suggestionsBox.classList.remove("active");
  const matches = findMatches(input.value);

  if (matches.length === 0) {
    showResult(null);
  } else if (matches.length === 1) {
    showResult(matches[0]);
  } else {
    // multiple matches -> show suggestions, don't guess
    resultArea.innerHTML = "";
    renderSuggestions(matches);
  }
});

input.addEventListener("input", () => {
  const matches = findMatches(input.value);
  if (input.value.trim().length > 0) {
    renderSuggestions(matches);
  } else {
    suggestionsBox.classList.remove("active");
  }
});

document.addEventListener("click", (e) => {
  if (!suggestionsBox.contains(e.target) && e.target !== input) {
    suggestionsBox.classList.remove("active");
  }
});
