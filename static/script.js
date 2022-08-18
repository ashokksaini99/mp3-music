let songIndex = 0;
let audioElement = new Audio('../static/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Kinna Sona", filePath: "../static/songs/1.mp3", coverPath: "../static/covers/1.jpg" },
    { songName: "Tujhe Kitna Chahein Aur", filePath: "../static/songs/2.mp3", coverPath: "../static/covers/2.jpg" },
    { songName: "Taaron Ke Shehar", filePath: "../static/songs/3.mp3", coverPath: "../static/covers/3.jpg" },
    { songName: "Meri Aashiqui", filePath: "../static/songs/4.mp3", coverPath: "../static/covers/4.jpg" },
    { songName: "Dil Chahte Ho", filePath: "../static/songs/5.mp3", coverPath: "../static/covers/5.jpg" },
    { songName: "Chitthi", filePath: "../static/songs/6.mp3", coverPath: "../static/covers/6.jpg" },
    { songName: "Lo Safar", filePath: "../static/songs/7.mp3", coverPath: "../static/covers/7.jpg" },
    { songName: "Tum Hi Aana", filePath: "../static/songs/8.mp3", coverPath: "../static/covers/8.jpg" },
    { songName: "Akh Lad Jaave", filePath: "../static/songs/9.mp3", coverPath: "../static/covers/9.jpg" },
    { songName: "Nayan", filePath: "../static/songs/10.mp3", coverPath: "../static/covers/10.jpg" },
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `../static/songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})


document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `../static/songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `../static/songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;
})