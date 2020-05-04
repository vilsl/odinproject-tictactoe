/*
Tic tac toe. Homework from The Odin Project. Do what you want with it. -vilsl
*/

// Module that handles board logic
const GameBoard = (() => {
    let board = [
        'x','o','x',
        'x','x','o',
        'x','o','x',
    ]

    return {
        board,
    }

})(); 

// Outputs board and UI to HTML
const DisplayController = (() => {
    const renderBoard = () => {
        let board = GameBoard.board;
        for (let i = 0; i < board.length; i++){
            document.getElementById(`tile${i}`).innerHTML = board[i];
        }
    }

    return {
        renderBoard,
    };

})();

// Calls upon appropriate functions to run game, reset functionality
const Game = (() => {
    DisplayController.renderBoard();
})();

// Player objects
const Player = (name) => {
    const getName = () => name;
    const wins = () => wins;
    const piece = () => piece;

    return {getName, wins, piece}
};

