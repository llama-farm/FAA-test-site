// ============================================
// Practice Test Engine
// ============================================

(function() {
  const configEl = document.getElementById('testConfig');
  const activeEl = document.getElementById('testActive');
  const resultsEl = document.getElementById('testResults');
  const questionEl = document.getElementById('testQuestion');
  const noteEl = document.getElementById('testNote');
  const optionsEl = document.getElementById('testOptions');
  const feedbackEl = document.getElementById('testFeedback');
  const nextBtn = document.getElementById('testNext');
  const progressEl = document.getElementById('testProgress');
  const scoreLiveEl = document.getElementById('testScoreLive');
  const categoryFilter = document.getElementById('testCategoryFilter');

  let testQuestions = [];
  let currentIndex = 0;
  let score = 0;
  let answers = []; // {questionId, selectedIndex, correctIndex, correct}
  let selectedSize = null;

  // Populate category filter
  Object.entries(QUESTION_CATEGORIES).forEach(([key, label]) => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = label;
    categoryFilter.appendChild(opt);
  });

  // Size buttons
  document.querySelectorAll('.test-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.test-size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSize = btn.dataset.size;
    });
  });

  // Start test
  document.getElementById('startTest').addEventListener('click', () => {
    if (!selectedSize) {
      alert('Please select a number of questions.');
      return;
    }
    startTest();
  });

  function startTest() {
    const catFilter = categoryFilter.value;
    let pool = QUESTIONS.filter(q => catFilter === 'all' || q.category === catFilter);

    shuffle(pool);

    const size = selectedSize === 'all' ? pool.length : parseInt(selectedSize);
    testQuestions = pool.slice(0, Math.min(size, pool.length));

    // Shuffle options for each question (create working copies)
    testQuestions = testQuestions.map(q => {
      const indices = q.options.map((_, i) => i);
      shuffle(indices);
      return {
        ...q,
        shuffledOptions: indices.map(i => q.options[i]),
        shuffledCorrectIndex: indices.indexOf(q.correctIndex),
        originalIndices: indices
      };
    });

    currentIndex = 0;
    score = 0;
    answers = [];

    configEl.style.display = 'none';
    resultsEl.style.display = 'none';
    activeEl.style.display = 'block';

    showQuestion();
  }

  function showQuestion() {
    const q = testQuestions[currentIndex];
    questionEl.textContent = q.question;

    if (q.figureNote) {
      noteEl.style.display = 'block';
      noteEl.textContent = q.figureNote;
    } else {
      noteEl.style.display = 'none';
    }

    progressEl.textContent = `Question ${currentIndex + 1} of ${testQuestions.length}`;
    scoreLiveEl.textContent = `${score} correct`;

    optionsEl.innerHTML = '';
    feedbackEl.style.display = 'none';
    nextBtn.style.display = 'none';

    const labels = ['A', 'B', 'C'];
    q.shuffledOptions.forEach((opt, i) => {
      const div = document.createElement('div');
      div.className = 'test-option';
      div.textContent = `${labels[i]}. ${opt}`;
      div.addEventListener('click', () => selectAnswer(i));
      optionsEl.appendChild(div);
    });
  }

  function selectAnswer(selectedIdx) {
    const q = testQuestions[currentIndex];
    const correct = selectedIdx === q.shuffledCorrectIndex;

    if (correct) score++;

    answers.push({
      questionId: q.id,
      question: q.question,
      selectedOption: q.shuffledOptions[selectedIdx],
      correctOption: q.shuffledOptions[q.shuffledCorrectIndex],
      correct,
      explanation: q.explanation,
      category: q.category
    });

    // Highlight options
    const opts = optionsEl.querySelectorAll('.test-option');
    opts.forEach((opt, i) => {
      opt.classList.add('disabled');
      if (i === q.shuffledCorrectIndex) opt.classList.add('correct');
      if (i === selectedIdx && !correct) opt.classList.add('incorrect');
    });

    // Show feedback
    feedbackEl.style.display = 'block';
    feedbackEl.className = 'test-feedback ' + (correct ? 'correct-feedback' : 'incorrect-feedback');
    feedbackEl.innerHTML = correct
      ? `<strong>Correct!</strong> ${q.explanation}`
      : `<strong>Incorrect.</strong> ${q.explanation}`;

    // Show next or finish
    nextBtn.style.display = 'block';
    nextBtn.textContent = currentIndex < testQuestions.length - 1 ? 'Next Question' : 'See Results';
  }

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < testQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  });

  function showResults() {
    activeEl.style.display = 'none';
    resultsEl.style.display = 'block';

    const pct = Math.round((score / testQuestions.length) * 100);
    const pass = pct >= 70;

    document.getElementById('resultsTitle').textContent = pass ? 'You Passed!' : 'Keep Studying';
    const scoreEl = document.getElementById('resultsScore');
    scoreEl.textContent = `${pct}%`;
    scoreEl.className = 'results-score ' + (pass ? 'pass' : 'fail');

    document.getElementById('resultsBreakdown').innerHTML = `
      <div class="results-stat"><strong>${score}</strong>correct</div>
      <div class="results-stat"><strong>${testQuestions.length - score}</strong>incorrect</div>
      <div class="results-stat"><strong>${testQuestions.length}</strong>total questions</div>
    `;

    // Save to history
    const history = load('test_history', []);
    history.unshift({
      date: new Date().toLocaleDateString(),
      size: testQuestions.length,
      score: score,
      pct: pct,
      pass: pass,
      missed: answers.filter(a => !a.correct).map(a => a.category)
    });
    if (history.length > 20) history.pop();
    store('test_history', history);

    document.getElementById('reviewContainer').style.display = 'none';
  }

  // Review
  document.getElementById('reviewTest').addEventListener('click', () => {
    const container = document.getElementById('reviewContainer');
    container.style.display = 'block';
    container.innerHTML = '';

    answers.forEach((a, i) => {
      const div = document.createElement('div');
      div.className = 'review-item ' + (a.correct ? 'review-correct' : 'review-incorrect');
      div.innerHTML = `
        <div class="review-q">${i + 1}. ${a.question}</div>
        <div class="review-your-answer">${a.correct ? '&#10003;' : '&#10007;'} Your answer: ${a.selectedOption}</div>
        ${!a.correct ? `<div class="review-correct-answer">Correct: ${a.correctOption}</div>` : ''}
        <div class="review-explanation">${a.explanation}</div>
      `;
      container.appendChild(div);
    });
  });

  // New test
  document.getElementById('newTest').addEventListener('click', () => {
    resultsEl.style.display = 'none';
    configEl.style.display = 'block';
    selectedSize = null;
    document.querySelectorAll('.test-size-btn').forEach(b => b.classList.remove('selected'));
  });

  // Reset on section change
  window.addEventListener('section-change', (e) => {
    if (e.detail.section === 'test') {
      if (activeEl.style.display !== 'block' && resultsEl.style.display !== 'block') {
        configEl.style.display = 'block';
        activeEl.style.display = 'none';
        resultsEl.style.display = 'none';
      }
    }
  });
})();
