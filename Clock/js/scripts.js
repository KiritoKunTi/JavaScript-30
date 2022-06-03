const secondHand = document.querySelector('.second-hand');
const minHad = document.querySelector('.min-hand');
const hourHad = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    // seconds
    const seconds = now.getSeconds();
    const secondsDegree =  90 + ((seconds / 60) * 360);

    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    // minutes
    const mins = now.getMinutes();
    const minsDegree =  90 + ((mins / 60) * 360);

    minHad.style.transform = `rotate(${minsDegree}deg)`;

    // hours
    const hours = now.getMinutes();
    const hoursDegree =  90 + ((hours / 12) * 360);

    hourHad.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);