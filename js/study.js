// ============================================
// Study Section Module
// ============================================

(function() {
  const topicList = document.getElementById('topicList');
  const studyContent = document.getElementById('studyContent');
  let currentTopic = null;
  let pdfViewerOpen = false;

  const TIER_COLORS = {
    1: 'var(--red)',
    2: 'var(--orange)',
    3: 'var(--blue)',
    4: 'var(--gray-500)',
    5: 'var(--gray-400)'
  };

  function getCompleted() {
    return load('study_completed', []);
  }

  function setCompleted(list) {
    store('study_completed', list);
  }

  function renderTopicList() {
    const completed = getCompleted();
    topicList.innerHTML = '';

    let lastTier = null;
    STUDY_TOPICS.forEach(topic => {
      // Insert tier header when tier changes
      if (topic.tier !== lastTier) {
        lastTier = topic.tier;
        const header = document.createElement('li');
        header.className = 'topic-tier-header';
        const tierLabels = {
          1: 'CRITICAL — 48%',
          2: 'HIGH — 25%',
          3: 'IMPORTANT — 20%',
          4: 'MODERATE — 5%',
          5: 'LOW — 2%'
        };
        header.innerHTML = `<span class="tier-badge" style="background:${TIER_COLORS[topic.tier]}">${tierLabels[topic.tier]}</span>`;
        topicList.appendChild(header);
      }

      const li = document.createElement('li');
      const isDone = completed.includes(topic.id);
      li.className = (topic.id === currentTopic ? 'active' : '') + (isDone ? ' completed' : '');
      li.innerHTML = `<span class="check">${isDone ? '&#10003;' : '&#9675;'}</span> ${topic.title}`;
      li.addEventListener('click', () => selectTopic(topic.id));
      topicList.appendChild(li);
    });
  }

  function selectTopic(id) {
    currentTopic = id;
    pdfViewerOpen = false;
    const topic = STUDY_TOPICS.find(t => t.id === id);
    if (!topic) return;

    const completed = getCompleted();
    const isDone = completed.includes(id);

    // Study time hint at top
    let html = '';
    if (topic.studyTime) {
      html += `<div class="study-time-hint"><strong>Study priority:</strong> ${topic.studyTime}</div>`;
    }
    html += topic.content;

    // Actions
    html += `<div class="study-actions">`;
    if (topic.pdfPage) {
      html += `<button class="btn btn-outline" id="togglePdfViewer">View in FAA Study Guide (p.${topic.pdfPage})</button>`;
    }
    html += `<label class="btn ${isDone ? 'btn-know-it' : 'btn-outline'}" style="cursor:pointer">
      <input type="checkbox" ${isDone ? 'checked' : ''} id="studyCheck" style="margin-right:0.5rem">
      ${isDone ? 'Completed' : 'Mark as Completed'}
    </label>`;
    html += `</div>`;

    // PDF viewer container (hidden initially)
    if (topic.pdfPage) {
      html += `<div id="pdfViewerContainer" class="pdf-viewer-container" style="display:none">
        <div class="pdf-viewer-header">
          <span>FAA Study Guide &mdash; Page ${topic.pdfPage}</span>
          <button class="btn btn-outline" id="closePdfViewer" style="padding:0.3rem 0.75rem;font-size:0.8rem">Close</button>
        </div>
        <iframe src="remote_pilot_study_guide.pdf#page=${topic.pdfPage}" class="pdf-viewer-iframe" title="FAA Study Guide"></iframe>
      </div>`;
    }

    studyContent.innerHTML = html;

    // PDF viewer toggle
    const toggleBtn = document.getElementById('togglePdfViewer');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const container = document.getElementById('pdfViewerContainer');
        if (container.style.display === 'none') {
          container.style.display = 'block';
          toggleBtn.textContent = 'Hide PDF Viewer';
          container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          container.style.display = 'none';
          toggleBtn.textContent = `View in FAA Study Guide (p.${topic.pdfPage})`;
        }
      });
    }
    const closeBtn = document.getElementById('closePdfViewer');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        document.getElementById('pdfViewerContainer').style.display = 'none';
        if (toggleBtn) toggleBtn.textContent = `View in FAA Study Guide (p.${topic.pdfPage})`;
      });
    }

    // Completed checkbox
    document.getElementById('studyCheck').addEventListener('change', (e) => {
      let list = getCompleted();
      if (e.target.checked) {
        if (!list.includes(id)) list.push(id);
      } else {
        list = list.filter(x => x !== id);
      }
      setCompleted(list);
      renderTopicList();
      const label = e.target.parentElement;
      if (e.target.checked) {
        label.className = 'btn btn-know-it';
        label.innerHTML = `<input type="checkbox" checked id="studyCheck" style="margin-right:0.5rem"> Completed`;
      } else {
        label.className = 'btn btn-outline';
        label.innerHTML = `<input type="checkbox" id="studyCheck" style="margin-right:0.5rem"> Mark as Completed`;
      }
      document.getElementById('studyCheck').addEventListener('change', arguments.callee);
    });

    renderTopicList();
    studyContent.scrollTop = 0;
  }

  // Init on section change
  window.addEventListener('section-change', (e) => {
    if (e.detail.section === 'study') {
      renderTopicList();
    }
  });

  renderTopicList();
})();
