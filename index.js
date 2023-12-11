

// add item
var newItem = document.getElementById("input");
var ul = document.getElementById("ol");

function add() {
  if (newItem.value === "") {
    alert("Enter your task  !");
  } else {
    
    var li = document.createElement("li"); 
    var newTask = document.createTextNode(newItem.value);
    li.appendChild(newTask);

    var editBtn = document.createElement("button"); 
    var editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute("onclick", "edit(this)");
    editBtn.classList.add("edit-button");
    li.appendChild(editBtn);
    

    var deleteBtn = document.createElement("button"); 
    var deleteBtnText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.setAttribute("onclick", "deletes(this)");
    deleteBtn.classList.add("remove-button");
    li.appendChild(deleteBtn);

    ul.appendChild(li);
  }

  newItem.value = "";
}

//  delete

function remove() {
  ul.innerHTML = "";
}

// adit Todo

function edit(y) {
  
  var oldVal = y.parentNode.firstChild.nodeValue;
  var newTodo = prompt("Edit todo", oldVal);
  y.parentNode.firstChild.nodeValue = newTodo;
}

//  delete

function deletes(x) {
  x.parentNode.remove();
}

