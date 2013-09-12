$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());
  var list = []

  function bindEvents() {
    $('.add').on('click', makeTodoItem)
  }

  function makeTodoItem(){
    var t = new Todo();
    list.push(t);
    t.addDeleteListener();
  }

  function Todo(){
    var title = $('input.todo').val();
    this.item = buildTodo(title);
    $('.todo_list').prepend(this.item);
    //this.item = $('.todo_list').prepend(buildTodo(title));  //Bad!
  }

  // Todo.prototype.addCompleteListener = function(){
  //   console.log("setting complete listener")
  //   //$('a.delete').on('click', deleter)
  // }

  Todo.prototype.addDeleteListener = function() {
    console.log("setting delete listener");
    this.item.on('click', '.delete', function() {
      var $todo = $(this).closest('.todo');
      console.log($todo);
      //console.log($(this).closest('ul'));
      
    });
    
  }

  // Todo.prototype.listener = function (){
  //   console.log(this.item[0])
  //   //this.item[0].addEventListener("click", function(){console.log("clicked")})
  // }


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

