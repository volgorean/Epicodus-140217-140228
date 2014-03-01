describe('scrabbleScore', function() {
  it('returns value of a word in scrabble', function() {
    scrabbleScore("scrabble").should.equal(14);
  });

  it("returns 2 when given the letter D, or G", function() {
    scrabbleScore("d").should.equal(2);
  });

  it("returns 3 when given B, C, M or P", function() {
    scrabbleScore("M").should.equal(3);
  });

  it("returns 4 when given the letters f, h, v, w, or y", function() {
    scrabbleScore("w").should.equal(4);
  });

  it("returns 5 when given the letter K", function() {
    scrabbleScore("K").should.equal(5);
  });

  it("returns 8 when given the letters J, or X", function() {
    scrabbleScore("x").should.equal(8);
  });

  it("returns 10 when given the letters Q or Z", function() {
    scrabbleScore("Q").should.equal(10);
  });

  it("returns 5 when given the word cat", function() {
    scrabbleScore("cat").should.equal(5);
  });

  it("returns an error to the user when given a number", function() {
    scrabbleScore(47).should.equal("Please enter a single word with no digits or punctuation.");
  });

  it("returns an error to the user when given more than one word separated by white spaces.", function() {
    scrabbleScore("the cat").should.equal("Please enter a single word with no digits or punctuation.");
  });

  it("returns an error to the user when given a punctuation.", function() {
    scrabbleScore("in the hat!").should.equal("Please enter a single word with no digits or punctuation.");
  });

});
