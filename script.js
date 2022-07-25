const ToTopButton = document.querySelector("#ToTopButton")

ToTopButton.addEventListener("click", function () {
// window.scrollTo(0, 0);

window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
});
});

var gameStart = document.getElementById('RoShamBo')
var options = ["R", "P", "S"];




function rockPaperScissors() {
    var userChoice = window.prompt("Choose R, P, or S!");
    if (!userChoice) {
        return;
      }
      
    userChoice = userChoice.toUpperCase();    
    var randomNumber = Math.floor(Math.random() * options.length);
    var computerChoice = options[randomNumber];

    window.alert("The Computer chose " + computerChoice)

    if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "S" && computerChoice === "P") ||
        (userChoice === "P" && computerChoice === "R")
        
        ) 
        { window.alert("You win!")
    }
    else if (userChoice == computerChoice) {
        window.alert("Draw!")
    } else window.alert("You Lose! :(")

}

gameStart.addEventListener("click", rockPaperScissors)
