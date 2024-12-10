const input = document.getElementById('input');
const output = document.getElementById('output');

const inputAdd = (value) => {
    if (input.textContent === '0') {
        input.textContent = '';
    }

    if (value === 'X') {
        input.textContent += '*';
    } else {
        input.textContent += value;
    }
};

const clearInput = () => {
    input.textContent = '0';
    input.classList.remove('active');
    output.classList.remove('active');
};

const calc = () => {
    try {
        const result = eval(input.textContent);
        output.textContent = result;
        input.classList.add('active');
        output.classList.add('active');
    } catch (error) {
        input.textContent = 'Error';
    }
};


const inputDelete = () =>{
    if (input.textContent.length > 1) {
        input.textContent = input.textContent.slice(0, -1); // Elimina el último carácter
    } else {
        input.textContent = '0';
    }
}