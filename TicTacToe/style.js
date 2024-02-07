let boxes = document.querySelectorAll(".btnBox");
let head = document.querySelector("h1");
let newGameBtn = document.querySelector(".resetBtn");
let newBtn = document.querySelector(".newBtn");
let turny = true;

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((btnBox) => {
    btnBox.addEventListener("click", () => {
        if (turny) {
            btnBox.innerText = "Y";
            turny = false;
        } else {
            btnBox.innerText = "X";
            turny = true;
        }
        btnBox.disabled = true;

        checkWinner();
        
    });
});

let disableboxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

let enableboxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
checkWinner = function () {
    for ( let pattern of winPattern){
        // console.log(pattern); // get all pattern
        console.log(pattern[0], pattern[1], pattern[2]);// Identify Individual index  
        // console.log(
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );  identify values

            let posval1 = boxes[pattern[0]].innerText;
            let posval2 = boxes[pattern[1]].innerText;
            let posval3 = boxes[pattern[2]].innerText;

            if (posval1 !="" && posval2 !="" && posval3 !="") {
                if (posval1 == posval2 && posval2 == posval3) {
                    console.log("Winner",posval1 );
                    head.innerText = `Congratulations: ${posval1}`;
                    disableboxes();

                }
            }
    }
};

let resetGame = () => {
    turny = true;
    enableboxes();
};


newGameBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);