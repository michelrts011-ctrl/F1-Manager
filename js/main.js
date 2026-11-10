import {TEAMS, CALENDAR} from "./data.js";
import {loadCareer, saveCareer, clearCareer} from "./storage.js";
import {money, renderDrivers, renderPerformance} from "./ui.js";

const $ = (selector) => document.querySelector(selector);
let selectedTeamId = null;
let career = loadCareer();

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function renderTeamOptions() {
  $("#team-options").innerHTML = TEAMS.map(team => `
    <button class="team-option" data-team="${team.id}" aria-pressed="false">
      <div class="team-option-top"><span class="team-swatch" style="background:${team.color}"></span><strong>${team.name}</strong></div>
      <small>${team.base} · Avaliação geral ${team.rating}</small>
      <div class="team-rating"><span>ORÇAMENTO INICIAL</span><b>${money(team.budget)}</b></div>
    </button>`).join("");
  document.querySelectorAll("[data-team]").forEach(button => {
    button.addEventListener("click", () => selectTeam(button.dataset.team));
  });
}

function selectTeam(teamId) {
  selectedTeamId = teamId;
  const team = TEAMS.find(item => item.id === teamId);
  document.querySelectorAll("[data-team]").forEach(button => {
    const active = button.dataset.team === teamId;
    button.classList.toggle("selected", active);
    button.setAttribute("aria-pressed", String(active));
  });
  $("#selected-team-name").textContent = team.name;
  $("#start-career").disabled = false;
}

function startCareer() {
  const team = TEAMS.find(item => item.id === selectedTeamId);
  if (!team) return;
  career = {
    version:1,
    teamId:team.id,
    teamName:team.name,
    budget:team.budget,
    reputation:team.reputation,
    season:2026,
    points:0,
    currentRound:1,
    createdAt:new Date().toISOString()
  };
  if (!saveCareer(career)) {
    showToast("Não foi possível salvar. Verifique o armazenamento do navegador.");
    return;
  }
  renderGame();
  showToast(`${team.name}: carreira iniciada!`);
}

function getTeam() {
  return TEAMS.find(team => team.id === career?.teamId) || null;
}

function renderCalendar() {
  $("#calendar-list").innerHTML = CALENDAR.map((race,index)=>`
    <div class="calendar-row"><span class="calendar-round">${String(index+1).padStart(2,"0")}</span><div class="calendar-event"><strong>${race[0]}</strong><small>${race[1]}</small></div><span class="calendar-date">${race[2]}</span></div>
  `).join("");
  $("#next-race-name").textContent = CALENDAR[0][0];
  $("#next-race-location").textContent = `${CALENDAR[0][1]} · ${CALENDAR[0][2]}`;
}

function renderGame() {
  const team = getTeam();
  if (!career || !team) {
    $("#career-setup").classList.remove("hidden");
    $("#game-screen").classList.add("hidden");
    return;
  }
  $("#career-setup").classList.add("hidden");
  $("#game-screen").classList.remove("hidden");
  $("#sidebar-season").textContent = career.season;
  document.querySelectorAll("[data-season]").forEach(el=>el.textContent=career.season);
  $("#top-budget").textContent = money(career.budget);
  $("#overview-budget").textContent = money(career.budget);
  $("#overview-reputation").textContent = `${career.reputation}/100`;
  $("#team-chip-name").textContent = team.name;
  $("#team-chip-color").style.background = team.color;
  $("#team-profile").innerHTML = `<span class="profile-accent" style="background:${team.color}"></span><div><span class="eyebrow">EQUIPE DE FÓRMULA · ${team.base.toUpperCase()}</span><h2>${team.name}</h2><p>Temporada de estreia no seu comando · Base operacional: ${team.base}</p></div><div class="profile-metrics"><div><small>AVALIAÇÃO</small><strong>${team.rating}/100</strong></div><div><small>REPUTAÇÃO</small><strong>${career.reputation}</strong></div></div>`;
  renderDrivers($("#overview-drivers"),team.drivers);
  renderDrivers($("#team-driver-cards"),team.drivers,true);
  renderPerformance($("#overview-car-stats"),team.car);
  renderPerformance($("#car-performance"),team.car);
  $("#car-model-name").textContent = `${team.id.toUpperCase()}-01`;
  renderCalendar();
}

function navigate(page) {
  document.querySelectorAll(".page").forEach(el=>el.classList.remove("active"));
  const target = $(`#page-${page}`);
  if (target) target.classList.add("active");
  document.querySelectorAll(".nav-item[data-page]").forEach(button=>button.classList.toggle("active",button.dataset.page===page));
  const labels = {overview:"VISÃO GERAL",team:"MINHA EQUIPE",car:"DESENVOLVIMENTO",calendar:"CALENDÁRIO",race:"CENTRAL DE CORRIDA"};
  $("#topbar-section").textContent = labels[page] || "CARREIRA";
}

function bindEvents() {
  $("#start-career").addEventListener("click",startCareer);
  document.querySelectorAll(".nav-item[data-page]").forEach(button=>button.addEventListener("click",()=>navigate(button.dataset.page)));
  document.querySelectorAll("[data-go]").forEach(button=>button.addEventListener("click",()=>navigate(button.dataset.go)));
  $("#settings-button").addEventListener("click",()=>$("#settings-modal").classList.remove("hidden"));
  $("#close-settings").addEventListener("click",()=>$("#settings-modal").classList.add("hidden"));
  $("#settings-modal").addEventListener("click",event=>{if(event.target.id==="settings-modal")$("#settings-modal").classList.add("hidden")});
  $("#reset-career").addEventListener("click",()=>{
    if (!window.confirm("Tem certeza? O progresso desta carreira será apagado deste navegador.")) return;
    clearCareer();
    career = null;
    selectedTeamId = null;
    $("#settings-modal").classList.add("hidden");
    renderTeamOptions();
    renderGame();
    navigate("overview");
    showToast("Carreira reiniciada.");
  });
}

function init() {
  renderTeamOptions();
  bindEvents();
  renderGame();
  if (career && getTeam()) navigate("overview");
}

init();
