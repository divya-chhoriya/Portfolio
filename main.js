var app = angular.module('myApp',[]);
app.controller('skillsController',function($scope) {

	$scope.skillDetails = [
	    {img: "images/python.jpg", title: "Python"},
	    {img: "images/html.png", title: "HTML5"},
	    {img: "images/css.png", title: "CSS3"},
	    {img: "images/js.png", title: "JavaScript"},
	    {img: "images/angular.png", title: "AngularJS"},
	    {img: "images/bootstrap.png", title: "Bootstrap"},
	    {img: "images/c.png", title: "C langugae"},
	    {img: "images/tf.png", title: "TensorFlow"},
	    {img: "images/ml.png", title: "Machine Learning"}
	]

});


var mybutton1 = document.getElementById("navvv");
var mybutton2 = document.getElementById("btn_to_top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
    	mybutton1.style.backgroundColor = "#0b2541";
    	mybutton2.style.display = "block";
    	document.getElementById("nav_heading1").style.color = "orange";
    	document.getElementById("nav_heading2").style.color = "#f0f9ff";
    	document.getElementById("nav_heading3").style.color = "#f0f9ff";
    	document.getElementById("nav_heading4").style.color = "#f0f9ff";
    	document.getElementById("nav_heading5").style.color = "#f0f9ff";
  	} 
  	else 
  	{
    	mybutton1.style.backgroundColor = "transparent";
    	mybutton2.style.display = "none";
    	document.getElementById("nav_heading1").style.color = "black";
    	document.getElementById("nav_heading2").style.color = "black";
    	document.getElementById("nav_heading3").style.color = "black";
    	document.getElementById("nav_heading4").style.color = "black";
    	document.getElementById("nav_heading5").style.color = "black";
  	}
}

function to_top() {
	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
}