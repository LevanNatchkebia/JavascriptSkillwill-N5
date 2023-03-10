// Excercise 1  

function hide() {
  document.getElementById("text").style.display = "none";
}


// Excercise 2

let div = document.createElement("div");
div.id = "div1"
document.body.appendChild(div);

let h2 = document.createElement("H2");
h2.className = "h2";
div.appendChild(h2);
h2.textContent = "Levan";


let ahref = document.createElement("a");
ahref.id = "a";
div.appendChild(ahref);
ahref.textContent = "Go to Profile";

ahref.href = "https://www.linkedin.com/in/levan-natchkebia-65b861242/";
ahref.target = "_blank";

// Excercise 3


document.querySelector ("a").style.textDecoration = "none";
ahref.style.backgroundColor = "red";
ahref.style.fontSize = "40px";
ahref.style.color = "white";
h2.style.fontSize = "60px";

document.getElementById("text").style.fontSize = "30px";

