/*
Tic tac toe. Homework from The Odin Project. Do what you want with it. -vilsl
*/

// Module that handles board logic
const GameBoard = (() => {
    let _board = [
        '','','',  // 0 1 2
        '','','',  // 3 4 5
        '','','',  // 6 7 8 
    ];

    const _updateBoardArray = (tileID, marker) => {
        let tile = tileID.replace( /^\D+/g, '');
        if (_board[tile] === ""){
            _board[tile] = marker;
        }
    };

    // Checks for three in a row
    const _boardChecker = () => {
        // Check if x wins horizontally
        if (_board[0] === "x" && _board[1] === "x" && _board[2] === "x" || _board[3] === "x" && _board[4] === "x" && _board[5] === "x" || _board[6] === "x" && _board[7] === "x" && _board[8] === "x"){
            playerX.upWins();
        }
        // Check if x wins vertically
        if (_board[0] === "x" && _board[3] === "x" && _board[6] === "x" || _board[1] === "x" && _board[4] === "x" && _board[7] === "x" || _board[2] === "x" && _board[5] === "x" && _board[8] === "x"){
            playerX.upWins();
        }
        // Check if x wins diagonally
        if (_board[0] === "x" && _board[4] === "x" && _board[8] === "x" || _board[6] === "x" && _board[4] === "x" && _board[2] === "x"){
            playerX.upWins();
        }
        // Check if o wins horizontally
        if (_board[0] === "o" && _board[1] === "o" && _board[2] === "o" || _board[3] === "o" && _board[4] === "o" && _board[5] === "o" || _board[6] === "o" && _board[7] === "o" && _board[8] === "o"){
            playerO.upWins();
        }
        // Check if o wins vertically
        if (_board[0] === "o" && _board[3] === "o" && _board[6] === "o" || _board[1] === "o" && _board[4] === "o" && _board[7] === "o" || _board[2] === "o" && _board[5] === "o" && _board[8] === "o"){
            playerO.upWins();
        }
        // Check if o wins diagonally
        if (_board[0] === "o" && _board[4] === "o" && _board[8] === "o" || _board[6] === "o" && _board[4] === "o" && _board[2] === "o"){
            playerO.upWins();
        }

    };

    const checkBoard = () => {
        _boardChecker();
    };

    const returnBoard = () => {
        return _board;
    };

    const resetBoard = () => {
        _board = [
            '','','',  // 0 1 2
            '','','',  // 3 4 5
            '','','',  // 6 7 8 
        ];
    }

    const placeMarker = (tileID, marker) => {
        _updateBoardArray(tileID, marker);
    };

    return {
        returnBoard,
        placeMarker,
        checkBoard,
        resetBoard, 
    };

})(); 

// Outputs board and UI to HTML
const DisplayController = (() => {
    const _boardRenderer = () => {
        let board = GameBoard.returnBoard();
        for (let i = 0; i < board.length; i++){
            let pChild = document.getElementById(`tile${i}`).children;
            pChild[0].innerHTML = board[i];
        }
    };

    const updateInfo = (text) => {
        document.getElementById("gameInfoText").innerHTML = text;
    }

    const renderBoard = () => {
        _boardRenderer();
    }

    return {
        renderBoard,
        updateInfo,
    };
})();

// Calls upon appropriate functions to run game, reset functionality
const Game = (() => {
    let _gameOn = false;
    let _xTurn = false;
    let _oTurn = false;
    let _numTurns = 0;
    
    const play = () => {
        // Updates info screen according to whose turn it is
        if (_numTurns < 9 && _gameOn == true){
            if (_xTurn == true){
                DisplayController.updateInfo(`It is ${playerX.getName()}'s turn.`);
            }
            else if (_oTurn == true){
                DisplayController.updateInfo(`It is ${playerO.getName()}'s turn.`);
            }
            GameBoard.checkBoard();
        }
        // Checks for a winner
        if (_numTurns == 9 && playerX.getWins() == playerO.getWins()){
            DisplayController.updateInfo("That's a tie.");
            _gameOn = false;
        }
        else if (playerX.getWins() > playerO.getWins()) {
            DisplayController.updateInfo(`${playerX.getName()} wins!`);
            _gameOn = false;
        }
        else if (playerO.getWins() > playerX.getWins()) {
            DisplayController.updateInfo(`${playerO.getName()} wins!`);
            _gameOn = false;
        }

        DisplayController.renderBoard();
    };

    const updateTile = (tileID) => {
        if (_gameOn == true){
            if (_xTurn == true){
                GameBoard.placeMarker(tileID, "x");
                _xTurn = false;
                _oTurn = true;
            }
            else if (_oTurn == true) {
                GameBoard.placeMarker(tileID, "o");
                _oTurn = false;
                _xTurn = true;
            }
            play();
        }
        
    };

    const createPlayers = () => {
        let xName = document.getElementById("playerXName").value;
        let oName = document.getElementById("playerOName").value;
        playerX = Player(xName, "x");
        playerO = Player(oName, "o");
        _gameOn = true;
        _xTurn = true;
        play();
    }

    const restart = () => {
        delete playerX;
        delete playerO;
        _gameOn = false;
        _xTurn = false;
        _oTurn = false;
        _numTurns = 0;
        GameBoard.resetBoard();
        DisplayController.renderBoard();
        DisplayController.updateInfo("Please begin by entering player names.");
        document.getElementById("playerXName").value = "";
        document.getElementById("playerOName").value = "";
    }

    return {
        play,
        updateTile,
        createPlayers,
        restart,
    };
})();

// Player objects
const Player = (name, marker) => {
    const getName = () => name;
    const playerMarker = () => marker;
    let _wins = 0;

    const upWins = () => {
        _wins++;
    }

    const getWins = () => {
        return _wins;
    }

    return {
        getName, 
        playerMarker,
        upWins,
        getWins,
    };
};
