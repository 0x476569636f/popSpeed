let img = document.getElementById("mingkem");
const audio = new Audio("pop.mp3")
let score = document.getElementById("score");
let count = 0;

function increaseScore(){
    count++;
    score.innerHTML = count;
}

addEventListener("mousedown", function(){
    increaseScore();
    img.src = "mangap.png";
    audio.play();
});

addEventListener("mouseup", function(){
    img.src = "mingkem.png";
    audio.play();
});

addEventListener("touchstart", function(){
    increaseScore();
    img.src = "mangap.png"
    audio.play();
});

addEventListener("touchend", function(){
    img.src = ".mingkem.png"
    audio.play();
});
