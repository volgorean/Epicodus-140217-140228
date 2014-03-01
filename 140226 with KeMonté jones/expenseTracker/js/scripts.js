var Purchase = {
  allItems: [],
  createPurchase: function(description, price) {
    var newPurchase = Object.create(Purchase)
    newPurchase.description = description;
    newPurchase.price = price;
    Purchase.allItems.push(newPurchase);
    return newPurchase;
  },
};

var Category = {
  allCategories: [],
  createCategory: function(categoryName) {
    var newCategory = Object.create(Category)
    newCategory.categoryName = categoryName;
    Category.allCategories.push(newCategory);
    return newCategory;
  }
};

$(document).ready(function() {
  $("form#expenseTracker").submit(function(event) {
    event.preventDefault();
    var inputtedDescription = $("input#inputDescription").val();
    var inputtedCost = $("input#inputCost").val(); //parse int?
    var tempPurchase = Purchase.createPurchase(inputtedDescription, inputtedCost);

    $(".outputDescription").empty();
    $(".outputPrice").empty();
    Purchase.allItems.forEach(function(purchase) {
      $(".outputDescription").append("<br>" + purchase.description);
      $(".outputPrice").append("<br>" + purchase.price);
    });
  });

  $("form#categoryTracker").submit(function(event) {
    event.preventDefault();
    var inputtedCategory = $("input#inputCategory").val();
    var tempCategory = Category.createCategory(inputtedCategory);

    $("ul#categories").empty();
    Category.allCategories.forEach(function(category) {
      $("ul#categories").append("<li>" + category.categoryName + "</li>");
    });
  });
});

