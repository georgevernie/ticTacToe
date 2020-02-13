//*Variables and Data Type Declaration. 
let player = 0;
let moveCount = 0;
let isDone = false;
let player1Score = 0;
let player2Score = 0;
let x = 0;
let cell = document.querySelectorAll('.top.left, .top.center, .top.right, .middle.left, .middle.center, .middle.right, .bottom.left, .bottom.center, .bottom.right');
let scoreBoard = document.querySelectorAll('#player1, #player2');

cell.forEach(function (cell) {
    cell.addEventListener("click", cellClicked);
});

function cellClicked(e) {
    // * Basic Movement And Turn Logic
    if (player == 0 && e.target.textContent != 'X' && e.target.textContent != 'O') {
        e.target.textContent = 'X';
        player++;
        moveCount++;
    }
    else if (player == 1 && e.target.textContent != 'X' && e.target.textContent != 'O') {
        e.target.textContent = 'O';
        player--;
        moveCount++;
    }
    //* Lets the players know that there is something in that cell already.
    else if (e.target.textContent == 'X' || e.target.textContent == 'O') {
        alert("Invalid Move!");
    }

    // * Checks each horizontal section to see if there was a win.
    for(let x = 0; x <= 6; x += 3){
        if (cell[x].textContent == 'O' || cell[x].textContent == 'X') {
            if (cell[x + 1].textContent == cell[x].textContent && cell[x + 2].textContent == cell[x].textContent) {
                alert(cell[x].textContent + "'s Won Horizontally!");
                isDone = true;
                if(cell[x].textContent == 'X'){
                    player1Score++;
                    scoreBoard[0].textContent = player1Score;
                }
                else if(cell[x].textContent == 'O'){
                    player2Score++;
                    scoreBoard[1].textContent = player2Score;
                }
            }
        }
    }
    //* Checks each row vertically for wins
    for(let x = 0; x <= 2; x++){
        if (cell[x].textContent == 'O' || cell[x].textContent == 'X') {
            //check horizontal
            if (cell[x + 3].textContent == cell[x].textContent && cell[x + 6].textContent == cell[x].textContent) {
                alert(cell[x].textContent + "'s Won Vertically!");
                isDone = true;
                if(cell[x].textContent == 'X'){
                    player1Score++;
                    scoreBoard[0].textContent = player1Score;
                }
                else if(cell[x].textContent == 'O'){
                    player2Score++;
                    scoreBoard[1].textContent = player2Score;
                }
            }
        }
    }
    // * Checks the Diagonals for a win.
    
    x = 0;
    console.log(x);
    //Diagonal 1
    if (x == 0 && cell[x].textContent == 'O' || cell[x].textContent == 'X') {
        console.log("I am THere!");
        if (cell[x + 4].textContent == cell[x].textContent && cell[x + 8].textContent == cell[x].textContent) {
            alert(cell[x].textContent + "'s Won Diagonally!");
            isDone = true;
            if(cell[x].textContent == 'X'){
                player1Score++;
                scoreBoard[0].textContent = player1Score;
            }
            else if(cell[x].textContent == 'O'){
                player2Score++;
                scoreBoard[1].textContent = player2Score;
            }
        }
    }
    
    x = 2;
    console.log(x);
    if (x == 2 && cell[x].textContent == 'O' || cell[x].textContent == 'X') {
        console.log("I am Here!");
        if (cell[x + 2].textContent == cell[x].textContent && cell[x + 4].textContent == cell[x].textContent) {
            alert(cell[x].textContent + "'s Won Diagonally!");
            isDone = true;
            if(cell[x].textContent == 'X'){
                player1Score++;
                scoreBoard[0].textContent = player1Score;
            }
            else if(cell[x].textContent == 'O'){
                player2Score++;
                scoreBoard[1].textContent = player2Score;
            }
        }
    }
    //Checks for a tied Game.
    if (moveCount == 9 && isDone == false) {
        alert("Game Ended with a Tie!");
        isDone = true;
        player1Score++;
        scoreBoard[0].textContent = player1Score;
        player2Score++;
        scoreBoard[1].textContent = player2Score;

    }

    if (isDone == true){
        for(let z = 0; z < cell.length; z++){
            cell[z].textContent = '';
        }
        isDone = false;
        moveCount = 0;
        player = 0;
    }
    
    
}
