let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");
function getcomputerChoice(){
    const choices=['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function convertToWord(letter){
    if(letter ==="r") return "Rock";
    if(letter ==="p") return "Paper";
     return "Scissors";
}
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserWord ="user".fontsize(3).sub();
    const smallCompWord ="comp".fontsize(3).sub();
    result_p.innerHTML=`${convertToWord(userChoice)}(smallUserWord) beats ${convertToWord(computerChoice)}(smallCompWord)   . You win!`;
    
}
function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserWord ="user".fontsize(3).sub();
    const smallCompWord ="comp".fontsize(3).sub();
    result_p.innerHTML=`${convertToWord(userChoice)}(smallUserWord)  loses to  ${convertToWord(computerChoice)}(smallCompWord)   . You lost... `;
    
 }
function draw(userChoice, computerChoice){
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserWord ="user".fontsize(3).sub();
    const smallCompWord ="comp".fontsize(3).sub();
    result_p.innerHTML=`${convertToWord(userChoice)}(smallUserWord)  equals   ${convertToWord(computerChoice)}(smallCompWord)  . It's a draw!`;
    
 } 
function game(userChoice){
    const computerChoice=getcomputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
        win(userChoice,computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(userChoice,computerChoice);
        break;
        case "rr":
        case "ss":
        case "pp":
        draw(userChoice,computerChoice);
        break;
 }
  }
function main() {
    rock_div.addEventListener('click',function(){
        game("r");
    },false)
    paper_div.addEventListener('click',function(){
        game("p");
    },false)
    scissors_div.addEventListener('click',function(){
        game("s");
    },false)
}
main();