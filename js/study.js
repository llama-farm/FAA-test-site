// ============================================
// Study Section Module
// ============================================

(function() {
  const topicList = document.getElementById('topicList');
  const studyContent = document.getElementById('studyContent');
  let currentTopic = null;

  function getCompleted() {
    return load('study_completed', []);
  }

  function setCompleted(list) {
    store('study_completed', list);
  }

  function renderTopicList() {
    const completed = getCompleted();
    topicList.innerHTML = '';
    STUDY_TOPICS.forEach(topic => {
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
    const topic = STUDY_TOPICS.find(t => t.id === id);
    if (!topic) return;

    const completed = getCompleted();
    const isDone = completed.includes(id);

    let html = topic.content;
    html += `<div class="study-actions">`;
    if (topic.pdfPage) {
      html += `<a href="remote_pilot_study_guide.pdf#page=${topic.pdfPage}" target="_blank" class="btn btn-outline">View in FAA Study Guide (p.${topic.pdfPage})</a>`;
    }
    html += `<label class="btn ${isDone ? 'btn-know-it' : 'btn-outline'}" style="cursor:pointer">
      <input type="checkbox" ${isDone ? 'checked' : ''} id="studyCheck" style="margin-right:0.5rem">
      ${isDone ? 'Completed' : 'Mark as Completed'}
    </label>`;
    html += `</div>`;

    studyContent.innerHTML = html;

    document.getElementById('studyCheck').addEventListener('change', (e) => {
      let list = getCompleted();
      if (e.target.checked) {
        if (!list.includes(id)) list.push(id);
      } else {
        list = list.filter(x => x !== id);
      }
      setCompleted(list);
      renderTopicList();
      // Update button style
      const label = e.target.parentElement;
      if (e.target.checked) {
        label.className = 'btn btn-know-it';
        label.innerHTML = `<input type="checkbox" checked id="studyCheck" style="margin-right:0.5rem"> Completed`;
      } else {
        label.className = 'btn btn-outline';
        label.innerHTML = `<input type="checkbox" id="studyCheck" style="margin-right:0.5rem"> Mark as Completed`;
      }
      // Re-bind
      document.getElementById('studyCheck').addEventListener('change', arguments.callee);
    });

    renderTopicList();
  }

  // Init on section change
  window.addEventListener('section-change', (e) => {
    if (e.detail.section === 'study') {
      renderTopicList();
    }
  });

  renderTopicList();
})();
