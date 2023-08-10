function generateRandomBinary() {
    let binaryNumber = '';
    for (let i = 0; i < 2; i++) {
        binaryNumber += Math.random() > 0.5 ? '1' : '0';
    }
    return binaryNumber;
}


function createElements() {
    const table = document.createElement('table');
    const cont = document.querySelector('.container');
    table.className = ['table'];

    for (let i = 0; i < 13; i++) {
        const row = document.createElement('tr');
        row.className = ['table_row']

        for (let j = 0; j < 12; j++) {
            const cell = document.createElement('td');
            cell.className = ['table_data']
            const randomNum = generateRandomBinary().toString().padStart(2, '0'); // Generate random number and pad to two digits
            cell.textContent = randomNum;
            row.appendChild(cell);
        }

        table.appendChild(row);
    };
    
    cont.appendChild(table);
}

createElements();

// Print
const printer = document.querySelector('span');
printer.addEventListener('click', () => {
        window.print();
});
