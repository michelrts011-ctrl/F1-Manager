export function money(value) {
  return new Intl.NumberFormat("pt-BR", {style:"currency",currency:"BRL",maximumFractionDigits:0}).format(value);
}

export function initials(name) {
  return name.split(" ").slice(0,2).map(part=>part[0]).join("").toUpperCase();
}

export function renderDrivers(container, drivers, detailed=false) {
  container.innerHTML = drivers.map((driver,index) => detailed
    ? `<article class="driver-card"><div class="driver-card-head"><div><span class="eyebrow">PILOTO TITULAR · #${driver.number}</span><h3>${driver.name}</h3><p>${driver.nationality}</p></div><div class="driver-big-rating">${driver.rating}<small style="display:block;font:600 8px Inter;color:#8794a6;text-align:right">AVALIAÇÃO</small></div></div><div class="driver-traits">${Object.entries(driver.traits).map(([label,value])=>`<div class="trait"><span>${label}</span><b>${value}</b></div>`).join("")}</div></article>`
    : `<div class="driver-row"><span class="driver-number">0${index+1}</span><div class="driver-avatar">${initials(driver.name)}</div><div class="driver-info"><strong>${driver.name}</strong><small>${driver.nationality} · #${driver.number}</small></div><div class="driver-rating"><strong>${driver.rating}</strong><small>AVALIAÇÃO</small></div></div>`
  ).join("");
}

export function renderPerformance(container, car) {
  const labels = {aero:"Aerodinâmica",power:"Unidade de potência",chassis:"Chassi",brakes:"Freios",reliability:"Confiabilidade"};
  container.innerHTML = Object.entries(labels).map(([key,label])=>`<div class="performance-row"><span>${label}</span><div class="bar"><i style="width:${Math.max(0,Math.min(100,car[key]))}%"></i></div><b>${car[key]}</b></div>`).join("");
}
