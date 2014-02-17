/**
 * @author Patrick Hebner
 */
var o = 1.0;
var interval;

function ani1(obj){
document.getElementsByTagName("img")[obj].style.opacity = o;
	o = o - 0.05;
 
	
	if(o < 0.5){
		clearInterval(interval);
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
		};
	};
}
