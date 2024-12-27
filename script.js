let change;
let bg = document.querySelector("body");
let h = document.querySelector("#heading");


// setup function
function setup() {

    let randomNum = Math.random() * 10;
    let num = Math.round(randomNum);
    console.log(num);

    if (num == 0) {
        bg.style.backgroundColor = "red";
        h.style.color = "white";
    }

    else if (num == 1) {
        bg.style.backgroundColor = "yellow";
        h.style.color = "white";
    }

    else if (num == 2) {
        bg.style.backgroundColor = "purple";
        h.style.color = "white";
    }

    else if (num == 3) {
        bg.style.backgroundColor = "green";
        h.style.color = "white";
    }

    else if (num == 4) {
        bg.style.backgroundColor = "pink";
        h.style.color = "white";
    }

    else if (num == 5) {
        bg.style.backgroundColor = "orange";
        h.style.color = "white";
    }

    else if (num == 6) {
        bg.style.backgroundColor = "black";
        h.style.color = "white";
    }

    else if (num == 7) {
        bg.style.backgroundColor = "brown";
        h.style.color = "white";
    }

    else if (num == 8) {
        bg.style.backgroundColor = "blue";
        h.style.color = "white";
    }

    else if (num == 9) {
        bg.style.backgroundColor = "grey";
        h.style.color = "white";
    }

    else {
        bg.style.backgroundColor = "white";
        h.style.color = "black";
    }
};


// start
document.querySelector("button").addEventListener("click", function () {

    change = setInterval(setup, 300);

});


// stop
document.querySelector("#off").addEventListener("click", function () {

    clearInterval(change);

});
