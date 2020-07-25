var list = document.getElementById("list");

function addToDo(){
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement("li")
    var liText = document.createTextNode(todo_item.value)
    if(todo_item.value === ""){
        alert("Enter Todo First")
    }
    li.appendChild(liText)

    var delBtn = document.createElement("img")
    delBtn.setAttribute("src","images/delete.png")
    delBtn.setAttribute("class","image")
    delBtn.setAttribute("onclick","deleteItem(this)")

    var editBtn = document.createElement("img")
    editBtn.setAttribute("src","images/edit.png")
    editBtn.setAttribute("class","reedit")
    editBtn.setAttribute("onclick","editItem(this)")
    

    li.appendChild(editBtn)
    li.appendChild(delBtn)
    list.appendChild(li)
    todo_item.value = ""
}


function deleteItem(e){
    e.parentNode.remove()
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value", val)

    e.parentNode.firstChild.nodeValue = editValue
}
function deleteAll(){
    list.innerHTML = ""
}
