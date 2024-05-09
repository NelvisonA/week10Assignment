//variable used for the first cells value
let listId = 0;

//an event listener that takes in the button click and adds whatever was-
//written in text box on to the list which orders them from top to bottom
document.getElementById('form-submit').addEventListener('click', () => {
    let test = document.getElementById('table-body').length;
    let table = document.getElementById('table-body');
    let row = table.insertRow(test);
    row.setAttribute('id', `item-${listId++}`);
    row.insertCell(0).innerHTML = listId;
    row.insertCell(1).innerHTML = document.getElementById('text-value').value;
});