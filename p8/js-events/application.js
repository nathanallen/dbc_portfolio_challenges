$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // $('.add').on('click', $('.todo_list'), adder)

    $('.add').on('click', $('.todo_list'), function(){
      console.log("add clicked")
      console.log()
      // input = $(this).val()
      // $('.todo_list').append(buildTodo(input))

    })



    //$('a.delete').on('click', deleter)
    //$('.todo a.delete').on('click', function(){$(this).parents('.todo').remove()})
    // $('a.delete').on('click', deleter)
    // $('a.complete').on('click', completer)

    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
  }

  //Create functions to add, remove and complete todos
  var adder = function(){
    console.log("add clicked")
    console.log($(this))
    input = $(this).val()
    $('.todo_list').append(buildTodo(input))
  }
  var deleter = function(){
    console.log("delete clicked")
    //$('.todo a.delete').parents('.todo').remove()
  }
  var completer = function(){
    console.log("complete clicked")
  }

  $('.todo a.delete').parents('.todo').remove()
  

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  

  bindEvents();
});
