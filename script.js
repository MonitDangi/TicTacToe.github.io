 let music = new Audio("music.mp3");
 let gameover = new Audio("gameover.mp3");
 let move = new Audio("ting.mp3");
 let turn = "X";
 let gameOver = false;
 //fuction to change turn
 let p1 = document.getElementsByClassName('.inpu1').innerHTML;
 let p2 = document.getElementsByClassName('.inpu2').innerHTML;


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
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won";
            gameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width= "156px";
        }
    })
}


//Game logic
 //music.play();
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

 reset.addEventListener('click',()=>{
    let boxText = document.querySelectorAll('.box-text');
    Array.from(boxText).forEach(element =>{
        element.innerText ='';
    })
 })