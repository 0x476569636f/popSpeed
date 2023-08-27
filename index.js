let img = document.getElementById("mingkem");
const audio = new Audio("./src/pop.mp3")
let score = document.getElementById("score");
let count = 0;

function increaseScore(){
    count++;
    score.innerHTML = count;
}

addEventListener("mousedown", function(){
    increaseScore();
    img.src = "./src/mangap.png";
    audio.play();
});

addEventListener("mouseup", function(){
    img.src = "./src/mingkem.png";
    audio.play();
});

addEventListener("touchstart", function(){
    increaseScore();
    img.src = "./src/mangap.png"
    audio.play();
});

addEventListener("touchend", function(){
    img.src = "./src/mingkem.png"
    audio.play();
});
