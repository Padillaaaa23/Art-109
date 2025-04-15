

let song = document.querySelector("#song");
let playBtn = document.querySelector("#play-button");
let pauseBtn = document.querySelector("#pause-button");

playBtn.addEventListener('click', function () {
    song.play();
    playBtn.style.visibility = "hidden";
    pauseBtn.style.visibility = "visible";
})


pauseBtn.addEventListener('click', function () {
    song.pause();
    pauseBtn.style.visibility = "hidden";
    playBtn.style.visibility = "visible";
})

song.onloadeddata = function () {
    playBtn.style.visibility = "visible";
};

song.volume = 0.5; 

