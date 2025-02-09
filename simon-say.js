let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;
let h2  = document.querySelector("h2");
document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("key press");
        started = true;
        levelUp();
    }
  
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    
    if (randbtn) {
        btnFlash(randbtn);
    }
}
function checkAns(idx){
    // console.log("curr level :"+ level);
   
    if (gameSeq[idx] == userSeq[idx]) {
       if (gameSeq.length == userSeq.length) {
      
        setTimeout(levelUp,1000);
       }
        
    }else{
        h2.innerHTML = `Game Over!Your score was <b> ${level} </b> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
    
}

function btnpress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);
    let usercolor = btn.getAttribute("id");
    // console.log(usercolor);
    userSeq.push(usercolor);
    // console.log(userSeq);
    
    checkAns(userSeq.length-1);
}
let all = document.querySelectorAll(".btn");
for (btn of all){
    btn.addEventListener("click", btnpress)
}
function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}
