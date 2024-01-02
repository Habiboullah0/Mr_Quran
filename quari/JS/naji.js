var surahElements = document.querySelectorAll(".surah");
var audioSource = document.getElementById("audio-source");
var audioPlayer = document.getElementById("player");
var currentSurah = null;
var currentElement = null;

surahElements.forEach((surahElement) => {
    surahElement.addEventListener("click", () => {
        var surah = parseInt(surahElement.getAttribute("data-surah"));
        var audioPath = `../audio/naji/${surah}.mp3`;
        audioSource.src = audioPath;
        audioPlayer.load();

        if (currentElement !== null) {
            currentElement.style.backgroundColor = "";
            currentElement.style.transform = "";
            currentElement.style.boxShadow = "";
        }
        currentElement = surahElement;
        surahElement.style.backgroundColor = "#2345";
        surahElement.style.transform = "scale(1.1)";
        surahElement.style.boxShadow = "0 0 6px #000";        

        currentSurah = surah;
    });
});

window.onload = () => {
    surahElements[0].click();
}

var skipBack = document.getElementById("skip-back");
skipBack.onclick = function () {
    if (currentSurah !== null && currentSurah > 1 && currentSurah <= 114) {
        var previousSurah = currentSurah - 1;
        var newPath = `../audio/salem/${previousSurah}.mp3`;
        audioSource.src = newPath;
        audioPlayer.load();

        if (currentElement !== null) {
            currentElement.style.backgroundColor = "";
            currentElement.style.transform = "";
            currentElement.style.boxShadow = "";
        }
        currentElement = surahElements[previousSurah - 1];
        currentElement.style.backgroundColor = "#2345";
        currentElement.style.transform = "scale(1.1)";
        currentElement.style.boxShadow = "0 0 6px #000";

        currentSurah = previousSurah;
        
        currentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};

var skipForward = document.getElementById("skip-forward");
skipForward.onclick = function () {
    if (currentSurah !== null && currentSurah >= 1 && currentSurah < 114) {
        var nextSurah = currentSurah + 1;
        var newPath = `../audio/salem/${nextSurah}.mp3`;
        audioSource.src = newPath;
        audioPlayer.load();

        if (currentElement !== null) {
            currentElement.style.backgroundColor = "";
            currentElement.style.transform = "";
            currentElement.style.boxShadow = "";
        }
        currentElement = surahElements[nextSurah - 1];
        currentElement.style.backgroundColor = "#2345";
        currentElement.style.transform = "scale(1.1)";
        currentElement.style.boxShadow = "0 0 6px #000";

        currentSurah = nextSurah;
        
        currentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};
