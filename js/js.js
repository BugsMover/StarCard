function flog(img){
	/*通过ID名查找元素语句 返回时对象*/
	var music= document.getElementById("music");
	
	if(music.paused){
		music.play();
		img.src="img/musicBtn.png"
		img.style.animationPlayState="running";/*继续播放动画*/
	}else if(music.played){
		music.pause();
		img.src="img/musicBtnoff.png"
		img.style.animationPlayState="paused";/*暂停动画*/
	}
}
