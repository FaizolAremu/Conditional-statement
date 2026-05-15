const addressInput = document.getElementById('address');
const addressOutput = document.getElementById('addressResult');

function convertAddress() {
    let OriginalAddress = (addressInput.value);
    let lowercaseAddress = OriginalAddress.toLowerCase();
    console.log(lowercaseAddress)

    addressOutput.innerHTML = lowercaseAddress;
}

//Even item discount checker

const itemInput = document.getElementById('item');
const discountOutput = document.getElementById('itemResult');

function checkItems() {
    let itemCount = Number(itemInput.value);

    if (itemCount <= 0) {
        discountOutput.innerHTML = "Please enter a valid number of items.";
    } else if (itemCount % 2 === 0) {
        discountOutput.innerHTML = "Congratulations! You qualify for the special discount.";
    } else {
        discountOutput.innerHTML = "Sorry, you do not qualify for the special discount.";
    }
}

// Temperature Checker
const tempField = document.getElementById('temperatureInput');
const tempOutput = document.getElementById('tempResultText');
const tempbtn = document.getElementById('checkTempBtn');

tempbtn.addEventListener('click', function() {
    let temperature = Number(tempField.value);

    if  (temperature < 19) {
        tempOutput.innerHTML = "Category: Cold";
    } else if (temperature >= 19 && temperature <= 28) {
        tempOutput.innerHTML = "Category: Warm";
    } else {
        tempOutput.innerHTML = "Category: Hot";
    }
});

// BMI Calculator
const weightField = document.getElementById('weightInput');
const heightField = document.getElementById('heightInput');
const bmiOutput = document.getElementById('bmiResultText');
const bmiResult = document.getElementById('bmiTitle');
const bmiBtn = document.getElementById('CalculatebmiBtn');

bmiBtn.addEventListener('click', function() {
    let weight = Number(weightField.value);
    let height = Number(heightField.value);
    let bmi = weight / (height * height);

    if (weight <= 0 || height <= 0) {
        bmiResult.innerHTML = "Invalid Input";
        bmiOutput.innerHTML = "Please enter positive values for weight and height.";
    } else if (bmi < 18.5) {
        bmiResult.innerHTML = "Underweight";
        bmiOutput.innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiResult.innerHTML = "Normal";
        bmiOutput.innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;
    } else if (bmi >= 25 && bmi < 30) {
        bmiResult.innerHTML = "Overweight";
        bmiOutput.innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;
    } else {
        bmiResult.innerHTML = "Obese";
        bmiOutput.innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;
    }
});

// Username Validator
const usernameField = document.getElementById('usernameInput');
const usernameResult = document.getElementById('usernameTitle');
const usernameOutput = document.getElementById('usernameResultText');
const usernameBtn = document.getElementById('validateUsernameBtn');

usernameBtn.addEventListener('click', function() {
    let username = usernameField.value;
    let pattern = /^[a-zA-Z0-9_]+$/;

    if (username.length < 3 || username.length > 15) {
        usernameResult.innerHTML = "Invalid Username";
        usernameOutput.innerHTML = "Username must be between 3 and 15 characters long.";
    } else if (username === "") {
        usernameResult.innerHTML = "Invalid Username";
        usernameOutput.innerHTML = "Username cannot be empty.";
    } else if (pattern.test(username)) {
        usernameResult.innerHTML = "Valid Username";
        usernameOutput.innerHTML = `${username} is accepted.`;
    } else {
        usernameResult.innerHTML = "Invalid Username";
        usernameOutput.innerHTML = "Username can only contain letters, numbers, and underscores.";
    }
});