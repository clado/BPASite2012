var numberoffacts = 2;

function getRandnum(){
	var picture = new Image();
	var paragraph;
	var randomnum = Mat.floor((Math.random()*numberoffacts) + 1);
	picture.src = eval("/randomFacts/pic" + randomnum + ".jpg");
	paragraph = eval("/randomFacts/fact" + randomnum ".txt");	
	displayRandomizedFacts(paragraph, picture);
}

function displayRandomizedFacts(par, pic){
	document.images.factpicture.src = pic;
	document.getElementById("factparagraph").innerHTML = par; 
}