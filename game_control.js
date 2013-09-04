keyCodes = {
    q:81,
    p:80
}

function Player(name, track){
    this.name=name;
    this.track=track;
    this.position=1;
    this.increment = function(){this.position++};
}

function Board(length){
  // this.start=0;
  this.finish=length;
}

var board = new Board(15);

function signup_player() {
  var p1 = prompt('Player 1:', 'name');
  var p2 = prompt('Player 2:', 'name');

  var player1 = new Player(p1, 'player1');  //out of scope!
  var player2 = new Player(p2, 'player2');  //out of scope!
}

var startYourEngines = function(event) {
    if (event.keyCode === keyCodes.q) {
      move_render_check(player1);
    }
    if (event.keyCode === keyCodes.p) {
      move_render_check(player2);
    }
  }

$(document).ready(function() {
  signup_player();
})

$(document).on('keyup', startYourEngines);

function move_render_check(player) {
      player.increment();
      render_track('#' + player.track + '_strip');
      check_finish_line(player, board);
}

function check_finish_line(player, board){
  if (player.position === (board.finish || board.finish*2)){
    end_game(player);
  };
};

function render_track(track) {
  $(track).find("td.active").toggleClass("active").next().toggleClass("active");
};

function end_game(player) {
    alert("The Winner is " + player.name + "!!!");
};

// Method to auto generate board
// function setup_board(track) {
//   $(track).find("tr:first-child td:first-child").addClass("active");
//   $(track).find("tr:nth-child(2) td:nth-child(board.finish*2+1)").addClass("active");
// };