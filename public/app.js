const url = 'http://localhost:3000/api/todos';

function axiosErrors(err) {
  if(err.response) {
    console.log('Error with the data served');
  } else if(err.request) {
    console.log('Error with the requested url');
  } else {
    console.log('Eroooooooooor');
  }
}

function addTodo(todo) {
  let todoList = document.querySelector('.todo__list');
  let todoItem = document.createElement('li');
  todoItem.textContent = todo.todoName;
  todoItem.setAttribute('data-id', todo._id);
  todoItem.setAttribute('data-done', todo.completed);
  todoItem.appendChild(addIcon('cross'));
  if(todo.completed) {
    todoItem.classList.add('todo__item','done');
    todoItem.appendChild(addIcon('check'));
  } else {
    todoItem.classList.add('todo__item');
  }
  todoList.appendChild(todoItem);
}

function addTodos(todos) {
  todos.data.forEach(todo => {
    addTodo(todo);
  });
}

function createTodo(todoName) {
  axios.post(url, {todoName: todoName})
  .then(res => {
    addTodo(res.data);
  })
  .catch(axiosErrors);
}

function addIcon(icon) {
  let iconElem = document.createElement('i');
  iconElem.classList.add(`icon-${icon}`, 'todo__icon', `todo__icon_${icon}`);
  if(icon === 'cross') {
    iconElem.setAttribute('title', 'delete this todo');
  }
  return iconElem;
}

function deleteTodo(itemToDelete) {
  axios({
    method: 'DELETE',
    url: `${url}/${itemToDelete.getAttribute('data-id')}`
  })
  .then(res => {
    itemToDelete.remove();
    console.log(res.data);
  })
  .catch(axiosErrors);
}

function updateTodo(itemToUpdate) {
  let isCompleted = !eval(itemToUpdate.getAttribute('data-done'));
  console.log(isCompleted);
  axios.put(`${url}/${itemToUpdate.getAttribute('data-id')}`,
            {completed: isCompleted})
  .then(res => {
    console.log(res.data);
    itemToUpdate.classList.toggle('done');
    itemToUpdate.setAttribute('data-done', isCompleted);
    console.log(isCompleted);
    if(isCompleted) {
      itemToUpdate.appendChild(addIcon('check'));
    }else {
      itemToUpdate.removeChild(itemToUpdate.querySelector('.todo__icon_check'));
    }
  })
  .catch(axiosErrors);
}

axios.get(url)
.then(addTodos)
.catch(axiosErrors);

let usrInput = document.querySelector('#todoInput');
usrInput.addEventListener('keypress', event => {
  if(event.key === 'Enter') {
    createTodo(usrInput.value);
    usrInput.value = '';
  }
});

let todoList = document.querySelector('.todo__list');
todoList.addEventListener('click', event => {
  if(event.target.classList.contains('todo__icon_cross')) {
    let itemToDelete = event.target.parentNode;
    deleteTodo(itemToDelete);
    
  } else if(event.target.nodeName === 'LI') {
    let itemToUpdate = event.target;
    updateTodo(itemToUpdate);
  }
});