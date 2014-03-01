beforeEach(function() {
  Space.spaces = [];
  Board.spaces = [];
  Player.players = [];
  Player.spotsUsed = [];
});

describe('Player', function() {
  describe('create', function() {
      it("assigns a player x or o", function() {
      var testPlayer = Player.create("playerX");
      Player.isPrototypeOf(testPlayer).should.equal(true);
      testPlayer.playerName.should.equal("playerX");
    });
  });
});
describe('Space', function() {
  describe('create', function() {
      it("initializes the space with it's coordiates", function() {
      var testSpace = Space.create(1, 2);
      Space.isPrototypeOf(testSpace).should.equal(true);
      testSpace.coordinateX.should.equal(1);
      testSpace.coordinateY.should.equal(2);
    });
  });
  describe('markBy', function() {
      it("return what player marked the space", function() {
      var testPlayer = Player.create("playerX");
      var testSpace = Space.create(1, 2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    });
  });
});

describe('Board', function() {
  describe('create', function() {
    it('creates 9 space when it is initialized',function() {
      var testBoard = Board.create();
      Board.spaces.should.eql(Board.spaces);
    });
  });
  describe('find', function() {
    it("returns a space by its coordinates" ,function() {
      var testBoard = Board.create();
      var space = Space.create(1,2);
      testBoard.find(1,2).should.eql([space]);
    });
  });
  describe('didWin', function() {
    it("returns true if the player has won" ,function() {
      var testBoard = Board.create();
      var testPlayer = Player.create("playerX");
      testPlayer.spotsUsed = [[1,1],[1,2],[1,3]];
      var winn = testBoard.didWin(testPlayer);
      winn.should.equal(true);
    });
  });
});
describe('Game', function() {
  describe('create', function() {
    it('initializes a game with 2 players and a board', function() {
      var testGame = Game.create();
      Game.isPrototypeOf(testGame).should.equal(true);
    });
  });
  describe('nextTurn', function() {
    it('moves to the next turn', function() {
      var testGame = Game.create();
      var playerX = Player.create('playerX');
      var playerO = Player.create('playerO');
      testGame.nextTurn(playerX).should.equal(playerO.playerName);
    });
  });
})
