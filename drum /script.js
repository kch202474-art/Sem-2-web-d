const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

function playSound(key) {
    const audio = document.getElementById(key);
    const button = audio.parentElement;

    if (audio) {
        audio.currentTime = 0;
        audio.play();
        display.textContent = button.id;
    }
}

pads.forEach(pad => {
    pad.addEventListener("click", () => {
        playSound(pad.textContent.trim());
    });
});

document.addEventListener("keydown", event => {
    const key = event.key.toUpperCase();
    if ("QWEASDZXC".includes(key)) {
        playSound(key);
    }
});
