function addUser(){
    player1name=document.getElementById("p1name").value;
    player2name=document.getElementById("p2name").value;

    localStorage.setItem("player_1",player1name);
    localStorage.setItem("player_2",player2name);

    window.location.replace("quiz_game.html");
    
}