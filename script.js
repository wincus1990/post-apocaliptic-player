const audio = document.querySelector('#audio');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const musicContainer = document.querySelector('.musicContainer');
const title = document.querySelector('#title')
const titleCover = document.querySelector('#tCover')
const songs = ['A Kiss to Build a Dream On', 'I dont want to set the world on fire the ink spots', 'Maybe', 'My Mother Told Me'];
let index = 0;
audio.src = `http://127.0.0.1:5500/music/${songs[index]}.mp3`;

function playAudio(){
    musicContainer.classList.add('play');
    titleCover.classList.add('spin');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function stopAudio(){
    musicContainer.classList.remove('play');
    titleCover.classList.remove('spin');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    audio.pause();
}

function nextSong(){
    index++;
    if (index > songs.length -1){
        index = 0;
    }
    audio.src = `http://127.0.0.1:5500/music/${songs[index]}.mp3`
    title.innerHTML = `${songs[index]}`;
    playAudio();
}

function prevSong(){
    index--;
    if (index < 0){
        index = songs.length -1;
    }
    audio.src = `http://127.0.0.1:5500/music/${songs[index]}.mp3`
    title.innerHTML = `${songs[index]}`;
    playAudio();
}

function Play(){
    const isPlaying = musicContainer.classList.contains('play');
    console.log(isPlaying)
    if (isPlaying) {
        stopAudio();
    } else {
        playAudio();
    }
}

playBtn.addEventListener('click', Play);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
audio.addEventListener('ended', nextSong);





