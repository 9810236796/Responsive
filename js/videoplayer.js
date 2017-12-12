var myVideo,playpausebtn,curttimetext,durttimetext,mutebtn,volumeslider,fullscreenbtn;

function initializePlayer(){
	//SET OBJECT REFRENCE
	 myVideo = document.getElementById("myVideo");
	 playpausebtn = document.getElementById("playpausebtn");
	 seekslider = document.getElementById("seekslider");
	 curttimetext = document.getElementById("curttimetext");
	 durttimetext = document.getElementById("durttimetext");
	 mutebtn = document.getElementById("mutebtn");
	 volumeslider = document.getElementById("volumeslider");
	 fullscreenbtn = document.getElementById("fullscreenbtn");

	 //ADDING EVENTLISTENER
	 playpausebtn.addEventListener("click",playpause,false);
	 seekslider.addEventListener("change",seekVideo,false);
	 myVideo.addEventListener("timeupdate",seektimeupdate,false);
	 mutebtn.addEventListener("click",muteVideo,false);
	 volumeslider.addEventListener("change",setVolume,false);
	 fullscreenbtn.addEventListener("click",Fullscreenvideo,false);

}
window.onload = initializePlayer;


function playpause(){
	if(myVideo.paused){
		myVideo.play();
		playpausebtn.innerHTML="pause";
	}else{
		myVideo.pause();
		playpausebtn.innerHTML ="play";
	}
}

function seekVideo(){
	var duration = myVideo.duration * (seekslider.value / 100);
	myVideo.currentTime = duration;
}

function seektimeupdate(){
	var newtime = myVideo.currentTime * (100 / myVideo.duration);
	seekslider.value = newtime;

	var curmins = Math.floor(myVideo.currentTime / 60);
	var cursecs = Math.floor(myVideo.currentTime - curmins * 60);
	var durmins = Math.floor(myVideo.duration / 60);
	var dursecs = Math.floor(myVideo.duration - durmins * 60);

	if(cursecs < 10){
		cursecs = "0"+cursecs;
	}
	if(dursecs < 10){
		dursecs = "0"+dursecs;
	}
	if(curmins < 10){
		curmins = "0"+curmins;
	}
	if(durmins < 10){
		durmins = "0"+durmins;
	}

	curttimetext.innerHTML = curmins+":"+cursecs;
	durttimetext.innerHTML = durmins+":"+dursecs;
}

function muteVideo(){
	if(myVideo.muted){
		myVideo.muted = false;
		volumeslider.value=100;
		mutebtn.innerHTML = "Mute";
	}else{

		myVideo.muted = true;
		volumeslider.value= 0;
		mutebtn.innerHTML = "Unmute";
	}
}

function setVolume(){
	myVideo.volume = volumeslider.value / 100;
}

function Fullscreenvideo(){
	if(myVideo.requestFullScreen){
		myVideo.requestFullScreen();
	}else if(myVideo.mozRequestFullScreen){
		myVideo.mozRequestFullScreen();
	}
	else if(myVideo.webkitRequestFullScreen){
		myVideo.webkitRequestFullScreen();
	}
}