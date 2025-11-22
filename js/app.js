import { state, saveState } from "./state.js";
import { navigate } from "./router.js";

// Dark mode load
if (state.settings.darkMode) {
  document.body.classList.add("dark");
}

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
  const enabled = document.body.classList.toggle("dark");
  state.settings.darkMode = enabled;
  saveState();
});

// Sidebar toggle
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

// Nav items
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", e => {
    const page = e.target.dataset.page;
    navigate(page);
    document.getElementById("sidebar").classList.remove("open");
  });
});

// Initial load
navigate(location.hash.replace("#", "") || "income");
