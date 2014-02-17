function events (ind){
		document.getElementsByTagName("img")[ind].onclick = function(){
			if(ind < 10){
				document.getElementById("mainImg").src = "img/imgGross/00" + ind + ".jpg";
			}else if(ind < 100){
				document.getElementById("mainImg").src = "img/imgGross/0" + ind + ".jpg";
			}else{
				document.getElementById("mainImg").src = "img/imgGross/" + ind + ".jpg";
			}
	};	
}

/*
function events (){
	var num = 1;
	document.getElementsByTagName("img")[num].onclick = function(){
	document.getElementById("mainImg").src = "img/imgGross/001.jpg";
};
	num++;	
	document.getElementsByTagName("img")[num].onclick = function(){
	document.getElementById("mainImg").src = "img/imgGross/002.jpg";
};
	num++;
	document.getElementsByTagName("img")[num].onclick = function(){
	document.getElementById("mainImg").src = "img/imgGross/003.jpg";
};	
}
*/
