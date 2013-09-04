keyCodes = {
    q:81,
    p:80
}

function Player(input){
    this.name=input;
    this.position=1;
    this.increment = function(){this.position++};
}

function Board(length){
  // this.start=0;
  this.finish=length;
}

var player1 = new Player('A');
var player2 = new Player('Z');
var board = new Board(15);

var startYourEngines = function(event) {
  console.log('hi')
    if (event.keyCode === keyCodes.q) {
      player1.increment();
      move('#player1_strip');
      check_finish_line(player1, board);
    }
    if (event.keyCode === keyCodes.p) {
      player2.increment();
      move('#player2_strip');
      check_finish_line(player2, board);
    }
  }

$(document).on('keyup', startYourEngines);

function check_finish_line(player, board){
  if (player.position === (board.finish || board.finish*2)){
    end_game(player);
  };
};

function move(track) {
  $(track).find("td.active").toggleClass("active").next().toggleClass("active");
};

function end_game(player) {
    alert("The Winner is " + player.name + "!!!");
};

// Method to auto generate board
// function setup_board(track) {
//   $(track).find("tr:first-child td:first-child").toggleClass("active");
//   $(track).find("tr:nth-child(2) td:nth-child(board.finish*2+1)").toggleClass("active");
// };