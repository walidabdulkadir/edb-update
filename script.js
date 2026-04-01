const addBtn = document.getElementById("add-btn");
const formContainer = document.getElementById("form-container");
const form = document.querySelector(".form-container");
const employeeList = document.getElementById("employeeList");
const cancelBtn = document.getElementById("cancelBtn");
const employeeDetails = document.getElementById("employeeDetails");
let employeesData = [];

addBtn.onclick = function () {
  formContainer.style.display = "block";
};

cancelBtn.onclick = function () {
  formContainer.style.display = "none";
};

function showEmployeeDetails(employee) {
  const imageContent = employee.image
    ? `<img src="${employee.image}" alt="${employee["first name"]} ${employee["last name"]}" class="employee-photo" />`
    : '<p class="detail-value">No image provided</p>';

  employeeDetails.innerHTML = `
    <div class="details-card">
      <div class="details-photo">${imageContent}</div>
      <div class="detail-row"><span class="detail-label">First Name</span><span class="detail-value">${employee["first name"] || ""}</span></div>
      <div class="detail-row"><span class="detail-label">Last Name</span><span class="detail-value">${employee["last name"] || ""}</span></div>
      <div class="detail-row"><span class="detail-label">Address</span><span class="detail-value">${employee.address || ""}</span></div>
      <div class="detail-row"><span class="detail-label">Email</span><span class="detail-value">${employee.email || ""}</span></div>
      <div class="detail-row"><span class="detail-label">Phone</span><span class="detail-value">${employee.phone || ""}</span></div>
      <div class="detail-row"><span class="detail-label">Date of Birth</span><span class="detail-value">${employee.DOB || ""}</span></div>
    </div>
  `;
}

function renderEmployeeList() {
  employeeList.innerHTML = "";

  employeesData.forEach(function (employee, index) {
    employeeList.appendChild(createEmployeeListItem(employee, index));
  });
}

function createEmployeeListItem(employee, index) {
  const li = document.createElement("li");
  li.classList.add("employee-item");
  li.onclick = function () {
    showEmployeeDetails(employee);
  };

  const nameText = document.createElement("span");
  nameText.textContent = `${employee["first name"]} ${employee["last name"]}`;
  nameText.classList.add("nameText");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = function (event) {
    event.stopPropagation();
    employeesData.splice(index, 1);
    renderEmployeeList();

    if (employeesData.length > 0) {
      showEmployeeDetails(employeesData[0]);
    } else {
      employeeDetails.innerHTML =
        "<p>Select an employee to view full information.</p>";
    }
  };

  li.appendChild(nameText);
  li.appendChild(deleteBtn);

  return li;
}

function renderEmployees() {
  fetch("data.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Failed to load employee data.");
      }

      return response.json();
    })
    .then(function (employees) {
      employeesData = employees;
      renderEmployeeList();

      if (employees.length > 0) {
        showEmployeeDetails(employees[0]);
      }
    })
    .catch(function (error) {
      employeeList.innerHTML = "<li>Unable to load employees.</li>";
      console.error(error);
    });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const imageFile = document.getElementById("image").files[0];
  const employee = {
    "first name": document.getElementById("firstName").value,
    "last name": document.getElementById("lastName").value,
    address: document.getElementById("address").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    DOB: document.getElementById("dob").value,
    image: imageFile ? URL.createObjectURL(imageFile) : "",
  };

  employeesData.push(employee);
  renderEmployeeList();
  showEmployeeDetails(employee);

  form.reset();
  formContainer.style.display = "none";
});

renderEmployees();
