const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${amount}</td>
        <td>${category}</td>
        <td>${date}</td>
        <td><button onclick="editExpense(this)">Edit</button> <button onclick="deleteExpense(this)">Delete</button></td>
    `;
    expenseList.appendChild(newRow);

    expenseForm.reset();
});

function editExpense(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');

    const amount = cells[0].innerText;
    const category = cells[1].innerText;
    const date = cells[2].innerText;

    document.getElementById('amount').value = amount;
    document.getElementById('category').value = category;
    document.getElementById('date').value = date;

    row.remove();
}

function deleteExpense(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}
