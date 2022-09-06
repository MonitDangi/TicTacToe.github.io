 let music = new Audio("music.mp3");
 let gameover = new Audio("gameover.mp3");
 let move = new Audio("ting.mp3");
 let turn = "X";
 let gameOver = false;
 let xplayer ='Player1';
 let oplayer ='Player2';
 let scoreX = 0;
 let scoreO = 0;

 //function to show player names
 let name1 = document.querySelector('.nameX').innerText = xplayer;
 let name2 = document.querySelector('.nameO').innerText = oplayer;

 // functions  to take user's names
 let xp = document.querySelector('.submit-name1');
 xp.addEventListener('click',()=>{
     xplayer = document.getElementsByClassName('name1')[0].value;
     document.querySelector('.nameX').innerText = xplayer;
     return;
    })
    let op =document.querySelector('.submit-name2');
    op.addEventListener('click',()=>{
        oplayer = document.getElementsByClassName('name2')[0].value;
        document.querySelector('.nameO').innerText = oplayer;
        return;
    })


    
    document.querySelector('.scx').innerText = scoreX;
    document.querySelector('.sco').innerText = scoreO;
    //fuction to change turn
 const changeTurn = ()=>{
    return turn==="X"?"O":"X";
 }

 //fuction to check win
 const checkWin = ()=>{
     let boxText = document.getElementsByClassName('box-text');
     let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    win.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText)&&(boxText[e[2]].innerText === boxText[e[1]].innerText)&&boxText[e[0]].innerText!=''){
            gameOver = true;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width= "156px";
            if(boxText[e[0]].innerText=='X'){
                document.querySelector('.info').innerText = xplayer + " Won";
                scoreX = scoreX+1;
                document.querySelector('.scx').innerText = scoreX;
            }
            else{
                document.querySelector('.info').innerText = oplayer + " Won";
                scoreO = scoreO+1;
                document.querySelector('.sco').innerText = scoreO;
            }
        }
    })
}


//Game logic
//  music.play();
 let boxes = document.getElementsByClassName("box");
 Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.box-text');
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''&&!gameOver){
            boxText.innerText = turn;
            turn = changeTurn();
            move.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn For "+turn;
            }
        }
    })
 })


 //function to reset
 reset.addEventListener('click',()=>{
    let boxText = document.querySelectorAll('.box-text');
    Array.from(boxText).forEach(element =>{
        element.innerText ='';
    })
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width= "0";
    gameOver = false;
    return;
 })

 resetAll.addEventListener('click',()=>{
    let boxText = document.querySelectorAll('.box-text');
    Array.from(boxText).forEach(element =>{
        element.innerText ='';
    })
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width= "0";
    gameOver = false;
    scoreO =0;
    scoreX=0;
    xplayer ='Player1';
    oplayer ='Player2';
    document.querySelector('.scx').innerText = scoreX;
    document.querySelector('.sco').innerText = scoreO;
    document.querySelector('.nameX').innerText = xplayer;
    document.querySelector('.nameO').innerText = oplayer;
    turn="X";
    return;
 })

