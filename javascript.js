function getRandnum(){
	var numberoffacts = 12;
	var randomnum = Math.floor((Math.random()*numberoffacts) + 1);
	var url = randomnum + ".html";
	$("#facts").load(url);
}

var image1=new Image();
image1.src="downtown_view.jpg";
var image2=new Image();
image2.src="childrens_museum.jpg";
var image3=new Image();
image3.src="state_house.jpg";
var image4=new Image();
image4.src="aerialview.jpg";
var image5=new Image();
image5.src="artsgarden.jpg";
var image6=new Image();
image6.src="eskenazi.jpg";
var image7=new Image();
image7.src="canal.jpg";
var image8=new Image();
image8.src="trail.jpg";

var step = 0;
var timer;
function slideit(){

	if (step<8) step++;
	else step = 1;
	
	document.images.slide.src=eval("image"+step+".src");

	timer = setTimeout("slideit()", 5000);
}

function backwards(){
	clearTimeout(timer);
	
	if (step>1) step--;
	else step = 8;
	
	document.images.slide.src=eval("image"+step+".src");
}

function forewards(){
	clearTimeout(timer);
	
	if (step<8) step++;
	else step = 1;
	
	document.images.slide.src=eval("image"+step+".src");
}

function restart(){
	clearTimeout(timer);
	
	timer = setTimeout("slideit()", 2500);
}

function sendmessage(){
	var email = document.getElementsByName("email")[0].value;
	var subject = document.getElementsByName("subject")[0].value;
	var message = document.getElementsByName("message")[0].value;
	if (message=="" || message==null){
		alert("It looks like you don't actually have anything to say to us. We really would love your feedback.");
	}
	else if (email=="" || email==null){
		alert("Don't forget to send us your email! We don't bite, but you could always use a fake email if you want.");
	}
	else if (subject=="" || subject==null){
		alert("Please fill in the subject line, too. We don't want to miss your email.");
	}
	else {
		document.messageus.action = "contact.php";
		document.messageus.submit();
	}
}

$(window).scroll(function () { 
  $("header").css( {'margin-left': $(window).scrollLeft()} ); 
}); 

(function() {
 var cx = '013638411530565087051:pensig_ky-o';
 var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
 gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
 '//www.google.com/cse/cse.js?cx=' + cx;
 var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
 })();
