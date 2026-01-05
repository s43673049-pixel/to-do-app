const inputbox = document.querySelector('.todo-input input');
const addbtn = document.querySelector('.todo-input button');
const todolist = document.querySelector('.todo-list');

addbtn.addEventListener('click', () => {
  const taskText = inputbox.value.trim(); 
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    // Create new list item
    const li = document.createElement('li');
// create span to hold task text
    const span = document.createElement('span');
    span.innerText = taskText;
    // create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.className = 'delete';

    // append span and delete button to list item
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todolist.appendChild(li);

    // clear input box
    inputbox.value = '';    
});

//delete & complete task
todolist.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    } 
   if (e.target.tagName === 'SPAN') {
    e.target.parentElement.classList.toggle('completed');
   }
});
