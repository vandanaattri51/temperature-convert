
//variables
let cel = 0;
let fah = 0;
let kel = 0;
let option = document.querySelector("#unit");
let tempInput = document.querySelector("#tempInput").value;

//Main function to convert temperatures

function temprature() {

    //calling all functions 
    CtoF_and_K();
    FtoC_and_K();
    KtoF_and_C();
    displayTemp();

}

//Function to convert temperature from °C to °F and °K
function CtoF_and_K() {
    if (option.value == "Celsius") {
        cel = parseFloat(document.getElementById("tempInput").value);
        fah = cel * 9 / 5 + 32;
        kel = cel + 273.15;
    }
}

//Function to convert temperature from °K to °F and °C
function KtoF_and_C() {
    if (option.value == "Kelvin") {
        kel = parseFloat(document.getElementById("tempInput").value);
        cel = kel - 273.15;
        fah = cel * 9 / 5 + 32;
    }

}

//Function to convert temperature from °F to °C and °K
function FtoC_and_K() {
    if (option.value == "Fahrenheit") {
        fah = parseFloat(document.getElementById("tempInput").value);
        cel = (fah - 32) * 5 / 9;
        kel = cel + 273.15;
    }
}

//Display result of provided input
function displayTemp() {
    document.getElementById("celsius").value = cel;
    document.getElementById("fahrenheit").value = fah;
    document.getElementById("kelvin").value = kel;
}


//Scroll reveal animation code
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 800,
    delay: 80
});

ScrollReveal().reveal('.title', { delay: 40, origin: 'top' });
ScrollReveal().reveal('.container', { delay: 40, origin: 'bottom' });
ScrollReveal().reveal('.p-1', { delay: 40, origin: 'bottom' });
ScrollReveal().reveal('.p-2', { delay: 40, origin: 'right' });
ScrollReveal().reveal('.p-3', { delay: 40, origin: 'left' });