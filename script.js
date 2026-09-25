const jako = 9 / 5;

const plussa = 32;

const form = document.querySelector(".lampotila-form");

const muutos = document.getElementById("muutos");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const lampotila = Number(document.getElementById("fname").value);

    let vastaus;

    if (muutos.value === "c-f") {

        if (lampotila < -273.15) {
            document.getElementById("vastaus").innerHTML = "Nyt on liian kylmää!";
            return;
        }

        vastaus = lampotila * jako + plussa;

    } else {

        if (lampotila < -459.67) {
            document.getElementById("vastaus").innerHTML = "Nyt on liian kylmää!";
            return;
        }

        vastaus = (lampotila - plussa) / jako;
    }


    const valittu = document.querySelector('input[name="desimaalit"]:checked');

    if (valittu) {

        const desimaalit = Number(valittu.value);

        vastaus = vastaus.toFixed(desimaalit);
    }


    if (muutos.value === "c-f") {

        document.getElementById("vastaus").innerHTML =
            lampotila + " °C on Fahrenheit-asteina " + vastaus + " °F";

    } else {

        document.getElementById("vastaus").innerHTML =
            lampotila + " °F on Celsius-asteina " + vastaus + " °C";
    }

});