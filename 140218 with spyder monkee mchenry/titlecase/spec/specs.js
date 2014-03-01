describe('leapYear', function() {
  it('Capitilises the first letter of every important word.', function() {
    titleCase("james").should.equal("James");
  });

  it('Capitilises the first letter of every important word.', function() {
    titleCase("james brown").should.equal("James Brown");
  });

  it('Capitilisesthe first letter of every important word, even numbers', function() {
    titleCase('james brown 4').should.equal('James Brown 4');
  });

  it('Capitilisesthe first letter of every important word, even numbers', function() {
    titleCase(' james brown 4').should.equal(' James Brown 4');
  });

  it('Capitilises the first letter of every important word, and doesn\'t capitilise articles, coordinating junctions, and prepositions', function() { 
    titleCase(' james it brown 4').should.equal(' James it Brown 4');
    titleCase('kskskfkjnfsd').should.equal('Kskskfkjnfsd');
  });  
});
