const maxNumberTask = 11;
let addButton = document.getElementById('add');
addButton.disabled = true;
let taskList = document.getElementById('task-list');
let inputTask = document.getElementById('new-action');
inputTask.addEventListener('input', () => {
  inputTask.value ? addButton.disabled = false : addButton.disabled = true
});

function createNewTask(task) {
  let listItem = document.createElement('li');
  listItem.setAttribute('draggable', true);
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

addButton.onclick = addTask;

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
/*function dragStart() {
  this.style.color = 'red';
}
let listItem = document.querySelectorAll('li');
[].forEach.call(listItem, function(el) {
  el.addEventListener('dragstart', dragStart, false);
});
*/
let dragSrcEl = null;

function handleDragStart(e) {
  // Target (this) element is the source node.
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);

  this.classList.add('dragElem');
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }
  this.classList.add('over');

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
}

function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
}

function handleDrop(e) {
  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    //alert(this.outerHTML);
    //dragSrcEl.innerHTML = this.innerHTML;
    //this.innerHTML = e.dataTransfer.getData('text/html');
    this.parentNode.removeChild(dragSrcEl);
    var dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin',dropHTML);
    var dropElem = this.previousSibling;
    addDnDHandlers(dropElem);
    
  }
  this.classList.remove('over');
  return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node.
  this.classList.remove('over');

  /*[].forEach.call(cols, function (col) {
    col.classList.remove('over');
  });*/
}

function addDnDHandlers(elem) {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragenter', handleDragEnter, false)
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('dragleave', handleDragLeave, false);
  elem.addEventListener('drop', handleDrop, false);
  elem.addEventListener('dragend', handleDragEnd, false);

}

let cols = document.querySelectorAll('li');
[].forEach.call(cols, addDnDHandlers);
console.log(cols);