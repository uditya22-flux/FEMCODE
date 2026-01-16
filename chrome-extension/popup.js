const toggle = document.getElementById("toggle");
const statusText = document.getElementById("status");

// Load saved state
chrome.storage.sync.get("enabled", (data) => {
  const enabled = data.enabled !== false; // default ON
  toggle.checked = enabled;
  statusText.textContent = enabled ? "Enabled" : "Disabled";
});

// Save state on toggle
toggle.addEventListener("change", () => {
  chrome.storage.sync.set({ enabled: toggle.checked });
  statusText.textContent = toggle.checked ? "Enabled" : "Disabled";
});

