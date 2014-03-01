describe('encrypt', function() {
  it('seperates input into an array with each character as a seperate index', function() {
    encrypt("fit neatly into a square, choose the number of columns that corresponds to the smallest square that is larger than the number of characters in the message.").should.eql(["T", "h", "e", " ", "s", "p", "a", "c", "e", "s", " ", "a", "n", "d", " ", "p"]);
  });
});
