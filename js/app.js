// ============================================
// App Router & Shared Utilities
// ============================================

const APP_PREFIX = 'faa107_';

// localStorage helpers
function store(key, value) {
  try { localStorage.setItem(APP_PREFIX + key, JSON.stringify(value)); } catch(e) {}
}
function load(key, fallback) {
  try {
    const v = localStorage.getItem(APP_PREFIX + key);
    return v !== null ? JSON.parse(v) : fallback;
  } catch(e) { return fallback; }
}
function remove(key) {
  try { localStorage.removeItem(APP_PREFIX + key); } catch(e) {}
}

// Shuffle array in-place (Fisher-Yates)
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Router
function navigate(hash) {
  const section = hash.replace('#', '') || 'home';
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const target = document.getElementById(section);
  if (target) {
    target.classList.add('active');
    const link = document.querySelector(`[data-section="${section}"]`);
    if (link) link.classList.add('active');
  } else {
    document.getElementById('home').classList.add('active');
    const link = document.querySelector('[data-section="home"]');
    if (link) link.classList.add('active');
  }

  // Close mobile nav
  document.querySelector('.nav-links').classList.remove('open');

  // Trigger section init
  window.dispatchEvent(new CustomEvent('section-change', { detail: { section } }));
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle for mobile
  document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
  });

  // Nav link clicks
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const hash = link.getAttribute('href');
      window.location.hash = hash;
    });
  });

  // Hash change handler
  window.addEventListener('hashchange', () => navigate(window.location.hash));

  // Initial route
  navigate(window.location.hash || '#home');
});
