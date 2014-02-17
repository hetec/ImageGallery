/**
 * @author Patrick Hebner
 */


var o = 1.0;
var w = 23;
var interval;
function ani1(obj){
document.getElementsByTagName("img")[obj].style.opacity = o;
document.getElementsByTagName("div")[obj].style.width = w + "%";
	o = o - 0.05;
	w = w - 0.05; 
	
	if(w < 22 && o < 0.5){
		clearInterval(interval);
		w = 23;
		o = 1;
	}
}
function init(obj){	
		document.getElementsByTagName("img")[obj].onmouseover = function (){
			clearInterval(interval);
			interval = setInterval('ani1(' + obj + ')', 15);
		document.getElementsByTagName("img")[obj].onmouseout = function(){
			clearInterval(interval);
			document.getElementsByTagName("img")[obj].style.opacity = 1;
			document.getElementsByTagName("div")[obj].style.width = 23 + "%";
		};
	};
}
/*
window.onload = function(){
	for(var i = 0; i < 2; i++){
		init(i);
	}
	//init(0);
};

*/