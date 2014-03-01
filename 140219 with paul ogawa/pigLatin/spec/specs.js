describe('wordPigLatin', function() {
  it(' adds ay for word that start with a vowel add ay to the end.', function() {
    wordPigLatin("europe").should.equal("europeay");
  }); 
  it(' moves first consonant to the end and adds ay to the end.', function() {
    wordPigLatin("bcdefgh").should.equal("efghbcday");
  });
  it(' moves first two consonants to the end and adds ay to the end.', function() {
    wordPigLatin("llloyd").should.equal("oydlllay");
  });
  it(' moves the first q and u to the end and adds ay to the end.', function() {
    wordPigLatin("quiet").should.equal("ietquay");
  });
  it(' moves all words in sentence to pig latin.', function() {
    phrasePigLatin("It is a quiet day").should.equal("Itay isay aay ietquay ayday ");
  });      
});
