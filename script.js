let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".Restart");
let newGame = document.querySelector(".new-btn");
let win1 = document.querySelector(".win");
let playAgain=document.querySelector(".tie");


let turn = true;



const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn === true) {
            box.innerText = "O";
            turn = false;

        }
        else {
            box.innerText = "X";

            turn = true;
        }

        box.disabled = true;

        checkWinner();
    })
}

)
let count = 0;

const checkWinner = () => {
    let winnerFound = false;
    for (let pettern of winPattern) {


        let pos1Val = boxes[pettern[0]].innerText;
        let pos2Val = boxes[pettern[1]].innerText;
        let pos3Val = boxes[pettern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {

            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner is", pos1Val);
                winnerFound = true;
                showWinner(pos1Val);
                disableBox();

            }
        };
    };

    


    if (winnerFound === false && count === boxes.length) {
        console.log("draw");
        playAgain.classList.remove("hide");
        newGame.classList.remove("hide");
        reset.classList.add("hide");
    };


}


const disableBox = () => {
    for (let dis of boxes) {
        dis.disabled = true;
    }


};

const showWinner = (winner) => {
    win1.innerText = `Winner is ${winner}`;
    win1.classList.remove("hide");
    newGame.classList.remove("hide");
    reset.classList.add("hide");
};

const resetBtn = () => {
    turn = true;
    playAgain.classList.add("hide");
    win1.classList.add("hide");
    newGame.classList.add("hide");
    reset.classList.remove("hide");
    enableBox();
    setBoxColor();

};

const enableBox = (box) => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }


};

newGame.addEventListener("click", resetBtn);
reset.addEventListener("click", resetBtn);


const setBoxColor = () => {
    count = 0;
    for (box of boxes) {

        if (box.innerText === "O") {
            box.style.color = "black";
            count++;
        }
        else if (box.innerText === "X") {
            box.style.color = " rgb(248, 124, 124)";
            count++;
        }

    }
    
    checkWinner();
};




boxes.forEach((box) => {
    box.addEventListener("click", setBoxColor);

});


