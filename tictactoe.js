/*
Tic tac toe. Homework from The Odin Project. Do what you want with it. -vilsl
*/

// Module that handles board logic
const GameBoard = (() => {
    let board = [
        'x','o','o',  // 0 1 2
        'x','o','x',  // 3 4 5
        'x','o','x',  // 6 7 8 
    ];

    const placeTile = (tileID, marker) => {
        let tile = tileID.replace( /^\D+/g, '');
        if (board[tile] === ""){
            board[tile] = marker;
        }
        DisplayController.renderBoard();
    };

    // Checks for three in a row
    const _boardChecker = () => {
        let xWins = 0;
        let oWins = 0;
        // Check if x wins horizontally
        if (board[0] === "x" && board[1] === "x" && board[2] === "x" || board[3] === "x" && board[4] === "x" && board[5] === "x" || board[6] === "x" && board[7] === "x" && board[8] === "x"){
            xWins++;
        }
        // Check if x wins vertically
        if (board[0] === "x" && board[3] === "x" && board[6] === "x" || board[1] === "x" && board[4] === "x" && board[7] === "x" || board[2] === "x" && board[5] === "x" && board[8] === "x"){
            xWins++;
        }
        // Check if x wins diagonally
        if (board[0] === "x" && board[4] === "x" && board[8] === "x" || board[6] === "x" && board[4] === "x" && board[2] === "x"){
            xWins++;
        }
        // Check if o wins horizontally
        if (board[0] === "o" && board[1] === "o" && board[2] === "o" || board[3] === "o" && board[4] === "o" && board[5] === "o" || board[6] === "o" && board[7] === "o" && board[8] === "o"){
            oWins++;
        }
        // Check if o wins vertically
        if (board[0] === "o" && board[3] === "o" && board[6] === "o" || board[1] === "o" && board[4] === "o" && board[7] === "o" || board[2] === "o" && board[5] === "o" && board[8] === "o"){
            oWins++;
        }
        // Check if o wins diagonally
        if (board[0] === "o" && board[4] === "o" && board[8] === "o" || board[6] === "o" && board[4] === "o" && board[2] === "o"){
            oWins++;
        }
        if (xWins === oWins){
            alert("tie!");
        }
        else if (xWins > oWins){
            alert("x wins!");
        }
        else if (oWins > xWins){
            alert ("o wins!");
        }
    };

    const checkBoard = () => {
        _boardChecker();
    };

    return {
        board,
        placeTile,
        checkBoard,
    };

})(); 

// Outputs board and UI to HTML
const DisplayController = (() => {
    const renderBoard = () => {
        let board = GameBoard.board;
        for (let i = 0; i < board.length; i++){
            document.getElementById(`tile${i}`).innerHTML = board[i];
        }
    };

    return {
        renderBoard,
    };

})();

// Calls upon appropriate functions to run game, reset functionality
const Game = (() => {
    DisplayController.renderBoard();
    GameBoard.checkBoard();
})();

// Player objects
const Player = (name) => {
    const getName = () => name;
    const wins = () => wins;
    const piece = () => piece;

    return {
        getName, 
        wins, 
        piece};
};

