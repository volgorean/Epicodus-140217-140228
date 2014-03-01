describe('factorize', function() {
  it('multiplies the input by all of the positive integers less than that number', function() {
    factorize(5).should.equal(120);
  });

  it('returns an error message if text is inputed', function() {
    factorize("jim").should.equal(false);
  });

  it('for an input of 0 should return 1', function() {
    factorize(0).should.equal(1);
  });

  it('when given a positive decimal it is rounded to nearest whole number and calculated as normal', function() {
    factorize(4.7).should.equal(120);
  });
});
