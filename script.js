


let itemList = JSON.parse(localStorage.getItem('tasks')) || [];

renderHTML();

function renderHTML(){

  if ( itemList.length  === 0){
    document.querySelector('.to-do-list').innerHTML = "No Tasks is available.";
    return;
  
  }

  let todoListHTML = '';

  for (i = 0; i < itemList.length; i++){
    const todoObject = itemList[i];
    const {name,dueDate} = todoObject;
    const html  = `
      <div> ${i + 1}. ${name}  </div>
      <div> ${dueDate} </div>
      <button onclick='
          clearItem(${i})' class="delItem"> 
          X
      </button>
     ` ;
    todoListHTML += html;
  }
 
  document.querySelector('.to-do-list').innerHTML = todoListHTML;
  
}



function clearItem(i){
  itemList.splice(i,1);
  localStorage.setItem('tasks',JSON.stringify(itemList));
  renderHTML();
}

function cleartodo(){
  document.querySelector('.to-do-list').innerHTML = '';
  itemList = [];
  localStorage.removeItem('tasks');
  renderHTML();
}

function addItem(){
const inputElement = document.querySelector('.taskInput');
const dateElement = document.querySelector('.dateInput');

const dueDate = dateElement.value;
const name = inputElement.value;
if (name){
  itemList.push({
    name ,
    dueDate
   });
   localStorage.setItem('tasks', JSON.stringify(itemList));
}

else{
  alert('empty task not allowed');
}

inputElement.value = '';
dateElement.value = '';
renderHTML();
}






