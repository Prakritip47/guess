function back()
{
    window.location = "activity_1.html"
}
function getScore()
{
    Score = localStorage.setItem("score");
    document.getElementById("update").innerHTML = "<h1>score:" + Score +"</h1>";
}