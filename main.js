function login(){
  var player1name=document.getElementById("Player1Input").value;
var player2name=document.getElementById("Player2Input").value;
console.log(player1name+", "+player2name);
localStorage.setItem("Player 1:",player1name);
localStorage.setItem("Player 2:",player2name);
window.location="math.html";
}