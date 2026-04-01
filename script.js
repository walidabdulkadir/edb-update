const addBtn = document.getElementById("add-btn");
const formContainer = document.getElementById("form-container");
const form = document.querySelector(".form-container");

addBtn.onclick = function () {
  formContainer.style.display = "block";
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const image = document.getElementById("image").value;
  const employeeList = document.getElementById("employeeList");
  const li = document.createElement("li");

  // employee name
  const nameText = document.createElement("span");
  nameText.textContent = image + firstName + " " + lastName;

  nameText.classList.add("nameText");

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(nameText);
  li.appendChild(deleteBtn);

  employeeList.appendChild(li);

  form.reset();
  formContainer.style.display = "none";
});
