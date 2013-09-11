$(document).ready(function(){
  $('#get_color').on('click', function(e){
    e.preventDefault();
    $.ajax({
      url: "/color",
      type: "post",
    }).done(function(data){
      $('li:nth-child(' + data.cell +')').css("background", data.color)
    }).fail(function(){
      console.log("fail")
    })
  })
});