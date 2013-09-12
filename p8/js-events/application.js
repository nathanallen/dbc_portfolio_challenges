$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());
  var list = []

  function bindEvents() {
    $('.add').on('click', makeTodoItem)
  }

  function makeTodoItem(){
    var t = new Todo()
    list.push(t)
    t.deleteListener()
    //t.completeListener()
  }

  function Todo(){
    this.text = $('input.todo').val()
    this.item = $('.todo_list').append(buildTodo(this.text))
    //this.complete = false
  }

  // Todo.prototype.completeListener = function(){
  //   console.log("setting complete listener")
  // //  this.complete = true
  //   //$('a.delete').on('click', deleter)
  // }

  Todo.prototype.deleteListener = function(){
    console.log("setting delete listener")
    this.item[0].addEventListener("click", function(){this.remove()})

  }

  Todo.prototype.listener = function (){
    console.log(this.item[0])
    //this.item[0].addEventListener("click", function(){console.log("clicked")})
  }


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

