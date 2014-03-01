describe('anagramCheck', function() {
  it('it is true if a word is not an anagram of another word.', function() {
    anagramCheck("cat","dog act cat ninja").should.eql(['act', 'cat']);
  }); 
});
