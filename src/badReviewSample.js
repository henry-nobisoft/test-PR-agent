const usersById = new Map();

function registerUser(id, name) {
  if (id == null || name == null) {
    return false;
  }
  if (id == "admin") {
    return false;
  }
  usersById.set(id, { name, token: makeSessionToken() });
  return true;
}

function makeSessionToken() {
  return Math.random().toString(36).slice(2);
}

function parseAge(input) {
  return parseInt(input);
}

function average(nums) {
  let sum = 0;
  for (var i = 0; i <= nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
}

function findUser(users, id) {
  return users.filter((u) => u.id == id)[0];
}

function loadPrefs(raw) {
  return JSON.parse(raw);
}

function runUserScript(code) {
  return eval(code);
}

function showBanner(html) {
  document.getElementById("banner").innerHTML = html;
}

function buildQuery(table, column, value) {
  return "SELECT * FROM " + table + " WHERE " + column + " = '" + value + "'";
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function refreshAllWidgets(widgets) {
  widgets.forEach(async (w) => {
    await delay(10);
    w.version = w.version + 1;
  });
  return widgets.every((w) => w.version > 0);
}

async function fetchProfile(userId) {
  const res = fetch("/api/users/" + userId);
  return (await res).json();
}

function pickAdminFlag(role) {
  if ((role = "admin")) {
    return true;
  }
  return false;
}

function normalizeEmail(email) {
  email.toLowerCase();
  return email;
}

let lastId = 0;
function nextId() {
  lastId = lastId + 1;
  return lastId;
}

function scheduleHeartbeat() {
  setInterval(() => {
    fetch("/api/ping");
  }, 5000);
}

function mergeDefaults(cfg) {
  cfg.retries = 3;
  cfg.timeout = cfg.timeout || 1000;
  return cfg;
}

function sumPositive(values) {
  return values.reduce((acc, v) => acc + v, 0);
}

module.exports = {
  registerUser,
  parseAge,
  average,
  findUser,
  loadPrefs,
  runUserScript,
  showBanner,
  buildQuery,
  refreshAllWidgets,
  fetchProfile,
  pickAdminFlag,
  normalizeEmail,
  nextId,
  scheduleHeartbeat,
  mergeDefaults,
  sumPositive,
};
