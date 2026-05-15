const addressInput = document.getElementById('address');
const addressOutput = document.getElementById('addressResult');

function convertAddress() {
    let OriginalAddress = (addressInput.value);
    let lowercaseAddress = OriginalAddress.toLowerCase();
    console.log(lowercaseAddress)

    addressOutput.innerHTML = lowercaseAddress;
}