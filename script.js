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