var songs = [];

songs[songs.length] = "Stairway to Heaven > by Led Zeppelin on the album Led Zeppelin IV";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "Creep > by Radiohead on the album Pablo Honey";

for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/@|\(|!/, "")
	songs[i] = songs[i].replace("*", "")
	songs[i] = songs[i].replace(">", '-');
	songs[i] = songs[i].split(/ - by | on the album /);
}

var songTag = document.getElementById("songTag")

for (var i = 0; i < songs.length; i++) {
	songTag.innerHTML += songs[i][0] + " by " + songs[i][1] + " on the album " + songs[i][2] + "<br>";
}