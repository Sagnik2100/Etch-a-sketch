let click= true;
let color="red";
function populateBoard(size){
        let board= document.querySelector(".board");
        let squares=board.querySelectorAll('div');
       squares.forEach((div) => div.remove());
    board.style.gridTemplateRows=`repeat(${size},1fr)`;
    board.style.gridTemplateColumns=`repeat(${size},1fr)`;
    let amount=size*size;
    for(let i=0;i<amount;i++){
        let square=document.createElement('div');
        square.addEventListener("mouseover",changeColor);
        square.style.backgroundColor="white";
        board.insertAdjacentElement('beforeend', square);
    }
}
populateBoard(15);
function takeEntry(input){
    if(input<=100 && input>=10){
        populateBoard(input);
    }
    else{
        alert("out of bounds");
    }
    
}
function changeColor(){
    if(click){
    if((color=="random")){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else{
    this.style.backgroundColor=color;
}
}
}
function boxColor(choice){
    color=choice;
}
function reset(){
    let board=document.querySelector('.board');
    let squares=board.querySelectorAll('div');
    squares.forEach((div)=>div.style.backgroundColor='white');
}
document.querySelector('body').addEventListener('click',()=>{click=!click});