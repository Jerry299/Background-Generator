 var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient); 
function outPut(){
	console.log("Hey");
}
/*var para = document.querySelectorAll("p");
for(i = 0; i < para.length; i++){
	para[i].style.color = "red";
	para.addEventListener("click", function(){
		para[i].style.display = "hide";
	});
}*/
 
var para = document.querySelectorAll("#para,#para2");
para.addEventListener("click", function(){
	para.style.display = "none"
})
 