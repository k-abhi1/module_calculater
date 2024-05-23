export function handleModuloCalculation() {
    const numInput = document.getElementById('num');
    const modInput = document.getElementById('mod');
    const resultElement = document.getElementById('result');

    const num = parseInt(numInput.value);
    const mod = parseInt(modInput.value);

    if (!isNaN(num) && !isNaN(mod) && mod !== 0) {
        const result = calculateModulo(num, mod);
        resultElement.textContent = `Result: ${result}`;
    } else {
        resultElement.textContent = 'Please enter valid numbers, and modulus should not be zero.';
    }
}

function calculateModulo(num, mod) {
    return num % mod;
}
