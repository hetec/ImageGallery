/**
 * @author Patrick Hebner
 */

function insertImg(i){
	var b = document.getElementById("imgFrame");
	var o = document.createElement("img");
	var d = document.createElement("div");
	var ind;
	if((i+1) < 10){
		ind = "00" + (i+1);
	}else if((i+1) < 100){
		ind = "0" + (i+1);
	}else{
		ind = (i+1);
	}
	o.setAttribute("src","img/imgTemplates/" + ind + ".jpg");
	o.setAttribute("alt", "Wallpaper" + ind);
	o.setAttribute("id", "img" + ind);
	b.appendChild(o);
}

function fill (){

	var i = 0;
	var num = 30; //number of images
	for (i = 0; i < num; i++){
		insertImg(i);
	}
	
	for(var x = 0; x < 30; x++){
		events(x + 1);
		init(x + 1);
	}
}

window.onload = fill;
