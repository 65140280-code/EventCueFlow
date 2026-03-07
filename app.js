function checkLogin() {
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  if (!username || !role) {
    window.location.href = "login.html";
  }
}

function showUserInfo() {
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  const roleText = role === "viewer" ? "Viewer" : "Editor";
  document.getElementById("userInfo").innerText = `${username} (${roleText})`;
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

// ----------------------- CUE DATA -----------------------

function getCues() {
  const cues = localStorage.getItem("cues");
  return cues ? JSON.parse(cues) : [];
}

function saveCues(cues) {
  localStorage.setItem("cues", JSON.stringify(cues));
  localStorage.setItem("rundownUpdated", "true");
}

// ----------------------- LAST UPDATED -----------------------

function updateLastUpdated(username) {
  const now = new Date();
  const lastUpdatedData = {
    time: now.toLocaleString(),
    user: username || "Unknown"
  };

  localStorage.setItem("lastUpdated", JSON.stringify(lastUpdatedData));
  localStorage.setItem("rundownUpdated", "true");
}

function getLastUpdated() {
  return JSON.parse(localStorage.getItem("lastUpdated"));
}
function showNotification(message){

  const box = document.getElementById("notification");
  box.innerText = message;

  box.classList.add("show");

  setTimeout(() => {
    box.classList.remove("show");
  }, 3000);

}
function addCue(time, title){

  const cues = getCues();

  cues.push({
    time: time,
    title: title
  });

  saveCues(cues);

  const username = localStorage.getItem("username");
  updateLastUpdated(username);

}