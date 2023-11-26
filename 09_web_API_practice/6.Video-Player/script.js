const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


function playPause(){
    if(video.paused){
        video.play();
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }else{
        video.pause();
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }
}

function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

function updateProgress(){
    progress.value = (video.currentTime / video.duration) *100;

    let mins = Math.floor(video.currentTime/60);
    if(mins<10){
        mins= '0' + String(mins);
    }

    let secs = Math.floor(video.currentTime % 60);
    if(secs<60){
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}

function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration)/100;
}


video.addEventListener('click',playPause);
play.addEventListener('click',playPause);
stop.addEventListener('click',stopVideo);
video.addEventListener('timeupdate',updateProgress);
progress.addEventListener('change',setVideoProgress);