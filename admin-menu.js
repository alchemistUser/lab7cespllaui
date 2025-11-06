// ===== DATA STORAGE (IN MEMORY) =====
// ===== DATA STORAGE (IN MEMORY) =====
let students = [
  { 
    id: 1,
    gradeLevel: "Grade 7", 
    lrn: "123456789012", 
    status: "enrolled", 
    firstName: "Maria", 
    lastName: "Santos",
    dateOfBirth: "2010-05-15",
    placeOfBirth: "Manila",
    gender: "Female",
    address: "123 Rizal St, Manila",
    nationality: "Filipino",
    religion: "Catholic",
    previousSchool: "ABC Elementary",
    balanceStanding: 0,
    qualificationRemarks: "Good standing"
  },
  { 
    id: 2,
    gradeLevel: "Grade 8", 
    lrn: "234567890123", 
    status: "pending", 
    firstName: "Juan", 
    lastName: "Reyes",
    dateOfBirth: "2009-08-20",
    placeOfBirth: "Quezon City",
    gender: "Male",
    address: "456 Mabini Ave, QC",
    nationality: "Filipino",
    religion: "Catholic",
    previousSchool: "XYZ Elementary",
    balanceStanding: 5000,
    qualificationRemarks: "Has balance"
  },
  { 
    id: 3,
    gradeLevel: "Grade 9", 
    lrn: "345678901234", 
    status: "review", 
    firstName: "Ana", 
    lastName: "Lim",
    dateOfBirth: "2008-03-10",
    placeOfBirth: "Makati",
    gender: "Female",
    address: "789 Ayala Blvd, Makati",
    nationality: "Filipino",
    religion: "Protestant",
    previousSchool: "Makati Central ES",
    balanceStanding: 1200,
    qualificationRemarks: "Incomplete docs"
  },
  { 
    id: 4,
    gradeLevel: "Grade 10", 
    lrn: "456789012345", 
    status: "enrolled", 
    firstName: "Luis", 
    lastName: "Gonzales",
    dateOfBirth: "2007-11-22",
    placeOfBirth: "Pasig",
    gender: "Male",
    address: "101 Ortigas Ave, Pasig",
    nationality: "Filipino",
    religion: "Catholic",
    previousSchool: "Pasig City ES",
    balanceStanding: 0,
    qualificationRemarks: "Good standing"
  },
  { 
    id: 5,
    gradeLevel: "Grade 7", 
    lrn: "567890123456", 
    status: "pending", 
    firstName: "Carla", 
    lastName: "Dela Cruz",
    dateOfBirth: "2010-07-05",
    placeOfBirth: "Taguig",
    gender: "Female",
    address: "202 Bonifacio St, Taguig",
    nationality: "Filipino",
    religion: "Iglesia Ni Cristo",
    previousSchool: "Taguig Elementary",
    balanceStanding: 3000,
    qualificationRemarks: "Awaiting payment"
  },
  { 
    id: 6,
    gradeLevel: "Grade 8", 
    lrn: "678901234567", 
    status: "enrolled", 
    firstName: "Miguel", 
    lastName: "Fernandez",
    dateOfBirth: "2009-01-30",
    placeOfBirth: "Mandaluyong",
    gender: "Male",
    address: "303 Shaw Blvd, Mandaluyong",
    nationality: "Filipino",
    religion: "Catholic",
    previousSchool: "Shaw ES",
    balanceStanding: 0,
    qualificationRemarks: "Good standing"
  },
  { 
    id: 7,
    gradeLevel: "Grade 9", 
    lrn: "789012345678", 
    status: "review", 
    firstName: "Sophia", 
    lastName: "Bautista",
    dateOfBirth: "2008-09-14",
    placeOfBirth: "Pasay",
    gender: "Female",
    address: "404 Taft Ave, Pasay",
    nationality: "Filipino",
    religion: "Baptist",
    previousSchool: "Pasay City ES",
    balanceStanding: 2500,
    qualificationRemarks: "Medical clearance pending"
  },
  { 
    id: 8,
    gradeLevel: "Grade 10", 
    lrn: "890123456789", 
    status: "enrolled", 
    firstName: "Rafael", 
    lastName: "Torres",
    dateOfBirth: "2007-04-18",
    placeOfBirth: "Valenzuela",
    gender: "Male",
    address: "505 Macario St, Valenzuela",
    nationality: "Filipino",
    religion: "Catholic",
    previousSchool: "Valenzuela North ES",
    balanceStanding: 0,
    qualificationRemarks: "Good standing"
  },
  { 
    id: 9,
    gradeLevel: "Grade 7", 
    lrn: "901234567890", 
    status: "pending", 
    firstName: "Isabel", 
    lastName: "Mercado",
    dateOfBirth: "2010-12-03",
    placeOfBirth: "Parañaque",
    gender: "Female",
    address: "606 Dr A. Santos Ave, Parañaque",
    nationality: "Filipino",
    religion: "Catholic",
    previousSchool: "San Dionisio ES",
    balanceStanding: 4200,
    qualificationRemarks: "Partial payment"
  },
  { 
    id: 10,
    gradeLevel: "Grade 8", 
    lrn: "012345678901", 
    status: "enrolled", 
    firstName: "Daniel", 
    lastName: "Castillo",
    dateOfBirth: "2009-06-25",
    placeOfBirth: "Las Piñas",
    gender: "Male",
    address: "707 Alabang-Zapote Rd, Las Piñas",
    nationality: "Filipino",
    religion: "Catholic",
    previousSchool: "Las Piñas Central ES",
    balanceStanding: 0,
    qualificationRemarks: "Good standing"
  },
  { 
    id: 11,
    gradeLevel: "Grade 9", 
    lrn: "112233445566", 
    status: "review", 
    firstName: "Jasmine", 
    lastName: "Navarro",
    dateOfBirth: "2008-02-11",
    placeOfBirth: "Marikina",
    gender: "Female",
    address: "808 Shoe Ave, Marikina",
    nationality: "Filipino",
    religion: "Seventh-day Adventist",
    previousSchool: "Marikina Heights ES",
    balanceStanding: 1800,
    qualificationRemarks: "Transcript incomplete"
  },
  { 
    id: 12,
    gradeLevel: "Grade 10", 
    lrn: "223344556677", 
    status: "enrolled", 
    firstName: "Ethan", 
    lastName: "Sarmiento",
    dateOfBirth: "2007-10-07",
    placeOfBirth: "Muntinlupa",
    gender: "Male",
    address: "909 National Rd, Muntinlupa",
    nationality: "Filipino",
    religion: "Catholic",
    previousSchool: "Putatan Elementary",
    balanceStanding: 0,
    qualificationRemarks: "Good standing"
  },
  { 
    id: 13,
    gradeLevel: "Grade 7", 
    lrn: "334455667788", 
    status: "pending", 
    firstName: "Lara", 
    lastName: "Ocampo",
    dateOfBirth: "2010-08-19",
    placeOfBirth: "Navotas",
    gender: "Female",
    address: "1010 Tanza Rd, Navotas",
    nationality: "Filipino",
    religion: "Catholic",
    previousSchool: "Navotas Central ES",
    balanceStanding: 3700,
    qualificationRemarks: "Balance due"
  },
  { 
    id: 14,
    gradeLevel: "Grade 8", 
    lrn: "445566778899", 
    status: "enrolled", 
    firstName: "Gabriel", 
    lastName: "Perez",
    dateOfBirth: "2009-12-12",
    placeOfBirth: "Malabon",
    gender: "Male",
    address: "1111 Gen T. de Leon St, Malabon",
    nationality: "Filipino",
    religion: "Catholic",
    previousSchool: "Malabon North ES",
    balanceStanding: 0,
    qualificationRemarks: "Good standing"
  },
  { 
    id: 15,
    gradeLevel: "Grade 9", 
    lrn: "556677889900", 
    status: "review", 
    firstName: "Nina", 
    lastName: "Romero",
    dateOfBirth: "2008-07-29",
    placeOfBirth: "Caloocan",
    gender: "Female",
    address: "1212 A. Mabini St, Caloocan",
    nationality: "Filipino",
    religion: "Methodist",
    previousSchool: "Grace Park ES",
    balanceStanding: 950,
    qualificationRemarks: "Parent meeting scheduled"
  },
  { 
    id: 16,
    gradeLevel: "Grade 10", 
    lrn: "667788990011", 
    status: "enrolled", 
    firstName: "Leo", 
    lastName: "Villanueva",
    dateOfBirth: "2007-05-04",
    placeOfBirth: "San Juan",
    gender: "Male",
    address: "1313 N. Domingo St, San Juan",
    nationality: "Filipino",
    religion: "Catholic",
    previousSchool: "San Juan Elementary",
    balanceStanding: 0,
    qualificationRemarks: "Good standing"
  },
  { 
    id: 17,
    gradeLevel: "Grade 7", 
    lrn: "778899001122", 
    status: "pending", 
    firstName: "Maya", 
    lastName: "Gutierrez",
    dateOfBirth: "2010-01-23",
    placeOfBirth: "Mandaluyong",
    gender: "Female",
    address: "1414 Pioneer St, Mandaluyong",
    nationality: "Filipino",
    religion: "Catholic",
    previousSchool: "Pioneer ES",
    balanceStanding: 2800,
    qualificationRemarks: "Scholarship under review"
  },
  { 
    id: 18,
    gradeLevel: "Grade 8", 
    lrn: "889900112233", 
    status: "enrolled", 
    firstName: "Ian", 
    lastName: "Dizon",
    dateOfBirth: "2009-03-31",
    placeOfBirth: "Pasig",
    gender: "Male",
    address: "1515 C. Raymundo Ave, Pasig",
    nationality: "Filipino",
    religion: "Catholic",
    previousSchool: "Rosario ES",
    balanceStanding: 0,
    qualificationRemarks: "Good standing"
  },
  { 
    id: 19,
    gradeLevel: "Grade 9", 
    lrn: "990011223344", 
    status: "review", 
    firstName: "Ella", 
    lastName: "Manalo",
    dateOfBirth: "2008-11-09",
    placeOfBirth: "Quezon City",
    gender: "Female",
    address: "1616 Commonwealth Ave, QC",
    nationality: "Filipino",
    religion: "Iglesia Ni Cristo",
    previousSchool: "Commonwealth ES",
    balanceStanding: 0,
    qualificationRemarks: "Transfer verification pending"
  },
  { 
    id: 20,
    gradeLevel: "Grade 10", 
    lrn: "001122334455", 
    status: "enrolled", 
    firstName: "Ryan", 
    lastName: "Aquino",
    dateOfBirth: "2007-09-16",
    placeOfBirth: "Manila",
    gender: "Male",
    address: "1717 España Blvd, Manila",
    nationality: "Filipino",
    religion: "Catholic",
    previousSchool: "Sampaloc ES",
    balanceStanding: 0,
    qualificationRemarks: "Good standing"
  }
];

let nextId = 21;

// ===== SIDEBAR FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', () => {
  const group = document.getElementById('sidebarButtonGroup');
  if (!group) return;

  const buttons = group.querySelectorAll('button');

  if (buttons.length > 0) {
    buttons[0].classList.add('active');
  }

  group.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      buttons.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
    }
  });
});

// ===== TABLE POPULATION =====
function updateTable() {
  const displayData = students.length < 12
    ? [...students, ...Array(12 - students.length).fill({
        gradeLevel: '', lrn: '', status: '', firstName: '', lastName: ''
      })]
    : students;

  const tbody = document.getElementById('student-table-body');
  if (!tbody) return;

  tbody.innerHTML = displayData.map(student => {
    const isEmpty = !student.firstName && !student.lrn;
    const rowClass = isEmpty ? 'empty-row' : '';
    return `
      <tr class="${rowClass}">
        <td>${student.gradeLevel || ''}</td>
        <td>${student.lrn || ''}</td> 
        <td>${student.status ? `<span class="status-badge ${student.status}">${student.status.charAt(0).toUpperCase() + student.status.slice(1)}</span>` : ''}</td>
        <td>${student.firstName || ''}</td>
        <td>${student.lastName || ''}</td>
        <td>${student.firstName || student.lrn ? '<button class="action-btn">Open</button>' : ''}</td>
      </tr>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', updateTable);

// ===== REFRESH BUTTON =====
document.getElementById('refreshbutton')?.addEventListener('click', updateTable);

// ===== NEW STUDENT MODAL =====
const newStudentModal = document.getElementById('newStudentModal');
const newStudentBtn = document.getElementById('newStudentBtn');
const closeNewStudent = document.getElementById('closeNewStudent');
const cancelNewStudent = document.getElementById('cancelNewStudent');
const nextNewStudent = document.getElementById('nextNewStudent');
const backNewStudent = document.getElementById('backNewStudent');
const saveNewStudent = document.getElementById('saveNewStudent');
const newStudentStep = document.getElementById('newStudentStep');

let currentNewStep = 1;

newStudentBtn.addEventListener('click', () => {
  currentNewStep = 1;
  showNewStep(1);
  newStudentModal.classList.add('active');
});

function showNewStep(step) {
  document.querySelectorAll('#newStudentModal .form-step').forEach(s => s.classList.remove('active'));
  document.getElementById(`newStep${step}`).classList.add('active');
  
  if (step === 1) {
    newStudentStep.textContent = 'Student Information';
    backNewStudent.style.display = 'none';
    nextNewStudent.style.display = 'inline-block';
    saveNewStudent.style.display = 'none';
  } else if (step === 2) {
    newStudentStep.textContent = 'Parent Information';
    backNewStudent.style.display = 'inline-block';
    nextNewStudent.style.display = 'none';
    saveNewStudent.style.display = 'inline-block';
  }
}

nextNewStudent.addEventListener('click', () => {
  currentNewStep++;
  showNewStep(currentNewStep);
});

backNewStudent.addEventListener('click', () => {
  currentNewStep--;
  showNewStep(currentNewStep);
});

saveNewStudent.addEventListener('click', () => {
  const firstName = document.getElementById('newFirstName').value;
  const lrn = document.getElementById('newLRN').value;
  
  // Extract last name from full name if needed (split by space)
  const nameParts = firstName.split(' ');
  const actualFirstName = nameParts[0] || firstName;
  const lastName = nameParts.slice(1).join(' ') || 'N/A';
  
  const newStudent = {
    id: nextId++,
    firstName: actualFirstName,
    lastName: lastName,
    dateOfBirth: document.getElementById('newDOB').value,
    placeOfBirth: document.getElementById('newPOB').value,
    gender: document.getElementById('newGender').value,
    address: document.getElementById('newAddress').value,
    nationality: document.getElementById('newNationality').value,
    religion: document.getElementById('newReligion').value,
    gradeLevel: document.getElementById('newGradeLevel').value,
    previousSchool: document.getElementById('newPrevSchool').value,
    lrn: lrn,
    status: 'pending',
    balanceStanding: 0,
    qualificationRemarks: 'New student',
    parent: {
      name: document.getElementById('parentName').value,
      relationship: document.getElementById('parentRelationship').value,
      contact: document.getElementById('parentContact').value,
      email: document.getElementById('parentEmail').value,
      address: document.getElementById('parentAddress').value
    }
  };

  students.push(newStudent);
  updateTable();
  closeNewStudentModal();
  
  alert('New student enrolled successfully!');
  console.log('Students:', students);
});

function closeNewStudentModal() {
  newStudentModal.classList.remove('active');
  document.querySelectorAll('#newStudentModal input').forEach(input => input.value = '');
  currentNewStep = 1;
  showNewStep(1);
}

closeNewStudent.addEventListener('click', closeNewStudentModal);
cancelNewStudent.addEventListener('click', closeNewStudentModal);

newStudentModal.addEventListener('click', (e) => {
  if (e.target === newStudentModal) {
    closeNewStudentModal();
  }
});

// ===== OLD STUDENT MODAL =====
const oldStudentModal = document.getElementById('oldStudentModal');
const oldStudentBtn = document.getElementById('oldStudentBtn');
const closeOldStudent = document.getElementById('closeOldStudent');
const cancelOldStudent = document.getElementById('cancelOldStudent');
const checkLRN = document.getElementById('checkLRN');
const checkLRNMain = document.getElementById('checkLRNMain');
const nextOldStudent = document.getElementById('nextOldStudent');
const backOldStudent = document.getElementById('backOldStudent');
const saveOldStudent = document.getElementById('saveOldStudent');
const oldStudentStep = document.getElementById('oldStudentStep');

let currentOldStep = 1;
let selectedPaymentPlan = null;
let currentOldStudentData = null;

oldStudentBtn.addEventListener('click', () => {
  currentOldStep = 1;
  showOldStep(1);
  oldStudentModal.classList.add('active');
  document.getElementById('oldLRN').value = '';
  document.getElementById('balanceStanding').value = '';
  document.getElementById('qualificationRemarks').value = '';
  selectedPaymentPlan = null;
  currentOldStudentData = null;
});

function showOldStep(step) {
  document.querySelectorAll('#oldStudentModal .form-step').forEach(s => s.classList.remove('active'));
  document.getElementById(`oldStep${step}`).classList.add('active');
  
  if (step === 1) {
    oldStudentStep.textContent = 'Existing Information';
    backOldStudent.style.display = 'none';
    nextOldStudent.style.display = 'none';
    saveOldStudent.style.display = 'none';
  } else if (step === 2) {
    oldStudentStep.textContent = 'Payment Plan';
    backOldStudent.style.display = 'inline-block';
    nextOldStudent.style.display = 'none';
    saveOldStudent.style.display = 'inline-block';
  }
}

function checkLRNFunction() {
  const lrn = document.getElementById('oldLRN').value;
  
  if (!lrn) {
    alert('Please enter an LRN');
    return;
  }
  
  const student = students.find(s => s.lrn === lrn);
  
  if (student) {
    document.getElementById('balanceStanding').value = student.balanceStanding 
      ? `₱${student.balanceStanding.toFixed(2)}` 
      : '₱0.00';
    document.getElementById('qualificationRemarks').value = student.qualificationRemarks || 'Good standing';
    
    currentOldStudentData = student;
    nextOldStudent.style.display = 'inline-block';
    
    alert(`Student found: ${student.firstName} ${student.lastName}`);
  } else {
    document.getElementById('balanceStanding').value = '';
    document.getElementById('qualificationRemarks').value = '';
    currentOldStudentData = null;
    nextOldStudent.style.display = 'none';
    
    alert('LRN not found. Please check the number or enroll as a new student.');
  }
}

checkLRN.addEventListener('click', checkLRNFunction);
checkLRNMain.addEventListener('click', checkLRNFunction);

nextOldStudent.addEventListener('click', () => {
  currentOldStep++;
  showOldStep(currentOldStep);
});

backOldStudent.addEventListener('click', () => {
  currentOldStep--;
  showOldStep(currentOldStep);
});

// Payment plan selection
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.payment-option').forEach(option => {
    option.addEventListener('click', function() {
      document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
      this.classList.add('selected');
      selectedPaymentPlan = this.dataset.plan;
      updateBreakdown(selectedPaymentPlan);
    });
  });
});

function updateBreakdown(plan) {
  const breakdownBox = document.getElementById('breakdownBox');
  
  const breakdowns = {
    'Quarterly': `
      <p><strong>Total Amount:</strong> ₱20,000.00</p>
      <p><strong>Payment Schedule:</strong></p>
      <ul style="margin: 10px 0; padding-left: 20px;">
        <li>1st Quarter: ₱5,000.00</li>
        <li>2nd Quarter: ₱5,000.00</li>
        <li>3rd Quarter: ₱5,000.00</li>
        <li>4th Quarter: ₱5,000.00</li>
      </ul>
    `,
    'Semi-annual': `
      <p><strong>Total Amount:</strong> ₱20,000.00</p>
      <p><strong>Payment Schedule:</strong></p>
      <ul style="margin: 10px 0; padding-left: 20px;">
        <li>1st Semester: ₱10,000.00</li>
        <li>2nd Semester: ₱10,000.00</li>
      </ul>
    `,
    'Annual': `
      <p><strong>Total Amount:</strong> ₱20,000.00</p>
      <p><strong>Payment Schedule:</strong></p>
      <ul style="margin: 10px 0; padding-left: 20px;">
        <li>Full Payment: ₱20,000.00</li>
        <li><em>Discount: ₱1,000.00</em></li>
        <li><strong>Final Amount: ₱19,000.00</strong></li>
      </ul>
    `
  };
  
  breakdownBox.innerHTML = breakdowns[plan] || '<p style="color: #999;">No breakdown available</p>';
}

saveOldStudent.addEventListener('click', () => {
  if (!selectedPaymentPlan) {
    alert('Please select a payment plan');
    return;
  }
  
  if (!currentOldStudentData) {
    alert('Student data not found');
    return;
  }
  
  const studentIndex = students.findIndex(s => s.id === currentOldStudentData.id);
  if (studentIndex !== -1) {
    students[studentIndex].status = 'enrolled';
    students[studentIndex].paymentPlan = selectedPaymentPlan;
  }
  
  updateTable();
  closeOldStudentModal();
  
  alert(`Student re-enrolled successfully with ${selectedPaymentPlan} payment plan!`);
  console.log('Students:', students);
});

function closeOldStudentModal() {
  oldStudentModal.classList.remove('active');
  document.getElementById('oldLRN').value = '';
  document.getElementById('balanceStanding').value = '';
  document.getElementById('qualificationRemarks').value = '';
  document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
  document.getElementById('breakdownBox').innerHTML = '<p style="color: #999; text-align: center; margin: 60px 0; font-size: 14px;">Select a payment plan to view breakdown</p>';
  
  selectedPaymentPlan = null;
  currentOldStudentData = null;
  currentOldStep = 1;
  showOldStep(1);
}

closeOldStudent.addEventListener('click', closeOldStudentModal);
cancelOldStudent.addEventListener('click', closeOldStudentModal);

oldStudentModal.addEventListener('click', (e) => {
  if (e.target === oldStudentModal) {
    closeOldStudentModal();
  }
});