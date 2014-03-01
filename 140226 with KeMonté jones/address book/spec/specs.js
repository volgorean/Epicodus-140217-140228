beforeEach(function() {
  Contact.all = [];
  Contact.addresses = [];
  Contact.phones = [];
});

describe("Contact", function() {
  describe("createAddress", function() {
    it("creates an address object", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      Address.isPrototypeOf(testAddress).should.equal(true);
    });
    it("adds the address to the addresses property of the contact", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress("street", "city", "state");
      Contact.addresses.should.eql([testAddress]);
    });
  });
  describe('createPhone', function() {
    it('adds the phone number to the phones property of the contact', function() {
      var testContact = Contact.create();
      var testPhone = testContact.createPhone("number");
      Contact.phones.should.eql([testPhone]);
    });
  });
  describe("initialize", function() {
    it("sets the first and last name", function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.firstName.should.equal("Mary");
      testContact.lastName.should.equal("Jane");
      testContact.addresses.should.eql([]);
    });
  });
  describe('create', function() {
    it('adds the contact to .all property', function() {
      var testContact = Contact.create();
      Contact.all.should.eql([testContact]);
    });
  });
});
