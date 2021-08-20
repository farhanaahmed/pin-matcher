//create a function to get a pin with four digit
function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return generatePin();
    }

}
// create a function to display pin
function displayPin() {
    const generatedPin = generatePin();
    document.getElementById('display-pin').value = generatedPin;

}
//handle key-pad click event
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;

    }

});
//create a function to verify generated and typed pins
function verifyPin() {
    const generatedPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failMessage = document.getElementById('notify-fail');
    if (generatedPin == typedPin) {

        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }
    else {

        failMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}