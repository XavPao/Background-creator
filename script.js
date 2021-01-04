var css = document.querySelector("h3");
var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random1 = document.querySelector(".random1");
var random2 = document.querySelector(".random2");


input1.value = "#0000ff";
input2.value = "#00ffee"; 
// console.log(body);
// console.log(css);
// console.log(input1);
// console.log(input2);

function setGradient() {	
	// console.log(input1.value);
	body.style.background = 
	"linear-gradient(90deg, " 
	+ input1.value 
	+ ", "
	+ input2.value 
	+ ")";
	css.textContent = body.style.background +";" 
	// console.log(body.style.background)
}

setGradient();

// Il est possible d'utiliser oniput dans l'HTML, cf index.HTML
input1.addEventListener("input", setGradient);
input2.addEventListener("input", setGradient);


function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }


// RANDOM SECTION 

function setRandomGradient1() {	
	// console.log(input1.value);
	body.style.background = 
	"linear-gradient(90deg, " 
	+ getRandomColor() 
	+ ", "
	+ input2.value 
	+ ")";
	css.textContent = body.style.background +";" 
	// console.log(body.style.background) 
}

function setRandomGradient2() {	
	// console.log(input1.value);
	body.style.background = 
	"linear-gradient(90deg, " 
	+ input1.value 
	+ ", "
	+ getRandomColor() 
	+ ")";
	css.textContent = body.style.background +";" 
	// console.log(body.style.background) 
}

random1.addEventListener("click", setRandomGradient1);
random2.addEventListener("click", setRandomGradient2);

