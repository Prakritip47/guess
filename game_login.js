function addUser()
{
Player1_Name = document.getElementById("player1_name_input").value;
Player2_Name = document.getElementById("player2_name_input").value;
  
  localStorage.setItem("playe1_name",Player1_Name);
  localStorage.setItem("playe2_name",Player2_Name);
  window.location.replace("game_page.html");
}

