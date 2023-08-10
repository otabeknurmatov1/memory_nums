// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const table = document.createElement('table');
const cont = document.querySelector('.container')
table.className = ['table']

for (let i = 0; i < 13; i++) {
    const row = document.createElement('tr');
    row.className = ['table_row']

    for (let j = 0; j < 12; j++) {
        const cell = document.createElement('td');
        cell.className = ['table_data']
        const randomNum = getRandomNumber(0, 99).toString().padStart(2, '0'); // Generate random number and pad to two digits
        cell.textContent = randomNum;
        row.appendChild(cell);
    }

    table.appendChild(row);
}

// Append the table to the body of the HTML document
cont.appendChild(table);


// Print
const printer = document.querySelector('span');
printer.addEventListener('click', () => {
        window.print();
        location.reload();
});
