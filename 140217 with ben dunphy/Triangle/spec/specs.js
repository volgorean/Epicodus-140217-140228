describe('triangle', function() {
  it('is false if not all sides are equal', function() {
    triangle(1,2,3).should.equal("isosceles");
  });
});
