window.addEventListener("load", retrieveSongs("songs.json"));

let addSong = document.getElementById("addSong")
let addArtist = document.getElementById("addArtist")
let addAlbum = document.getElementById("addAlbum")
let addBtn = document.getElementById("addBtn")
let songList = document.getElementById("songTag");
let songsArr = []

function retrieveSongs (whichFile) {
		let songRequest = new XMLHttpRequest();
		songRequest.addEventListener("load", songRequestLoad);
		songRequest.open("GET", whichFile);
		songRequest.send();
	};

function songRequestLoad() {
	var songsParse = JSON.parse(event.target.responseText).songs;
	arrayUpSongs(songsParse);
}

function arrayUpSongs (songsParse) {
	songsParse.forEach(function(song) {
		let songObj = {"title": song.title, "artist": song.artist, "album": song.album}
		songsArr.push(songObj);
	});
		songsToDom(songsArr);
}

function songsToDom (songsArr) {
	songList.innerHTML = ""
	for (let i = 0; i < songsArr.length; i++) {
	// 	songsArr[i] = songsArr[i].replace(/@|\(|!/, "")
	// songsArr[i] = songsArr[i].replace("*", "")
	songList.innerHTML += `<div id="${i}"><h2>${songsArr[i].title}</h2><br>
		<p>${songsArr[i].artist} | ${songsArr[i].album} | <button class="dltBtn">Delete</button> <br></div>`
	}
	console.log(songsArr);
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
}

function addToggle() {
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
	songList.innerHTML += `<div id="songsArr.length"><h2>${songsArr.title}</h2><br>
		<p>${songsArr.artist} | ${songsArr.album} | <button class="dltBtn">Delete</button> <br></div>`
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

function deleteSong (id) {
	let currentSong = document.getElementById(id);
	console.log(currentSong);
	currentSong.remove();
	songsArr.splice(id, 1)
}

window.addEventListener("click", function() {
	if (event.target.classList.contains("dltBtn")) {
		let parentID = event.target.parentNode.parentNode.getAttribute("id");
		deleteSong(parentID);
	}
})

let moreBtn = document.getElementById("moreBtn")

moreBtn.addEventListener("click", function(){
	retrieveSongs("more.json")
})