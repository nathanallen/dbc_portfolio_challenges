$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
      $('h1').html(this.innerHTML)
  });

  $('.skill_teller').on('click', function() {
      $('h1').html(window.location.pathname.substr(8) + '!')
  })

  $('.meal_teller').on('click', function(){
      var a = $('#m').text().slice(1,-1).match(/\"(\w+\s?)*\"/g);
      var n =  Math.floor((Math.random()*a.length)+1)
      var meal = a[n].slice(1,-1)
      $('h1').html(meal)
  })
});