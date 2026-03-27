// ============================================
// Flashcards UI Module
// ============================================

(function() {
  const card = document.getElementById('flashcard');
  const qEl = document.getElementById('fcQuestion');
  const aEl = document.getElementById('fcAnswer');
  const counter = document.getElementById('fcCounter');
  const progressFill = document.getElementById('fcProgressFill');
  const progressText = document.getElementById('fcProgressText');
  const categoryFilter = document.getElementById('fcCategoryFilter');
  const shuffleBtn = document.getElementById('fcShuffle');
  const resetBtn = document.getElementById('fcReset');
  const knowBtn = document.getElementById('fcKnowIt');
  const studyBtn = document.getElementById('fcStudyMore');

  let deck = [];
  let index = 0;

  function getMastered() { return load('fc_mastered', []); }
  function setMastered(list) { store('fc_mastered', list); }

  function buildDeck() {
    const filter = categoryFilter.value;
    const mastered = getMastered();
    deck = FLASHCARDS.filter(c => {
      if (filter !== 'all' && c.cat !== filter) return false;
      return true;
    }).map(c => ({ ...c, mastered: mastered.includes(c.id) }));
    // Put unmastered first
    deck.sort((a, b) => (a.mastered === b.mastered) ? 0 : a.mastered ? 1 : -1);
    index = 0;
  }

  function shuffleDeck() {
    shuffle(deck);
    index = 0;
    showCard();
  }

  function showCard() {
    if (deck.length === 0) {
      qEl.textContent = 'No cards match this filter.';
      aEl.textContent = '';
      counter.textContent = '0 / 0';
      return;
    }
    if (index < 0) index = deck.length - 1;
    if (index >= deck.length) index = 0;

    card.classList.remove('flipped');
    const c = deck[index];
    qEl.textContent = c.q;
    aEl.textContent = c.a;
    counter.textContent = `${index + 1} / ${deck.length}`;
    updateProgress();
  }

  function updateProgress() {
    const mastered = getMastered();
    const total = FLASHCARDS.length;
    const count = mastered.length;
    const pct = total > 0 ? (count / total * 100) : 0;
    progressFill.style.width = pct + '%';
    progressText.textContent = `${count} / ${total} mastered`;
  }

  function markKnown() {
    if (deck.length === 0) return;
    const c = deck[index];
    let mastered = getMastered();
    if (!mastered.includes(c.id)) {
      mastered.push(c.id);
      setMastered(mastered);
    }
    deck[index].mastered = true;
    advance();
  }

  function markStudyMore() {
    if (deck.length === 0) return;
    const c = deck[index];
    let mastered = getMastered();
    mastered = mastered.filter(id => id !== c.id);
    setMastered(mastered);
    deck[index].mastered = false;
    advance();
  }

  function advance() {
    index++;
    if (index >= deck.length) index = 0;
    showCard();
  }

  // Populate category filter
  function initCategories() {
    Object.entries(FLASHCARD_CATEGORIES).forEach(([key, label]) => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = label;
      categoryFilter.appendChild(opt);
    });
  }

  // Events
  card.addEventListener('click', () => card.classList.toggle('flipped'));
  knowBtn.addEventListener('click', markKnown);
  studyBtn.addEventListener('click', markStudyMore);
  shuffleBtn.addEventListener('click', shuffleDeck);
  resetBtn.addEventListener('click', () => {
    if (confirm('Reset all flashcard progress?')) {
      setMastered([]);
      buildDeck();
      showCard();
    }
  });
  categoryFilter.addEventListener('change', () => {
    buildDeck();
    showCard();
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    // Only if flashcards section is active
    if (!document.getElementById('flashcards').classList.contains('active')) return;
    if (e.code === 'Space') { e.preventDefault(); card.classList.toggle('flipped'); }
    if (e.code === 'ArrowRight') { markKnown(); }
    if (e.code === 'ArrowLeft') { markStudyMore(); }
  });

  // Init
  initCategories();
  buildDeck();
  showCard();

  window.addEventListener('section-change', (e) => {
    if (e.detail.section === 'flashcards') {
      buildDeck();
      showCard();
    }
  });
})();
