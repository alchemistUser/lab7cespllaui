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
    qualificationRemarks: "Good standing",
    paymentPlan: "",
    parent: {
      name: "Lourdes Santos",
      relationship: "Mother",
      contact: "09123456789",
      email: "lourdes.santos@email.com",
      address: "123 Rizal St, Manila"
    }
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
    qualificationRemarks: "Has balance",
    paymentPlan: "",
    parent: {
      name: "Roberto Reyes",
      relationship: "Father",
      contact: "09234567890",
      email: "roberto.reyes@email.com",
      address: "456 Mabini Ave, QC"
    }
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
    qualificationRemarks: "Incomplete docs",
    paymentPlan: "",
    parent: {
      name: "Grace Lim",
      relationship: "Mother",
      contact: "09345678901",
      email: "grace.lim@email.com",
      address: "789 Ayala Blvd, Makati"
    }
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
    qualificationRemarks: "Good standing",
    paymentPlan: "",
    parent: {
      name: "Carmen Gonzales",
      relationship: "Mother",
      contact: "09456789012",
      email: "carmen.g@email.com",
      address: "101 Ortigas Ave, Pasig"
    }
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
    qualificationRemarks: "Awaiting payment",
    paymentPlan: "",
    parent: {
      name: "Antonio Dela Cruz",
      relationship: "Father",
      contact: "09567890123",
      email: "a.delacruz@email.com",
      address: "202 Bonifacio St, Taguig"
    }
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
    qualificationRemarks: "Good standing",
    paymentPlan: "",
    parent: {
      name: "Elena Fernandez",
      relationship: "Mother",
      contact: "09678901234",
      email: "elena.f@email.com",
      address: "303 Shaw Blvd, Mandaluyong"
    }
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
    qualificationRemarks: "Medical clearance pending",
    paymentPlan: "",
    parent: {
      name: "Daniel Bautista",
      relationship: "Father",
      contact: "09789012345",
      email: "d.bautista@email.com",
      address: "404 Taft Ave, Pasay"
    }
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
    qualificationRemarks: "Good standing",
    paymentPlan: "",
    parent: {
      name: "Maria Torres",
      relationship: "Mother",
      contact: "09890123456",
      email: "m.torres@email.com",
      address: "505 Macario St, Valenzuela"
    }
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
    qualificationRemarks: "Partial payment",
    paymentPlan: "",
    parent: {
      name: "Carlos Mercado",
      relationship: "Father",
      contact: "09901234567",
      email: "c.mercado@email.com",
      address: "606 Dr A. Santos Ave, Parañaque"
    }
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
    qualificationRemarks: "Good standing",
    paymentPlan: "",
    parent: {
      name: "Lucia Castillo",
      relationship: "Mother",
      contact: "09012345678",
      email: "l.castillo@email.com",
      address: "707 Alabang-Zapote Rd, Las Piñas"
    }
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
    qualificationRemarks: "Transcript incomplete",
    paymentPlan: "",
    parent: {
      name: "Ramon Navarro",
      relationship: "Father",
      contact: "09123450987",
      email: "r.navarro@email.com",
      address: "808 Shoe Ave, Marikina"
    }
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
    qualificationRemarks: "Good standing",
    paymentPlan: "",
    parent: {
      name: "Anna Sarmiento",
      relationship: "Mother",
      contact: "09234561098",
      email: "a.sarmiento@email.com",
      address: "909 National Rd, Muntinlupa"
    }
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
    qualificationRemarks: "Balance due",
    paymentPlan: "",
    parent: {
      name: "Felipe Ocampo",
      relationship: "Father",
      contact: "09345672109",
      email: "f.ocampo@email.com",
      address: "1010 Tanza Rd, Navotas"
    }
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
    qualificationRemarks: "Good standing",
    paymentPlan: "",
    parent: {
      name: "Isabel Perez",
      relationship: "Mother",
      contact: "09456783210",
      email: "i.perez@email.com",
      address: "1111 Gen T. de Leon St, Malabon"
    }
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
    qualificationRemarks: "Parent meeting scheduled",
    paymentPlan: "",
    parent: {
      name: "Jose Romero",
      relationship: "Father",
      contact: "09567894321",
      email: "j.romero@email.com",
      address: "1212 A. Mabini St, Caloocan"
    }
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
    qualificationRemarks: "Good standing",
    paymentPlan: "",
    parent: {
      name: "Cristina Villanueva",
      relationship: "Mother",
      contact: "09678905432",
      email: "c.villanueva@email.com",
      address: "1313 N. Domingo St, San Juan"
    }
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
    qualificationRemarks: "Scholarship under review",
    paymentPlan: "",
    parent: {
      name: "Rosa Gutierrez",
      relationship: "Mother",
      contact: "09789016543",
      email: "r.gutierrez@email.com",
      address: "1414 Pioneer St, Mandaluyong"
    }
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
    qualificationRemarks: "Good standing",
    paymentPlan: "",
    parent: {
      name: "Mark Dizon",
      relationship: "Father",
      contact: "09890127654",
      email: "m.dizon@email.com",
      address: "1515 C. Raymundo Ave, Pasig"
    }
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
    qualificationRemarks: "Transfer verification pending",
    paymentPlan: "",
    parent: {
      name: "Lina Manalo",
      relationship: "Mother",
      contact: "09901238765",
      email: "l.manalo@email.com",
      address: "1616 Commonwealth Ave, QC"
    }
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
    qualificationRemarks: "Good standing",
    paymentPlan: "",
    parent: {
      name: "Eduardo Aquino",
      relationship: "Father",
      contact: "09012349876",
      email: "e.aquino@email.com",
      address: "1717 España Blvd, Manila"
    }
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

// ===== TABLE POPULATION (supports filtering) =====
function updateTable(filteredData = students) {
  const displayData = filteredData.length < 12
    ? [...filteredData, ...Array(12 - filteredData.length).fill({
        gradeLevel: '', lrn: '', status: '', firstName: '', lastName: '', paymentPlan: ''
      })]
    : filteredData;

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

document.addEventListener('DOMContentLoaded', () => {
  updateTable();
});

// ===== SEARCH & REFRESH BUTTONS =====
const searchInput = document.getElementById('searchbar');
const searchButton = document.getElementById('search-button');
const refreshButton = document.getElementById('refreshbutton');

function performSearch() {
  const query = searchInput.value.trim().toLowerCase();

  if (query === '') {
    updateTable();
    return;
  }

  const filtered = students.filter(student =>
    student.firstName.toLowerCase().includes(query) ||
    student.lastName.toLowerCase().includes(query) ||
    student.lrn.includes(query) ||
    student.gradeLevel.toLowerCase().includes(query)
  );

  updateTable(filtered);
}

searchButton?.addEventListener('click', performSearch);

searchInput?.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    performSearch();
  }
});

refreshButton?.addEventListener('click', () => {
  if (searchInput) searchInput.value = '';
  updateTable();
});

// ===== STUDENT EDIT / VIEW HANDLER =====
document.getElementById('student-table-body').addEventListener('click', (e) => {
  if (e.target.classList.contains('action-btn')) {
    const row = e.target.closest('tr');
    const lrn = row.children[1].textContent.trim();
    const student = students.find(s => s.lrn === lrn);
    if (student) {
      openStudentForEdit(student);
    }
  }
});

// ===== NEW/EDIT STUDENT MODAL =====
const newStudentModal = document.getElementById('newStudentModal');
const newStudentBtn = document.getElementById('newStudentBtn');
const closeNewStudent = document.getElementById('closeNewStudent');
const cancelNewStudent = document.getElementById('cancelNewStudent');
const nextNewStudent = document.getElementById('nextNewStudent');
const backNewStudent = document.getElementById('backNewStudent');
const saveNewStudent = document.getElementById('saveNewStudent');
const newStudentStep = document.getElementById('newStudentStep');

let currentNewStep = 1;
let editMode = false;
let currentEditStudentId = null;

function openStudentForEdit(student) {
  editMode = true;
  currentEditStudentId = student.id;

  // Student info (Step 1)
  document.getElementById('newFirstName').value = student.firstName;
  // Note: we store full name as firstName + lastName, so reconstruct
  document.getElementById('newDOB').value = student.dateOfBirth;
  document.getElementById('newPOB').value = student.placeOfBirth;
  document.getElementById('newGender').value = student.gender;
  document.getElementById('newAddress').value = student.address;
  document.getElementById('newNationality').value = student.nationality;
  document.getElementById('newReligion').value = student.religion;
  document.getElementById('newGradeLevel').value = student.gradeLevel;
  document.getElementById('newPrevSchool').value = student.previousSchool;
  document.getElementById('newLRN').value = student.lrn;

  // Parent info (Step 2)
  const parent = student.parent || {};
  document.getElementById('parentName').value = parent.name || '';
  document.getElementById('parentRelationship').value = parent.relationship || '';
  document.getElementById('parentContact').value = parent.contact || '';
  document.getElementById('parentEmail').value = parent.email || '';
  document.getElementById('parentAddress').value = parent.address || '';

  currentNewStep = 1;
  showNewStep(1);
  newStudentModal.classList.add('active');
  document.querySelector('.modal-header h2').textContent = 'Edit Student';
}

newStudentBtn.addEventListener('click', () => {
  editMode = false;
  currentEditStudentId = null;
  currentNewStep = 1;
  showNewStep(1);
  newStudentModal.classList.add('active');
  document.querySelector('.modal-header h2').textContent = 'New Student Enrollment';
  
  // Clear fields
  document.querySelectorAll('#newStudentModal input').forEach(input => input.value = '');
});

function showNewStep(step) {
  document.querySelectorAll('#newStudentModal .form-step').forEach(s => s.classList.remove('active'));
  document.getElementById(`newStep${step}`).classList.add('active');
  
  if (step === 1) {
    newStudentStep.textContent = editMode ? 'Student Information' : 'Student Information';
    backNewStudent.style.display = 'none';
    nextNewStudent.style.display = 'inline-block';
    saveNewStudent.style.display = 'none';
  } else if (step === 2) {
    newStudentStep.textContent = editMode ? 'Parent Information' : 'Parent Information';
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
  const firstNameInput = document.getElementById('newFirstName').value.trim();
  const lrn = document.getElementById('newLRN').value.trim();
  
  if (!firstNameInput || !lrn) {
    alert('First Name and LRN are required.');
    return;
  }

  const nameParts = firstNameInput.split(' ');
  const actualFirstName = nameParts[0] || firstNameInput;
  const lastName = nameParts.slice(1).join(' ') || 'N/A';
  
  const studentData = {
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
    status: editMode ? students.find(s => s.id === currentEditStudentId)?.status || 'pending' : 'pending',
    balanceStanding: editMode ? students.find(s => s.id === currentEditStudentId)?.balanceStanding || 0 : 0,
    qualificationRemarks: editMode ? students.find(s => s.id === currentEditStudentId)?.qualificationRemarks || 'Updated' : 'New student',
    paymentPlan: editMode ? students.find(s => s.id === currentEditStudentId)?.paymentPlan || '' : '',
    parent: {
      name: document.getElementById('parentName').value,
      relationship: document.getElementById('parentRelationship').value,
      contact: document.getElementById('parentContact').value,
      email: document.getElementById('parentEmail').value,
      address: document.getElementById('parentAddress').value
    }
  };

  if (editMode) {
    // Update existing
    const index = students.findIndex(s => s.id === currentEditStudentId);
    if (index !== -1) {
      students[index] = { ...students[index], ...studentData };
    }
    alert('Student updated successfully!');
  } else {
    // Add new
    studentData.id = nextId++;
    students.push(studentData);
    alert('New student enrolled successfully!');
  }

  updateTable();
  closeNewStudentModal();
});

function closeNewStudentModal() {
  newStudentModal.classList.remove('active');
  document.querySelectorAll('#newStudentModal input').forEach(input => input.value = '');
  currentNewStep = 1;
  editMode = false;
  currentEditStudentId = null;
  showNewStep(1);
  document.querySelector('.modal-header h2').textContent = 'New Student Enrollment';
}

closeNewStudent.addEventListener('click', closeNewStudentModal);
cancelNewStudent.addEventListener('click', closeNewStudentModal);

newStudentModal.addEventListener('click', (e) => {
  if (e.target === newStudentModal) {
    closeNewStudentModal();
  }
});

// ===== OLD STUDENT MODAL (unchanged except small tweak) =====
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
let selectedPaymentPlan = '';
let currentOldStudentData = null;

oldStudentBtn.addEventListener('click', () => {
  currentOldStep = 1;
  showOldStep(1);
  oldStudentModal.classList.add('active');
  document.getElementById('oldLRN').value = '';
  document.getElementById('balanceStanding').value = '';
  document.getElementById('qualificationRemarks').value = '';
  selectedPaymentPlan = '';
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
  if (!selectedPaymentPlan.trim()) {
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
});

function closeOldStudentModal() {
  oldStudentModal.classList.remove('active');
  document.getElementById('oldLRN').value = '';
  document.getElementById('balanceStanding').value = '';
  document.getElementById('qualificationRemarks').value = '';
  document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
  document.getElementById('breakdownBox').innerHTML = '<p style="color: #999; text-align: center; margin: 60px 0; font-size: 14px;">Select a payment plan to view breakdown</p>';
  
  selectedPaymentPlan = '';
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