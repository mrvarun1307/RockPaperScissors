let uCount=0;
let cCount=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let ys=document.querySelector("#ys");
let cs=document.querySelector("#cs");
let c=document.querySelector(".container");

function getComChoice() 
{
    const options = ["rock","paper","scissors"];
    const idx = Math.floor(Math.random() *3);
    return options[idx];
}

function playGame(userChoice) 
{
    console.log("your choice=>",userChoice);
    const comChoice =getComChoice();
    console.log( "com choice = >",comChoice);

    //fight 
    if(userChoice === comChoice)
        {
            drawGame();
        }
    else
    {
        let userWin=true;
        if(userChoice === "rock")
            {
                userWin = comChoice === "paper" ? false : true;
            }
        else if(userChoice === "paper")
            {
                userWin = comChoice === "scissors" ? false : true;
            }
        else
            {
                userWin = comChoice === "rock" ? false : true;
            }
        
        showWinner(userWin);
    }
}

const drawGame = () => 
    {
        console.log("Draw game");
        msg.innerText = "Hum Sath Sath Haiii";
        c.style.backgroundColor = "yellow";
    }

const showWinner = (userWin) =>
{
    if(userWin)
        {
            msg.innerText = " 7 Croreeeee :)";
            c.style.backgroundColor = "#37ff00";
            uCount++;
            ys.innerText = uCount;
        }
    else
    {
        msg.innerText = "Beta tumse na ho payega";
        c.style.backgroundColor = "red";
        cCount++;
        cs.innerText = cCount;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});