


const jako = 9/5;
const plussa = 32;
const form = document.querySelector(".lampotila-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const lampotila = document.getElementById("fname").value;


    let vastaus = (lampotila * jako + plussa);
    document.getElementById("vastaus").innerHTML =  lampotila + " °C on Fahrenheit-asteina " + vastaus + " " + "°F";
});