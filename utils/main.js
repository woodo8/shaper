function shape1(){
	var A = document.getElementById("width").value;
	var B = document.getElementById("height").value;
	var C = document.getElementById("radius").value;
	var D = document.getElementById("color").value;

	document.getElementById("box").style.width = A + "px";
	document.getElementById("box").style.height = B + "px";
	document.getElementById("box").style.borderRadius = C + "px";
	document.getElementById("box").style.backgroundColor = D;
	document.getElementById("box").style.display = "block";
}