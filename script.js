const API = "http://localhost:8080/students";
function fetchStudents() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
        let list = document.getElementById("list");
        list.innerHTML = "";

        data.forEach(s => {
            let li = document.createElement("li");
            li.innerHTML = `${s.name} - ${s.course} 
            <button onclick="deleteStudent(${s.id})">Delete</button>`;
            list.appendChild(li);
        });
    });
}

function addStudent() {
    let student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value
    };

    fetch(API, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(student)
    }).then(fetchStudents);
}

function deleteStudent(id) {
    fetch(`${API}/${id}`, { method: "DELETE" })
    .then(fetchStudents);
}

fetchStudents();
