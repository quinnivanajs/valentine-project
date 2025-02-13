
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const catImage = document.getElementById("catImage");

let noSize = 20;
let yesSize = 20;
let messageSize = 30;
let clickCount = 0;

const messages = [
    "Please??",
    "Are you sure?",
    "Think again!",
    "You might regret this, pookie!",
    "One last chance",
    "Last Warning!"
];

const catImages = [
    "sad-cat-1.gif",
    "sad-cat-2.gif",
    "angry-cat.gif",
    "crying-cat.gif",
    "begging-cat.gif",
    "heartbroken-cat.gif"
];

yesBtn.addEventListener("click", function () {
    message.innerHTML = "Yay! I love you, and Happy Valentine, sayang! 💖";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    catImage.src = "happy-cat.gif";
});

noBtn.addEventListener("click", function () {
    if (clickCount < messages.length) {
        message.innerHTML = messages[clickCount];
        catImage.src = catImages[clickCount];  // Pastikan file ada!
        
        // Perubahan ukuran tombol & teks
        if (noSize > 5) noSize -= 3;
        if (yesSize < 40) yesSize += 3;
        if (messageSize < 40) messageSize += 3;

        noBtn.style.fontSize = `${noSize}px`;
        yesBtn.style.fontSize = `${yesSize}px`;
        message.style.fontSize = `${messageSize}px`;

        clickCount++; // Pindahkan ke akhir agar semua perubahan terjadi dulu
    }

    if (clickCount >= messages.length) {
        noBtn.style.display = "none";
        message.innerHTML = "Don't break my heart, baby 💔";
    }
});
