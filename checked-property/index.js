document.getElementById('myButton').onclick = function() {

    const myCheckBox = document.getElementById('myCheckBox');
    const visaBtn = document.getElementById('visaBtn');
    const mastercardBtn = document.getElementById('mastercardBtn');
    const paypalBtn = document.getElementById('paypalBtn');

    if (myCheckBox.checked) {
        document.getElementById('mypara1').innerHTML = 'You have subcribed';
    }
        else {
            document.getElementById('mypara1').innerHTML = 'You have NOT subcribed';
        }

    if (visaBtn.checked) {
        document.getElementById('mypara').innerHTML = 'You are paying with visa';
    }
    else if (mastercardBtn.checked) {
        document.getElementById('mypara').innerHTML = 'You are paying with mastercard';
    }
    else if (paypalBtn.checked) {
        document.getElementById('mypara').innerHTML = 'You are paying with paypal';
    }
    else {
        document.getElementById('mypara').innerHTML = 'You must select a payment method';
    }

}
