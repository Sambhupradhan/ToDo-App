let todoList =[
  { item : 'Dear sambhu',
    dueDate:'21/12/2024',
  },
  { item : 'go to college',
    dueDate:'22/12/2024',
  },
  { item : 'and study hard',
    dueDate:'23/12/2024',
  },
];
displayItems();

function addToDo(){
  let inputElement=document.querySelector('#todo-input');
  let dateElement=document.querySelector('#todo-date');
  let todoItem=inputElement.value;
  let todoDate=dateElement.value;
  todoList.push({item : todoItem, dueDate : todoDate});
  inputElement.value=''; 
  dateElement.value='';
  displayItems();
} 

function displayItems(){
  let containerElements = document.querySelector('.todo-container');

  let newHtml=' ';           
  for(let i=0; i< todoList.length;i++){
    // let item =todoList[i].item;
    // let dueDate=todoList[i].dueDate;
    let {item, dueDate}= todoList[i];
    
    newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick = " todoList.splice(${i},1); displayItems();">Delete</button>
    `;
  } 
  containerElements.innerHTML=newHtml;
}