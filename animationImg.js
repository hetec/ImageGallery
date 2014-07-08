
function addImg(){
	var numberImg = 30;
	var ind = 0;
	for(var i = 0; i < numberImg; i++){
		if((i+1) < 10){
		ind = "00" + (i+1);
	}else if((i+1) < 100){
		ind = "0" + (i+1);
	}else{
		ind = (i+1);
	}
	$('imgFrame').children().add('img').attr('src', 'img/imgTemplates/' + ind + '.jpg').attr('id', 'img'+ind);
}

function ani(){
	$('.imgframe img').on('mouseenter', function(){
		$(this).fadeout('slow');
	)};
}
