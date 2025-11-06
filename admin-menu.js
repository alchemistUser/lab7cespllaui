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
  // Sample data — can be any length (even 20+ items)
  const students = [
    { gradeLevel: "Grade 7", lrn: "123456789012", status: "enrolled", firstName: "Maria", lastName: "Santos" },
    { gradeLevel: "Grade 8", lrn: "234567890123", status: "pending", firstName: "Juan", lastName: "Reyes" },
    { gradeLevel: "Grade 9", lrn: "345678901234", status: "review", firstName: "Ana", lastName: "Cruz" },
    { gradeLevel: "Grade 10", lrn: "456789012345", status: "enrolled", firstName: "Luis", lastName: "Garcia" },
    { gradeLevel: "Grade 11", lrn: "567890123456", status: "pending", firstName: "Sofia", lastName: "Lopez" },
    { gradeLevel: "Grade 12", lrn: "678901234567", status: "review", firstName: "Miguel", lastName: "Dela Cruz" },
    // Add more items to test scrolling...
  ];

  const tbody = document.getElementById('student-table-body');
  if (!tbody) return;

  // Always render ALL data (scrolling handles visibility)
  tbody.innerHTML = students.map(student => `
    <tr>
      <td>${student.gradeLevel}</td>
      <td>${student.lrn}</td>
      <td>${student.status ? `<span class="status-badge ${student.status}">${student.status.charAt(0).toUpperCase() + student.status.slice(1)}</span>` : ''}</td>
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.firstName ? '<button class="action-btn">Open</button>' : ''}</td>
    </tr>
  `).join('');
});