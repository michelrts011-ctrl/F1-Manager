const STORAGE_KEY = "ftm-career-v1";

export function loadCareer() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn("Não foi possível carregar a carreira:", error);
    return null;
  }
}

export function saveCareer(career) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(career));
    return true;
  } catch (error) {
    console.error("Não foi possível salvar a carreira:", error);
    return false;
  }
}

export function clearCareer() {
  localStorage.removeItem(STORAGE_KEY);
}
