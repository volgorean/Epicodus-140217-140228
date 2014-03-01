var Contact = {
  all: [],
  addresses: [],
  phones: [],
  create: function(firstName, lastName) {
    var contact = Object.create(Contact);
    contact.initialize(firstName, lastName);
    Contact.all.push(contact);
    return contact;
  },
  initialize: function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.addresses = [];
  },
  createAddress: function(street, city, state) {
    var address = Object.create(Address);
    address.initialize(street, city, state);
    Contact.addresses.push(address);
    return address;
  },
  createPhone: function(number) {
    var phone = Object.create(Phone);
    phone.initialize(number);
    Contact.phones.push(phone);
    return phone;
  },

  fullName: function() {
    return this.firstName + " " + this.lastName;
  } 
  
};

var Address = {
  initialize: function(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
  },
  fullAddress : function() {
    return this.street + ", " + this.city + ", " + this.state;
  }
};

var Phone = {
  initialize: function(number) {
    this.number = number;
  },

  phoneNumber : function() {
    return this.phonenumber;
  }
};

$(document).ready(function() {
  $("#add-phone-number").click(function(){
    $("#new-phone-number").append( '<div id="new-phone-number">' +
                                      '<div class="new-phone-number">' +
                                        '<div class="form-group">' +
                                          '<label for="new-phone-number">Phone Number</label>' +
                                          '<input type="text" class="form-control new-phone-number">' +
                                        '</div>' +
                                      '</div>' +
                                    '</div>');
                                  });


  $("#add-address").click(function(){
    $("#new-addresses").append(   '<div class="new-address">' +
                                   '<div class="form-group">' +
                                      '<label for="new-street">Street</label>' +
                                      '<input type="text" class="form-control new-street">' +
                                    '</div>' +
                                    '<div class="form-group">' +
                                      '<label for="new-city">City</label>' +
                                      '<input type="text" class="form-control new-city">' +
                                    '</div>' +
                                    '<div class="form-group">' +
                                      '<label for="new-state">State</label>' +
                                      '<input type="text" class="form-control new-state">' +
                                    '</div>' +
                                    '</div>');
                                });
  

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    

    var newContact = Object.create(Contact);
    newContact.initialize(inputtedFirstName, inputtedLastName);
    newContact.addresses = [];

      newContact.phonenumber = [];

    $(".new-phone-number").each(function() {

    var inputtedPhone = $(this).find("input.new-phone-number").val();
    var newPhone = Object.create(Phone);
    newPhone.phonenumber = inputtedPhone;
    newContact.phonenumber.push(newPhone);

    });
    
    newContact.addresses = [];
    
    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      var newAddress = Object.create(Address);
      newAddress.street = inputtedStreet;
      newAddress.city = inputtedCity;
      newAddress.state = inputtedState;

      newContact.addresses.push(newAddress);
    })

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      console.log(newContact.addresses);

      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");

      $("ul#phonenumber").text("");
      newContact.phonenumber.forEach(function(phonenumber){
        $("ul#phonenumber").append("<li>" + phonenumber.phoneNumber() + "</li>");
      });
      });
    });

    this.reset();
  });
});
