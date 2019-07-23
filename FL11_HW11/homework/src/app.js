const maxNumberTask = 11;
let addButton = document.getElementById('add');
let taskList = document.getElementById('task-list');
let inputTask = document.getElementById('new-action');
let dragSrcEl = null;

addButton.disabled = true;
inputTask.addEventListener('input', () => {
  inputTask.value ? addButton.disabled = false : addButton.disabled = true
});

addButton.onclick = addTask;

function createNewTask(task) {
  let listItem = document.createElement('li');
  listItem.setAttribute('draggable', true);
  addDnDHandlers(listItem);
  
  let checkBox = document.createElement('button')
  checkBox.className = 'material-icons checkbox';
  checkBox.innerHTML = '<i class="material-icons">check_box_outline_blank</i>'
  
  let label = document.createElement('label');
  label.innerText = task;
  
  let itemInput = document.createElement('input');
  itemInput.type = 'Text';
  
  let editBtn = document.createElement('button');
  editBtn.className = 'material-icons edit';
  editBtn.innerHTML = '<i class="material-icons">edit</i>';
  
  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'material-icons delete';
  deleteBtn.innerHTML = '<i class="material-icons">delete</i>';

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(itemInput);
  listItem.appendChild(editBtn);
  listItem.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', deleteTask);
  editBtn.addEventListener('click', editTask);
  checkBox.addEventListener('click', finishTask);

  return listItem;
}

function addTask() {
  if (taskList.children.length < maxNumberTask) {
    let newTask = createNewTask(inputTask.value);
    taskList.appendChild(newTask);
    inputTask.value = '';
    addButton.disabled = true;

  } else {
    let err = document.getElementById('error');
    err.style = 'display: block';
    addButton.disabled = true;
    inputTask.disabled = true;
    inputTask.value = '';
  }
}



function deleteTask() {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);

  let err = document.getElementById('error');
  err.style = 'display: none';
  inputTask.disabled = false;
}

function editTask() {
  let editBtn = this;
  let listItem = this.parentNode;
  let label = listItem.querySelector('label');
  let input = listItem.querySelector('input[type="text"');
  let containsClass = listItem.classList.contains('editMode');

  if (containsClass) {
    label.innerText = input.value;
    editBtn.className = 'material-icons edit';
    editBtn.innerHTML = '<i class="material-icons">edit</i>';

  } else {
    input.value = label.innerText;
    editBtn.className = 'material-icons save';
    editBtn.innerHTML = '<i class="material-icons">save</i>';

  }

  listItem.classList.toggle('editMode');
}

function finishTask() {
  let listItem = this.parentNode;
  let checkBox = listItem.querySelector('button.checkbox');
  checkBox.className = 'material-icons checkbox';
  checkBox.innerHTML = '<i class="material-icons">check_box</i>'

}

function handleDragStart(e) {
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);

}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';

  return false;
}

function handleDrop(e) {

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcEl !== this) {
    this.parentNode.removeChild(dragSrcEl);
    let dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin',dropHTML);
    let dropElem = this.previousSibling;
    addDnDHandlers(dropElem);
    
  }
  return false;
}

function addDnDHandlers(elem) {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('drop', handleDrop, false);
}
