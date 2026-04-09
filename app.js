const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const rollInput = document.getElementById('roll');
const addBtn = document.getElementById('add');
const list = document.getElementById('list');
const toggleBtn = document.getElementById('theme-toggle');

// Enable button
nameInput.addEventListener('input', () => {
    addBtn.disabled = nameInput.value.trim() === '';
});

// Add student
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const roll = rollInput.value.trim();

    if (!name || !roll) return alert("Fill all fields");

    const li = document.createElement('li');

    const text = document.createElement('span');
    text.innerText = `${roll} - ${name}`;

    const check = document.createElement('input');
    check.type = 'checkbox';

    check.addEventListener('change', () => {
        li.classList.toggle('present');
        updateAttendance();
    });

    const edit = document.createElement('button');
    edit.innerText = "Edit";

    edit.onclick = () => {
        const newName = prompt("New Name:", name);
        const newRoll = prompt("New Roll:", roll);

        if (newName && newRoll) {
            text.innerText = `${newRoll} - ${newName}`;
        }
    };

    const del = document.createElement('button');
    del.innerText = "Delete";

    del.onclick = () => {
        li.remove();
        updateCount();
        updateAttendance();
    };

    li.append(text, check, edit, del);
    list.appendChild(li);

    form.reset();
    addBtn.disabled = true;

    updateCount();
    updateAttendance();
});

// Count
function updateCount() {
    document.getElementById('total').innerText =
        `Total: ${document.querySelectorAll('li').length}`;
}

// Attendance
function updateAttendance() {
    const items = document.querySelectorAll('li');
    let present = 0;

    items.forEach(item => {
        if (item.querySelector('input').checked) present++;
    });

    document.getElementById('attendance').innerText =
        `Present: ${present} | Absent: ${items.length - present}`;
}

// Search
document.getElementById('search').addEventListener('input', function () {
    const val = this.value.toLowerCase();

    document.querySelectorAll('li').forEach(li => {
        li.style.display =
            li.innerText.toLowerCase().includes(val) ? 'flex' : 'none';
    });
});

// Sort
document.getElementById('sort').onclick = () => {
    const items = Array.from(list.children);

    items.sort((a, b) =>
        a.innerText.localeCompare(b.innerText)
    );

    items.forEach(i => list.appendChild(i));
};

// Top student
document.getElementById('top').onclick = () => {
    document.querySelectorAll('li').forEach(li =>
        li.classList.remove('top')
    );

    if (list.firstChild)
        list.firstChild.classList.add('top');
};

// Highlight
document.getElementById('highlightAll').onclick = () => {
    document.querySelectorAll('li').forEach(li =>
        li.classList.toggle('highlight')
    );
};

// 🌙 Dark Mode (with save)
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.innerText = "☀️ Light Mode";
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.innerText = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.innerText = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});