let userScore;
let compScore;

function initialiseScores()
{
    userScore = localStorage.getItem("userScore")
    compScore = localStorage.getItem("compScore")

    if(userScore == null ||  isNaN(userScore))
    {
        localStorage.setItem("userScore",0)
        userScore = 0;

    }
    else
    {
        userScore = Number(localStorage.getItem("userScore"))
    }
    if(compScore == null || isNaN(compScore))
    {
        localStorage.setItem("compScore",0)
        compScore = 0;
    }
    else
    {
        compScore = Number(localStorage.getItem("compScore"))
    }
}
initialiseScores()



document.getElementById("reset").addEventListener("onclick", () => change());
function displayRules(){
    let rules = document.querySelector(".rulesList")
    let close = document.querySelector("#close")
    rules.style.display = "block"
    close.style.display = "block"
}

function closeDetails(){
    let rules = document.querySelector(".rulesList")
    let close = document.querySelector("#close")
    rules.style.display = "none"
    close.style.display = "none"
}



function change(){
    if(compScore >= 15)
    {
        localStorage.setItem("userScore",0)
        localStorage.setItem("compScore",0)
        userScore = 0
        compScore = 0
        let computeScore = document.querySelector(".computerScore")
        computeScore.innerText = 0
        let yourscore = document.querySelector(".YourScore")
        yourscore.innerText = 0

    }
    let select = document.querySelector(".selectedSymbols")
    select.style.display = "none"
    let Triangle = document.querySelector(".triangle")
    Triangle.style.display = "block"
}

function set(){
    let select = document.querySelector(".selectedSymbols")
    select.style.display = "none"
    
    let top = document.querySelector(".top")
    top.style.display = "flex"

    let down = document.querySelector(".down")
    down.style.display = "block"

    let celebrate = document.querySelector(".celebration")
    celebrate.style.display = "none"

    
    let Triangle = document.querySelector(".triangle")
    Triangle.style.display = "block"

    let yourscore = document.querySelector(".YourScore")
    let computeScore = document.querySelector(".computerScore")
    yourscore.innerText = "0"
    computeScore.innerText = "0"
}


window.onload = function(){
    let yourscore = document.querySelector(".YourScore")
    let computeScore = document.querySelector(".computerScore")
    yourscore.innerText = localStorage.getItem("userScore")
    computeScore.innerText = localStorage.getItem("compScore")
}





let symbols = ["rock","paper","scissor"]

let inHtml = {
    rock : `<img src="./ROCK2.png" alt="rock"> `,
    paper : ` <img  src="./paper21.jpg" alt="paper"> `,
    scissor : `<img src="./cut.png" alt="Scissor">`
}


function selectSymbol(selectedSymbol)
{
    // we have to select the symbol we have to assign a random symbol to computer apart from human symbol
    let randomNumber = Math.floor(Math.random()*12.1234)
    randomNumber%=3
    let computerSymbol = symbols[randomNumber]
    let winner = evaluateResult(selectedSymbol,computerSymbol)
    let Triangle = document.querySelector(".triangle")
    Triangle.style.display = "none"

    let select = document.querySelector(".selectedSymbols")
    select.style.display = "grid"
    //console.log(selectedSymbol,computerSymbol)
    let btn1 = document.querySelector(".btn1")
    let btn2 = document.querySelector(".btn2")
    btn1.id = selectedSymbol
    btn2.id = computerSymbol

    btn1.innerHTML = inHtml[selectedSymbol]
    btn2.innerHTML = inHtml[computerSymbol]  



    
    

    
    
   

    let item2 = document.querySelector(".item2")
    if(winner === "Tied")
    {
        item2.innerHTML = `<p> TIED </p>
        
        <button id="reset" onclick="change()" > PLAY AGAIN </button>`
        let inner = document.querySelectorAll(".inner")
        let mid = document.querySelectorAll(".mid")
        let outer = document.querySelectorAll(".outer")
        inner[0].style.border = "none"
        inner[1].style.border = "none"
        mid[0].style.border = "none"
        mid[1].style.border = "none"

        outer[0].style.border = "none"
        outer[1].style.border = "none"
    }
    else if(winner === selectedSymbol)
    {
        item2.innerHTML = ` <p> YOU WON </p>
                <p> AGAINST PC</p>
                <button id="reset" onclick="change()" > PLAY AGAIN </button> `
        let yourscore = document.querySelector(".YourScore")
        userScore++;
        localStorage.setItem("userScore",userScore)
        yourscore.innerText = localStorage.getItem("userScore")
        if(userScore >= 15)
        {
            let top = document.querySelector(".top")
            let down = document.querySelector(".down")
            top.style.display = "none"
            down.style.display = "none"
            let celebrate = document.querySelector(".celebration")
            celebrate.style.display = "block"
            let img = document.querySelector(".celebration img")
            img.style.animation =  "trophy 1.3s linear 2 normal";
            localStorage.setItem("userScore",0)
            localStorage.setItem("compScore",0)
            userScore = 0
            compScore = 0
            yourscore.innerText = 0
            let computeScore = document.querySelector(".computerScore")
            computeScore.innerText = 0
        }

        

        let inner2 = document.querySelector(".inner2")
        let mid2 = document.querySelector(".mid2")
        let outer2 = document.querySelector(".outer2")
        inner2.style.border = "none"
        mid2.style.border = "none"
        outer2.style.border = "none"

        //let pick1 = document.querySelector(".pick1")
        //pick1.style.marginBottom = "-10vh"

        let inner1 = document.querySelector(".inner1")
        let mid1 = document.querySelector(".mid1")
        let outer1 = document.querySelector(".outer1")
        inner1.style.border = "23px solid #1dd01a"
        mid1.style.border = "18px solid #3eda39"
        outer1.style.border = "15px solid #89e765"

        //let pick2 = document.querySelector(".pick2")
        // pick2.style.marginBottom = "10vh"
        

        
    }
    else
    {
        item2.innerHTML = ` <p> YOU LOST </p>
                <p> AGAINST PC</p>
                <button id="reset" onclick="change()" > PLAY AGAIN </button>`
        let computeScore = document.querySelector(".computerScore")
        compScore++;
        localStorage.setItem("compScore",compScore)
        computeScore.innerText = compScore
        
        let inner1 = document.querySelector(".inner1")
        let mid1 = document.querySelector(".mid1")
        let outer1 = document.querySelector(".outer1")
        inner1.style.border = "none"
        mid1.style.border = "none"
        outer1.style.border = "none"

        //let pick2 = document.querySelector(".pick2")
        //pick2.style.marginBottom = "-10vh"

        

        let inner2 = document.querySelector(".inner2")
        let mid2 = document.querySelector(".mid2")
        let outer2 = document.querySelector(".outer2")
        inner2.style.border = "23px solid #1dd01a"
        mid2.style.border = "18px solid #3eda39"
        outer2.style.border = "15px solid #89e765"
        //let pick1 = document.querySelector(".pick1")
        //pick1.style.marginBottom = "10vh"

       
    }
   
    

    

    
    
    
    


}
function evaluateResult(selectedSymbol,computerSymbol)
{
    if(selectedSymbol == computerSymbol)
    {
        return "Tied"
    }
    else if(selectedSymbol== "rock" && computerSymbol=="scissor")
    {
        return selectedSymbol
    }
    else if(selectedSymbol=="paper" && computerSymbol=="rock")
    {
        return selectedSymbol
    }
    else if(selectedSymbol=="scissor" && computerSymbol=="paper")
    {
        return selectedSymbol
    }
    else
    {
        return computerSymbol
    }
}






