// CREATE VARIABLE
let mainContainer = document.getElementById("main-container");


// ADD CONDITIONS
let container = document.getElementById("main-container");
for (i = 1; i < 101; i++) {
    let square = document.getElementById("main-container").appendChild(document.createElement("div"));
    square.className = "square";
    square.innerText = "" + i;
    if (i % 3 == 0) {
    square.innerText = "FIZZ";
    square.classList.add("fizzSquare");
    }if (i % 5 == 0) {
        square.innerText = "BUZZ";
        square.classList.add("buzzSquare");
    }if (i % 15 == 0) {
        square.innerText = "FIZZBUZZ";
        square.classList.add("fizzbuzzSquare");
    }else{
        container.appendChild(square);
    }
}