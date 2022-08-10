// make css
//
// add end game options


    const buttons = document.querySelectorAll("#userRPS > button");
    const generatorButtons = document.querySelectorAll("#computerRPS > img");

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener("click", () => {

            resetButtonsStyle(generatorButtons, buttons);

            let userInput = buttons[i].id;
            userButtonStyle(userInput);
            let generatorInput = randomGenerator();
            generatorButtonStyle(generatorInput, generatorButtons);
            let scoreArray = compareResult(userInput, generatorInput);
    
            console.log(userInput);
            console.log(generatorInput);
            console.log(scoreArray);
    
            if (scoreArray[0] === 1) 
            {
                userScoreCounter();
            } 
            else if (scoreArray[1] === 1) 
            {
                generatorScoreCounter();
            }
        });      
    }

// rock-paper-scissors generator
function randomGenerator() {
    
    let condition = [];
    let generatorArray = ["rock", "paper", "scissors"];

    condition = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

    let generatorInput = generatorArray[condition];

    return generatorInput;
}

function compareResult(userInput, generatorInput) {

    let userScore = 0;
    let generatorScore = 0;

        if (userInput.toLowerCase() === generatorInput) {
            
        } else if(userInput.toLowerCase() === "rock") {
            
            if (generatorInput === "paper") {
                generatorScore++;
            } else if (generatorInput === "scissors") {
                userScore++;
            }

        } else if (userInput.toLowerCase() === "paper") {
    
            if (generatorInput === "rock") {
                userScore++;
            } else if (generatorInput === "scissors") {
                generatorScore++;
            }

        } else if (userInput.toLowerCase() === "scissors") {

            if (generatorInput === "paper") {
                userScore++;
            } else if (generatorInput === "rock") {
                generatorScore++;
            }

        }

        let scoreArray = [userScore, generatorScore];

        return scoreArray;
}

function userScoreCounter() {
    let userScore = document.getElementById("userScore").innerText;
    userScore = parseInt(userScore);
    userScore++;
    document.getElementById("userScore").innerText = userScore;
}

function generatorScoreCounter() {
    let generatorScore = document.getElementById("generatorScore").innerText;
    generatorScore = parseInt(generatorScore);
    generatorScore++;
    document.getElementById("generatorScore").innerText = generatorScore;
}

// user and generator button style function are called after user choice.
function userButtonStyle(userInput) {
    document.getElementById(userInput).firstChild.style.transform= "translateY(-5px)";
    document.getElementById(userInput).firstChild.style.border = "2px solid rgb(212, 212, 55)";
}
function generatorButtonStyle(generatorInput, generatorButtons) {

    if (generatorInput === "rock") {
        document.getElementById(generatorButtons[0].id).style.transform = "translateY(-5px)";
        document.getElementById(generatorButtons[0].id).style.border = "2px solid rgb(212, 212, 55)";
    } else if (generatorInput === "paper") {
        document.getElementById(generatorButtons[1].id).style.transform = "translateY(-5px)";
        document.getElementById(generatorButtons[1].id).style.border = "2px solid rgb(212, 212, 55)";
    } else if (generatorInput === "scissors") {
        document.getElementById(generatorButtons[2].id).style.transform = "translateY(-5px)";
        document.getElementById(generatorButtons[2].id).style.border = "2px solid rgb(212, 212, 55)";
    }

}

// The function immediately calls after user choice to reset buttons styles.
function resetButtonsStyle(generatorButtons, buttons) {

    for (let i = 0; i < generatorButtons.length; i++) {
        document.getElementById(generatorButtons[i].id).style.transform = "translateY(0px)";
        document.getElementById(generatorButtons[i].id).style.border = "2px solid #555";
        document.getElementById(buttons[i].id).firstChild.style.transform = "translateY(0px)";
        document.getElementById(buttons[i].id).firstChild.style.border = "2px solid #555";
    }

}




