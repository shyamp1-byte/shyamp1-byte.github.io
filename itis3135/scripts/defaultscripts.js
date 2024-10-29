document.addEventListener("DOMContentLoaded", function() {
    const dateTimeDisplay = document.getElementById("dateTimeDisplay");
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateTimeDisplay.innerText = `Today is ${now.toLocaleString('en-US', options)}`;

    const currentURL = window.location.href;
    document.getElementById("htmlValidator").href = `https://validator.w3.org/nu/?doc=${encodeURIComponent(currentURL)}`;
    document.getElementById("cssValidator").href = `https://jigsaw.w3.org/css-validator/validator?uri=${encodeURIComponent(currentURL)}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`;
});

function greetUser() {
    const userName = document.getElementById("userName").value;
    const userMood = document.getElementById("userMood").value;
    const greetingMessage = document.getElementById("greetingMessage");
    greetingMessage.innerText = `The Panther Express welcomes you, ${userName}! We're glad you are doing ${userMood}.`;

    showFavoritePolygon();
}

function showFavoritePolygon() {
    const numberInput = document.getElementById("favoriteNumber").value;
    const number = Math.abs(Math.round(numberInput));
    const polygonNames = ["", "Henagon", "Digon", "Trigon", "Tetragon", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon"];

    if (number >= 0 && number <= 10) {
        alert(`A shape with ${number} sides is called a ${polygonNames[number]}.`);
    } else {
        alert("Please enter a number between 0 and 10.");
    }
}

function pantherSpeed() {
    alert("Panther Speed activated! You’re moving at lightning pace!");
}

function pantherStrength() {
    alert("Panther Strength enabled! You feel an incredible power surge!");
}

function pantherStealth() {
    alert("Panther Stealth engaged. You're now invisible!");
}

function pantherRoar() {
    alert("Panther Roar unleashed! Everyone within miles can hear you!");
}

function pantherWisdom() {
    alert("Panther Wisdom shared: 'Focus on your goals, and nothing can stop you.'");
}
