var selectedRow = null;

function onFormSubmit(event) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["class"] = document.getElementById("class").value;
    formData["department"] = document.getElementById("department").value;
    formData["college"] = document.getElementById("college").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.class;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.department;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.college;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("class").value = selectedRow.cells[1].innerHTML;
    document.getElementById("department").value = selectedRow.cells[2].innerHTML;
    document.getElementById("college").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.class;
    selectedRow.cells[2].innerHTML = formData.department;
    selectedRow.cells[3].innerHTML = formData.college;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storelist').deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("name").value = '';
    document.getElementById("class").value = '';
    document.getElementById("department").value = '';
    document.getElementById("college").value = '';
    selectedRow = null;
}
