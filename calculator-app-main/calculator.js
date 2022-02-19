function input(num) {
    const number = document.getElementById('inputNum').value;
    document.getElementById('inputNum').value = number + num;
}

function clean() {
    document.getElementById('inputNum').value = "";
}

function back() {
    const values = document.getElementById('inputNum').value;
    const newValue = values.slice(0, values.length -1);
    document.getElementById('inputNum').value = newValue;
}

function calculator() {
    const calculate = document.getElementById('inputNum').value;
    document.getElementById('inputNum').value = eval(calculate);
}

document.addEventListener('keypress', (event)=> {
    if(event.key === "Enter") {
        calculator();
    }
});