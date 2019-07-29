const rootNode = document.getElementById('root');

const todoItems = [
    { isDone: false, id: 12345, description: 'Todo 1' }
];
// Set defaul hash location
window.location.hash = '';
window.location.hash = '#main';

// add hashchange event for add new task button
let addBtn = document.getElementById('add-task');

addBtn.addEventListener('click', () => { window.location.hash = '#add-new-item' });

// add hashchange event for save button
let saveBtn = document.getElementById('save');

saveBtn.addEventListener('click', () => { 
    window.location.hash = '#main';
});

// add hashchange event for cancel button
let cancelBtn = document.getElementById('cancel');

cancelBtn.addEventListener('click', () => { window.location.hash = '#main' });

//add hashchange event for window
window.addEventListener('hashchange', () => { showPage(window.location.hash); });

// visual page
function showPage(id) {
    let page = document.querySelectorAll('.page');
    let pageId = document.querySelector(id);

    page.forEach((e) => {
        e.style.display = 'none';
    });

    pageId.style.display = 'block';
};

// add new task

function addTask () {
    let newTask = document.getElementById("new-task").value;
    if (newTask) {
        let ul = document.getElementById('list');
        let li = document.createElement('li');
        let checkBox = document.createElement('img');
        checkBox.className = "unfinished";

        checkBox.setAttribute('src', 'assets/img/todo-s.png');
        li.appendChild(checkBox);
        li.appendChild(document.createTextNode(newTask));
        li.className = "task";
        ul.appendChild(li)
    }
};

saveBtn.addEventListener('click', addTask);

//modify task
let taskList = document.getElementById('list');

taskList.addEventListener('click', modifyTask);

function modifyTask(e){
        if (e.target.classList.contains('task')) {
            window.location.hash = '#modify';
            let modifyInput = document.getElementById('modify-task');
            modifyInput.value = e.target.innerText;
        }
};

taskList.addEventListener('click', checkTask);

function checkTask(e){
    if (e.target.classList.contains('unfinished')) {
       e.target.setAttribute('src', 'assets/img/done-s.png');

    }
};



let cancelBtnModify = document.getElementById('cancel-modify');

cancelBtnModify.addEventListener('click', () => { window.location.hash = '#main' });



//rootNode.appendChild(/* Append your list item node*/);
