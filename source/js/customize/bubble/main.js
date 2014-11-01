/* 
* @Author: LiSnB
* @Date:   2014-06-20 11:19:03
* @Last Modified by:   LiSnB
* @Last Modified time: 2014-06-21 18:01:57
*/

$(document).ready(function(){
    var red = [0, 100, 63];
	var orange = [40, 100, 60];
	var green = [75, 100, 40];
	var blue = [196, 77, 55];
	var purple = [280, 50, 60];

	// var myName = "南开";
	var myName = document.getElementById("bubbleword").value


	letterColors = [red,orange,green,blue,purple];

	if(10>3){
	    bubbleShape = "circle";
	}
	else {
	    bubbleShape = "square";
	}

	drawName(myName, letterColors);

	//bounceName();
	bounceBubbles();
});