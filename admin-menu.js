// Sidebar button group functionality
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

// Table population

document.addEventListener('DOMContentLoaded', () => {
  const students = [
    { gradeLevel: "Grade 7", lrn: "123456789012", status: "enrolled", firstName: "Maria", lastName: "Santos" },
    { gradeLevel: "Grade 8", lrn: "234567890123", status: "pending", firstName: "Juan", lastName: "Reyes" },
    { gradeLevel: "Grade 9", lrn: "345678901234", status: "review", firstName: "Ana", lastName: "Cruz" }
  ];

  const displayData = students.length < 6
    ? [...students, ...Array(6 - students.length).fill({
        gradeLevel: '',
        lrn: '',
        status: '',
        firstName: '',
        lastName: ''
      })]
    : students;

  const tbody = document.getElementById('student-table-body');
  if (!tbody) return;

  tbody.innerHTML = displayData.map(student => {
    const isEmpty = !student.firstName && !student.lrn; // true if empty
    const rowClass = isEmpty ? 'empty-row' : '';
    return `
      <tr class="${rowClass}">
        <td>${student.gradeLevel}</td>
        <td>${student.lrn}</td>
        <td>${student.status ? `<span class="status-badge ${student.status}">${student.status.charAt(0).toUpperCase() + student.status.slice(1)}</span>` : ''}</td>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.firstName || student.lrn ? '<button class="action-btn">Open</button>' : ''}</td>
      </tr>
    `;
  }).join('');
});