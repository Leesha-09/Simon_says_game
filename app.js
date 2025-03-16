let gameSeq=[];
let userSeq=[];
let started= false;
let level=0;
let btncolors =["yellow","pink","purple","green"];
let h4=document.querySelector("h4");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("NNNNNNNNN");
        started=true;
        levelUp();
    }
    
});
function levelUp(){
    userSeq=[];
    level++;
    h4.innerText= `Level ${level}`;
    //Random color choose for gameSeq
    let randomTdx= Math.floor(Math.random() *3);
    let randomClr= btncolors[randomTdx];
    let randombtn=document.querySelector(`.${randomClr}`);
    gameSeq.push(randomClr)
    gameFlash(randombtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },500);
}

function btnPress (){
    let btn=this;
    userFlash(btn);
    userClr= btn.getAttribute("id");
    console.log(userClr);
    userSeq.push(userClr);
    checkbtn(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn")
    for(btn of allbtns){
        btn.addEventListener("click",btnPress);
}

function checkbtn(idx){
    
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h4.innerHTML= `Game Over! Your Score was <b>${level}</b> <br> Press any key to continue`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}