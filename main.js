window.addEventListener("load", retrieveSongs);

let addSong = document.getElementById("addSong")
let addArtist = document.getElementById("addArtist")
let addAlbum = document.getElementById("addAlbum")
let addBtn = document.getElementById("addBtn")
let songList = document.getElementById("songTag");
let songsArr = []

function retrieveSongs () {
		let songRequest = new XMLHttpRequest();
		songRequest.addEventListener("load", songRequestLoad);
		songRequest.open("GET", "songs.json");
		songRequest.send();
	};

function songRequestLoad() {
	var songsParse = JSON.parse(event.target.responseText).songs;
	arrayUpSongs(songsParse);
}

// for (var i = 0; i < songs.length; i++) {
// 	songs[i] = songs[i].replace(/@|\(|!/, "")
// 	songs[i] = songs[i].replace("*", "")
// }

function arrayUpSongs (songsParse) {
		songsParse.forEach(function(song) {
			let songObj = {"title": song.title, "artist": song.artist, "album": song.album}
			songsArr.push(songObj);
			songList.innerHTML += `${song.title} by ${song.artist} on the album ${song.album} <button id="dltBtn">Delete</button> <br>`
		});
		console.log("songObj", songsArr);
		document.getElementById("dltBtn").addEventListener("click", function(){
		songList.innerHTML = ""
		});
	}

var viewLink = document.getElementById("viewLink")
var addLink = document.getElementById("addLink")
var listMusicView = document.getElementById("listMusicView")
var addMusicView = document.getElementById("addMusicView")
window.addEventListener("load", addMusicView.style.display = 'none')
function listToggle() {
	if (listMusicView.style.display === 'none') {
        listMusicView.style.display = 'flex';
        addMusicView.style.display = 'none'
    } else {
        listMusicView.style.display = 'none';
    }
 	// listMusicView.classList.toggle('hidden')
}

function addToggle() {
	// addMusicView.classList.toggle('hidden')
	// listMusicView.classList.toggle('hidden')
	if (addMusicView.style.display === 'none') {
        addMusicView.style.display = 'block';
        listMusicView.style.display = 'none'
    } else {
        addMusicView.style.display = 'none';
    }
}

function addToArray() {
	let userNewSong = {"title": addSong.value, "artist": addArtist.value, "album": addAlbum.value}
	songsArr.push(userNewSong);
	songList.innerHTML += `${addSong.value} by ${addArtist.value} on the album ${addAlbum.value} <button id="dltBtn">Delete</button> <br>`
		console.log(songsArr);
};

viewLink.addEventListener("click", function(){
	listToggle();
})

addLink.addEventListener("click", function() {
	addToggle();
})

addBtn.addEventListener("click", function(){
	addToArray();
});
