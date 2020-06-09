let firstColor = document.getElementById('colorOne');
let secondColor = document.getElementById('colorTwo');
let output = document.getElementById('output');
let bg = document.getElementById('gradient');

let backgrounder = () => {
 bg.style.background = "linear-gradient(to right, " + colorOne.value + ',' + colorTwo.value + ')';
 output.textContent = bg.style.background + ";";
}

firstColor.addEventListener('input', backgrounder);

secondColor.addEventListener('input', backgrounder);

// add random button later
