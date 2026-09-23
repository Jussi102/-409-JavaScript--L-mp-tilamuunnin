



const form = document.querySelector(".lampotila-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const lampotila = document.getElementById("fname").value;

    console.log(lampotila)
});