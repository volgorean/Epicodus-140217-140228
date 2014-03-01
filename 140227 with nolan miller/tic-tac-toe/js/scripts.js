var Player = {
  players: [],
  create: function(playerName) {
    var player = Object.create(Player);
    player.playerName = playerName;
    Player.players.push(player);
    player.spotsUsed = [];
    return player;
  }
};
var Space = {
  create: function(coordinateX, coordinateY) {
    var space = Object.create(Space);
    space.coordinateX = coordinateX;
    space.coordinateY = coordinateY;
    return space;
  },
  markBy: function(player) {
    this.markedBy = player;
  }
};  
var Board = {
  turns : [1, 2, 3, 4, 5, 6, 7, 8, 9],
  wins: [[[1,1],[1,2],[1,3]], [[2,1],[2,2],[2,3]], [[3,1],[3,2],[3,3]],
        [[1,1],[2,1],[3,1]], [[1,2],[2,2],[3,2]], [[1,3],[2,3],[3,3]], 
        [[1,1],[2,2],[3,3]], [[3,1],[2,2],[1,3]]],
  spaces: [],
  create: function() {
    var board = Object.create(Board);
    for (var i=1; i < 4; i++) {
      for (var j=1; j <4; j++) {
        var space = Space.create(i,j);
        Board.spaces.push(space);
      };
    };
    return board;  
  },
  find: function(coordinateX, coordinateY) {
    var found = Board.spaces.filter(function(space) {
      return space = (coordinateY === space.coordinateY && coordinateX === space.coordinateX);
    });
    return found;
  },
  didWin: function(player) {
    var winner = false;
    var inArow = 0;
    Board.wins.forEach(function(win) {
      inArow = 0;
      win.forEach(function(coordinateSet) {
        player.spotsUsed.forEach(function(playerCoord) {
          console.log(coordinateSet);
          console.log(playerCoord);
          if (coordinateSet[0] === playerCoord[0] && coordinateSet[1] === playerCoord[1]) {
            inArow++;
            console.log(inArow);
          }          
        });
      if (inArow === 3) {
          winner = true;
      };
    });  
    return winner;
  });
  }
};
var Game = {
  create: function() {
    var game = Object.create(Game);
    var playerX = Player.create("PlayerX");
    var playerO = Player.create("PlayerO");
    var board = Board.create();
    var currentPlayer = playerX.playerName;
    return game;
  },
  nextTurn: function(currentPlayer) {
    Player.players.forEach(function(player){
    if (currentPlayer === player.playerName) {
        return currentPlayer = player.playerName;
      } else {
        currentPlayer = player.playerName;
      }
    });
    return currentPlayer;
  }
};

$(document).ready(function() {
  var game = Game.create();
  var board = Board.create();
  var playerO = Player.create("PlayerO");
  var playerX = Player.create("PlayerX");
  var turnCounter = 9;
  var currentPlayer = playerX.playerName;

  $('#gameboard td').click(function() {
    board.spaces.markBy(currentPlayer.playerName);

    if (turnCounter % 2 === 1) {
      $(this).text("X");
      board.spaces.markedBy = currentPlayer.playerName;
    } else {
      $(this).text("O");
    }
    turnCounter--;

    if (playerO.didWin === true) {
      alert("Player O wins!");
    } else if (playerX.didWin === true) {
      alert("Player X wins!");
    }

    var currentPlayer = Game.nextTurn(currentPlayer);

  });


})
