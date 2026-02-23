// script.js

// Display current date and time
function displayDateTime() {
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');
    document.getElementById('datetime').innerText = `Current Date and Time (UTC): ${formattedDate}`;
}

// Random romance quotes
const quotes = [
    "Love is composed of a single soul inhabiting two bodies.",
    "I love you not only for what you are but for what I am when I am with you.",
    "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
];

function randomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').innerText = quote;
}

// Love Calculator
function loveCalculator() {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const loveScore = Math.floor(Math.random() * 101);
    document.getElementById('loveResult').innerText = `Love Percentage between ${name1} and ${name2}: ${loveScore}%`;
}

// Background Music Toggle
let isPlaying = false;
const audio = new Audio('path/to/love-song.mp3');

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
}