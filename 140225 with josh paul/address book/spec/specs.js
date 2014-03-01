describe('Address', function() {
  describe("fullAddress", function() {
    it("returns the full address the nice formatting", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "1 Park Ave";
      testAddress.city = "New York";
      testAddress.state = "New York";
      testAddress.fullAddress().should.equal("1 Park Ave, New York, New York");
    });
  });
});
describe('Phone', function() {
  describe("formatPhone", function() {
    it("returns the full phone number with nice formatting", function() {
      var testPhone = Object.create(Phone);
      testPhone.areaCode = "860";
      testPhone.firstThree = "336";
      testPhone.lastFour = "1346";
      alert(testPhone.areaCode);

      testPhone.formatPhone().should.equal("8603361346");

    });
  });
});
