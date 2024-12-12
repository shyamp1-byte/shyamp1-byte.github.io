function showFavoritePolygon() {
    const numberInput = document.getElementById("favorite-number").value;
    const number = Math.abs(Math.round(numberInput));
    const polygonNames = ["", "Henagon", "Digon", "Trigon", "Tetragon", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon"];

    if (number >= 0 && number <= 10) {
        alert(`A shape with ${number} sides is called a ${polygonNames[number]}.`);
    } else {
        alert("Please enter a number between 0 and 10.");
    }
}

function greetUser() {
    const userName = document.getElementById("user-name").value;
    const userMood = document.getElementById("user-mood").value;
    const greetingMessage = document.getElementById("greeting-message");
    greetingMessage.innerText = `The Panther Express welcomes you, ${userName}! We're glad you are doing ${userMood}.`;
    showFavoritePolygon();
}

function pantherSpeed() {
    alert("Panther Speed activated! You're moving fast!");
}

function pantherStrength() {
    alert("Panther Strength enabled! You are stronger than ever!");
}

function pantherStealth() {
    alert("Panther Stealth engaged. You're now invisible!");
}

function pantherRoar() {
    alert("Panther Roar unleashed! Your roar can be heard from miles!");
}

function pantherWisdom() {
    alert("Panther Wisdom shared: 'Focus on your goals, and nothing can stop you.'");
}

document.addEventListener("DOMContentLoaded", function() {
    const dateTimeDisplay = document.getElementById("date-time-display");
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateTimeDisplay.innerText = `Today is ${now.toLocaleString('en-US', options)}`;

    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", greetUser);

    document.getElementById("speed-boost-btn").addEventListener("click", pantherSpeed);
    document.getElementById("strength-surge-btn").addEventListener("click", pantherStrength);
    document.getElementById("stealth-mode-btn").addEventListener("click", pantherStealth);
    document.getElementById("roar-loudly-btn").addEventListener("click", pantherRoar);
    document.getElementById("share-wisdom-btn").addEventListener("click", pantherWisdom);
});
