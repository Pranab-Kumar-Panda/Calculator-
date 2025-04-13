function appendValue(value) {
    document.getElementById('error').style.display = 'none';
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('error').style.display = 'none';
}
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid Calculation');
        }
        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = '';
        document.getElementById('error').style.display = 'block';
    }
}

document.addEventListener("keydown", function(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        appendValue(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});