var List = {
};

var Lists = {

};

$(document).ready(function() {
  var newList = Object.create(List);
   newList.things = [];
  var newLists = Object.create(Lists);
  


  $("button#submit").click(function() {  
    var current = $("input.addToDo").val();
    newList.things.push(current);
    $("ul#toDoList").text("");


    newList.things.forEach(function(index) {
      $("ul#toDoList").append("<li>" + index + "</li>");
      //$("select#listPicker").append("<option value='"+pool+"'>Household chores</option>");
      $("select#listPicker").append("<option value="+index+">"+index+"</option>");
    });


      event.preventDefault();
  });
});
