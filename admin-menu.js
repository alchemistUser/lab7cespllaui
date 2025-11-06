document.addEventListener('DOMContentLoaded', () => {
  const group = document.getElementById('sidebarButtonGroup');
  if (!group) return;

  const buttons = group.querySelectorAll('button');

  // Select the first button by default
  if (buttons.length > 0) {
    buttons[0].classList.add('active');
  }

  // Handle clicks
  group.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      buttons.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
    }
  });
});