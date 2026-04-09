const form = document.getElementById("student-form");
const nameInput = document.getElementById("student-name");
const rollInput = document.getElementById("student-roll");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("student-list");
const totalText = document.getElementById("total-count");
const attendanceText = document.getElementById("attendance-count");
const searchBox = document.getElementById("search-box");

let presentCount = 0;

nameInput.addEventListener("input", function () {
    addBtn.disabled = nameInput.value.trim() === "";
});

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let name = nameInput.value;
    let roll = rollInput.value;

    let li = document.createElement("li");
    li.classList.add("student-item");

    let span = document.createElement("span");
    span.textContent = roll + " - " + name;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {
            li.classList.add("present");
        } else {
            li.classList.remove("present");
        }

        updateAttendance();
    });

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.onclick = function () {

        let newRoll = prompt("Enter new roll:", roll);
        let newName = prompt("Enter new name:", name);

        if (newRoll && newName) {
            span.textContent = newRoll + " - " + newName;
        }
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {

        if (confirm("Are you sure you want to delete this student?")) {
            li.remove();
            updateCount();
            updateAttendance();
        }

    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    form.reset();
    addBtn.disabled = true;

    updateCount();
    updateAttendance();
});

function updateCount() {

    let total = document.querySelectorAll(".student-item").length;
    totalText.textContent = "Total students: " + total;

}

function updateAttendance() {

    let students = document.querySelectorAll(".student-item");

    let present = 0;

    students.forEach(function (student) {

        if (student.querySelector("input").checked) {
            present++;
        }

    });

    let absent = students.length - present;

    attendanceText.textContent = "Present: " + present + " , Absent: " + absent;

}

searchBox.addEventListener("input", function () {

    let value = searchBox.value.toLowerCase();

    let students = document.querySelectorAll(".student-item");

    students.forEach(function (student) {

        let text = student.innerText.toLowerCase();

        if (text.includes(value)) {
            student.style.display = "";
        } else {
            student.style.display = "none";
        }

    });

});

document.getElementById("sort-btn").addEventListener("click", function () {

    let students = Array.from(document.querySelectorAll(".student-item"));

    students.sort(function (a, b) {

        let nameA = a.querySelector("span").textContent.toLowerCase();
        let nameB = b.querySelector("span").textContent.toLowerCase();

        return nameA.localeCompare(nameB);

    });

    students.forEach(function (student) {
        list.appendChild(student);
    });

});

document.getElementById("highlight-first").addEventListener("click", function () {

    let students = document.querySelectorAll(".student-item");

    students.forEach(function (s) {
        s.classList.remove("top-student");
    });

    if (students.length > 0) {
        students[0].classList.add("top-student");
    }

});