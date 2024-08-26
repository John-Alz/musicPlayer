

let trackListContainer = document.querySelector(".track-list-container")

let songs = [
    {
        id: 1,
        song: "./songs/Avicii - Bad Reputation (Lyric Video) ft. Joe Janiak(MP3_128K).mp3",
        duration: "3:25",
        title: "Bad reputation",
        author: "Avicii"
    },
    {
        id: 2,
        song: "./songs/SOS(MP3_128K).mp3",
        duration: "2:38",
        title: "SOS",
        author: "Avicii"
    }
    ,
    {
        id: 3,
        song: "./songs/Tough Love(MP3_128K).mp3",
        duration: "3:11",
        title: "Tough love",
        author: "Avicii"
    }
    ,
    {
        id: 4,
        song: "./songs/Excuse Me Mr Sir(MP3_128K).mp3",
        duration: "3:07",
        title: "Excuse Me Mr Sir",
        author: "Avicii"
    }
    ,
    {
        id: 5,
        song: "./songs/Freak(MP3_128K).mp3",
        duration: "3:00",
        title: "Freak",
        author: "Avicii"
    }
    ,
    {
        id: 6,
        song: "./songs/Never Leave Me(MP3_128K).mp3",
        duration: "2:52",
        title: "Never Leave Me",
        author: "Avicii"
    }
    ,
    {
        id: 7,
        song: "./songs/Hold The Line(MP3_128K)_1.mp3",
        duration: "2:52",
        title: "Hold The Line",
        author: "Avicii"
    }
    ,
    {
        id: 8,
        song: "./songs/Fades Away(MP3_128K).mp3",
        duration: "2:58",
        title: "Fades Away",
        author: "Avicii"
    }
    ,
    {
        id: 9,
        song: "./songs/Heaven(MP3_128K).mp3",
        duration: "4:37",
        title: "Heaven",
        author: "Avicii"
    },
    {
        id: 10,
        song: "./songs/Heart Upon My Sleeve(MP3_128K).mp3",
        duration: "4:14",
        title: "Heart Upon My Sleeve",
        author: "Avicii"
    },
    {
        id: 11,
        song: "./songs/Peace Of Mind(MP3_128K).mp3",
        duration: "3:00",
        title: "Peace Of Mind",
        author: "Avicii"
    },
    {
        id: 12,
        song: "./songs/Ain_t A Thing(MP3_128K).mp3",
        duration: "3:03",
        title: "Ain't A Thing",
        author: "Avicii"
    }
]

songs.forEach(song => {
    console.log(song);
    const divContainerSong = document.createElement("div");
    divContainerSong.className = "song-container";

    const divArtistSectionContainer = document.createElement("div");
    divArtistSectionContainer.className = "artist-section-container";

    const divNumberSong = document.createElement("div");
    divNumberSong.className = "number-song";

    const paragraphNumberSong = document.createElement("p");
    paragraphNumberSong.textContent = song.id

    const divPlaySection = document.createElement("div")
    divPlaySection.className = "play-section";

    const songAudio = document.createElement("audio")
    songAudio.className = "song"
    songAudio.controls = true;
    songAudio.src = song.song

    const playBtn = document.createElement("button")
    playBtn.className = "play-btn"

    const iconPlay = document.createElement("img");
    iconPlay.className = "icon-play-song"
    iconPlay.src = "./assets/icons/play.svg"

    const divArtistSection = document.createElement("div");
    divArtistSection.className = "artist-section";

    const songTitle = document.createElement("h1")
    songTitle.textContent = song.title

    const songAuthor = document.createElement("p")
    songAuthor.textContent = song.author

    const divMinutesSection = document.createElement("div")
    divMinutesSection.className = "minutes-section"

    const minutesParagraph = document.createElement("p")
    minutesParagraph.textContent = song.duration

    const shareLinkSong = document.createElement("a")
    const shareIcon = document.createElement("img")
    shareIcon.src = "./assets/icons/share.svg"



    trackListContainer.appendChild(divContainerSong)
    divContainerSong.appendChild(divArtistSectionContainer)
    divArtistSectionContainer.appendChild(divNumberSong)
    divNumberSong.appendChild(paragraphNumberSong)
    divArtistSectionContainer.appendChild(divPlaySection)
    divPlaySection.appendChild(songAudio)
    divPlaySection.appendChild(playBtn)
    playBtn.appendChild(iconPlay)
    divArtistSectionContainer.appendChild(divArtistSection)
    divArtistSection.appendChild(songTitle)
    divArtistSection.appendChild(songAuthor)
    divContainerSong.appendChild(divMinutesSection)
    divMinutesSection.appendChild(minutesParagraph)
    divMinutesSection.appendChild(shareLinkSong)
    shareLinkSong.appendChild(shareIcon)
});

let audioPlayers = document.querySelectorAll(".song");
let btnsPlays = document.querySelectorAll(".play-btn")
let iconsPlay = document.querySelectorAll(".icon-play-song")

btnsPlays.forEach((button, index) => {
    button.addEventListener('click', function () {
        const audioPlayer = audioPlayers[index];
        const playIcon = iconsPlay[index]
        if (audioPlayer.paused) {
            audioPlayer.play();
            playIcon.src = "./assets/icons/pause.svg"; // Cambia a icono de pausa
        } else {
            audioPlayer.pause();
            playIcon.src = "./assets/icons/play.svg"; // Cambia a icono de play
        }
    });
});