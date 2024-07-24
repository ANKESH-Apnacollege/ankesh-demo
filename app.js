let userScore = 0;
let CompScore = 0;

const choices=document.querySelectorAll(".choice");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText="GAME was DRAW Play Again :|";
    msg.style.backgroundColor = "blue";
}

const msg = document.querySelector("#msg");

showWinner= (userWin,userchoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("!!!!!!!!!!!!!  YOU WIN :)  !!!!!!!");
        msg.innerText = `YOU WIN :)  Your ${userchoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    }else{
        CompScore++;
        compScorepara.innerText=CompScore;
        console.log("YOU LOSE :(");
        msg.innerText=`YOU LOSE :( Your ${userchoice} can't beats ${compChoice}` ;
        msg.style.backgroundColor = "red";
    }


}

const genCompChoice = () =>{
    const options = [" rock", "paper" , "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userchoice) => {
    console.log("userchoice = ", userchoice);
    const compChoice = genCompChoice();
    console.log("compChoice",compChoice);

    if(userchoice=== compChoice){
        drawGame();

    }else{
        let userWin = true;
        if(userchoice==="rock"){
            userWin = compChoice === "paper"?false:true;
        }
        if(userchoice==="paper"){
            userWin = compChoice === "scissor"?false:true;
        }
        else{
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice= choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playGame(userchoice);

    })
    
});