
let mode=document.querySelector("button")
let curmode="light"
mode.addEventListener("click",()=>{
    if(curmode==="light"){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        mode.style.backgroundColor="white";
        mode.style.color="black";
        curmode="dark"
       
    }
    else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        mode.style.backgroundColor="black";
        mode.style.color="white";
        curmode="light"
    }
    
});



let boxes=document.querySelectorAll(".box")
let reset=document.querySelector(".reset")
let newgame=document.querySelector(".newgame")
let msgContainer=document.querySelector(".msgcontainer")
let msg=document.querySelector("#msg")
let turn=true

const winningPatterns=[
                    [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]
                ]
let count=0
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn===true){
            box.innerText="X"
            box.style.color="red"
            turn=false
        }
        else{
            box.innerText="O"
            box.style.color="blue"
            turn=true
        }
       box.disabled = true;
        count++;

    let isWinner = checkWin();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
    })
     

})

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};



const checkWin=()=>{
    for(let pattern of winningPatterns){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
        let posVal1=boxes[pattern[0]].innerText
        let posVal2=boxes[pattern[1]].innerText
        let posVal3=boxes[pattern[2]].innerText

        if(posVal1!=""&&posVal2!=""&&posVal3!=""){
            if(posVal1=== posVal2&&posVal2===posVal3)
                // alert(`Winner ${posVal1}`)
            showWinner(posVal1)
        }
      
    }
   
};

const showWinner= (winner) =>{
   msg.innerText=`Winner is ${winner}`;
   msgContainer.classList.remove("hide")
   disableBoxes()

};

const newGame=()=>{
    turn=true;
    enableBoxes()
    msgContainer.classList.add("hide")

}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true  
   
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false  
        box.innerText=""
    }
}
newgame.addEventListener("click",newGame)