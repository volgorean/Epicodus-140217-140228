describe('queenAttack', function() {
  it('is false if the coordinates are not horizontally, vertically, or diagonally in line with each other', function() {
    queenAttack([1, 1], [2, 3]).should.equal(false);
  });
  it('is false if the coordinates are not horizontally, vertically, or diagonally in line with each other', function() {
    queenAttack([-1, -2], [-3, -4]).should.equal(true);
  });
});
