let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game Started");
        started = true;

        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },280);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText =`Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnFlash(randbtn);
}

let highScore = 0;
let highScoreElement = document.querySelector("#highScore");

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML = `Game over!Your score was <b>${level}</b> <br> Press any key to start.`;


        if (level > highScore) {
            highScore = level;
            highScoreElement.innerText = `Highest Score: ${highScore}`;
        }

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);


        reset();
    }
}

function btnpress(){
   let btn = this;
   btnFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress)
}

function reset(){
    started =false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}