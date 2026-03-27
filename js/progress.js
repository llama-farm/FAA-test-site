// ============================================
// Progress Dashboard Module
// ============================================

(function() {
  function updateProgress() {
    // Study topics
    const completed = load('study_completed', []);
    document.getElementById('progressStudy').textContent = `${completed.length} / ${STUDY_TOPICS.length}`;

    // Flashcards
    const mastered = load('fc_mastered', []);
    document.getElementById('progressCards').textContent = `${mastered.length} / ${FLASHCARDS.length}`;

    // Test history
    const history = load('test_history', []);
    const tbody = document.getElementById('testHistoryBody');

    if (history.length === 0) {
      tbody.innerHTML = '<tr><td colspan="4" class="empty-state">No tests taken yet</td></tr>';
      document.getElementById('progressBest').textContent = '--';
    } else {
      const best = Math.max(...history.map(h => h.pct));
      document.getElementById('progressBest').textContent = best + '%';

      tbody.innerHTML = '';
      history.forEach(h => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${h.date}</td>
          <td>${h.size}</td>
          <td>${h.score}/${h.size} (${h.pct}%)</td>
          <td style="color:${h.pass ? 'var(--green)' : 'var(--red)'}; font-weight:600">${h.pass ? 'PASS' : 'FAIL'}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    // Weak areas
    const weakEl = document.getElementById('weakAreas');
    const allMissed = history.flatMap(h => h.missed || []);
    if (allMissed.length === 0) {
      weakEl.innerHTML = '<p class="empty-state">Take a practice test to see your weak areas.</p>';
    } else {
      const counts = {};
      allMissed.forEach(cat => { counts[cat] = (counts[cat] || 0) + 1; });
      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      const max = sorted[0][1];

      weakEl.innerHTML = sorted.map(([cat, count]) => {
        const label = QUESTION_CATEGORIES[cat] || cat;
        const pct = (count / max) * 100;
        return `
          <div class="weak-area-item">
            <div style="flex:1">
              <div>${label}</div>
              <div class="weak-area-bar"><div class="weak-area-fill" style="width:${pct}%"></div></div>
            </div>
            <div style="min-width:60px;text-align:right;color:var(--red);font-weight:600">${count} missed</div>
          </div>
        `;
      }).join('');
    }
  }

  // Reset all
  document.getElementById('resetAll').addEventListener('click', () => {
    if (confirm('Reset ALL progress? This will clear study completion, flashcard mastery, and test history.')) {
      remove('study_completed');
      remove('fc_mastered');
      remove('test_history');
      updateProgress();
    }
  });

  window.addEventListener('section-change', (e) => {
    if (e.detail.section === 'progress') {
      updateProgress();
    }
  });

  updateProgress();
})();
