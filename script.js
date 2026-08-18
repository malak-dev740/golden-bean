const intro = document.getElementById("intro");
const video = document.getElementById("introVideo");
const welcome = document.getElementById("introWelcome");

video.addEventListener("ended", function () {

    video.style.display = "none";

    welcome.classList.add("show");

    setTimeout(function () {
        intro.classList.add("hide");
    }, 6000);

});