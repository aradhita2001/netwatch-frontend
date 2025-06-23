const toggleBtn = document.getElementById('toggle-style');
const table = document.getElementById('timetable');

toggleBtn.addEventListener('click', () => {
  const existingLink = document.getElementById('page-style');

  if (existingLink) {
    existingLink.remove(); // Remove style.css
    // Restore HTML attributes
    table.setAttribute('border', '1');
    table.setAttribute('cellpadding', '5');
    table.setAttribute('cellspacing', '0');
  } else {
    // Apply stylesheet
    const link = document.createElement('link');
    link.id = 'page-style';
    link.rel = 'stylesheet';
    link.href = 'css/style.css';
    document.head.appendChild(link);

    // Remove legacy attributes
    table.removeAttribute('border');
    table.removeAttribute('cellpadding');
    table.removeAttribute('cellspacing');
  }
});
