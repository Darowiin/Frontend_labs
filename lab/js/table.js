function addRow() {
    const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    const rowCount = table.rows.length + 1;

    const name = document.getElementById("name").value;
    const studentId = document.getElementById("studentId").value;
    const group = document.getElementById("group").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const admissionForm = document.getElementById("admissionForm").value;
    const specialization = document.getElementById("specialization").value;

    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${name}</td>
        <td>${studentId}</td>
        <td>${group}</td>
        <td>${gender}</td>
        <td>${age}</td>
        <td>${admissionForm}</td>
        <td>${specialization}</td>
    `;

    document.getElementById("studentForm").reset();
}