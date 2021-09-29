function add_user()
{
    username=document.getElementById("name1").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
}