$(document).ready(function() {
  $('#roller button.add').on('click', makeNewDie)
  $('#roller button.roll').on('click', getDiceRolls)
});

var makeNewDie = function makeNewDie(){
  $('.dice').append('<div class="die">0</div>');
}

var getDiceRolls = function getDiceRolls(){
  $('.die').each(function(k, die){
    setDieValue(k, die);
  })
}

function setDieValue(k, die){
    var value = Math.floor((Math.random()*6)+1);
    $(die).text(value);
}


////Can't get this to work:
// $(document).ready(function() {
//   $('#roller button.add').on('click', d6.add())
//   $('#roller button.roll').on('click', d6.roll())
// });

// function Dice () {
//   this.add = function(){ 
//     $('.dice').append('<div class="die">0</div>');
//   }
//   this.roll = function(){
//     $('.die').each(function(k, die){
//       var value = Math.floor((Math.random()*6)+1);
//       $(die).text(value);
//     }) 
//   }

// }

//  var d6 = new Dice()