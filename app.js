function addBtn() {
    let input = document.getElementById("todoinput").value;
    let list = document.getElementById("list").innerHTML += `<ul><li>${input} <button onclick="edit()" style="margin-left:3px;">Edit</button> <button onclick="edit()" style="margin-left:3px;">Delete</button></li>`;
}
 function edit() {
    list.innerHTML = `<br><input type="text" placeholder="Add your agenda for today" id="todoinput"><button onclick="add()">Change</button>`   
 }

 function add(){
    let add = document.getElementById("todoinput").value;
    list.innerHTML = `<br> <li>${add}</li>`
 }