var todos = {};
(function() {
  const container = document.getElementById('todos--app');
  let module = null;
  
  let addTodo = document.getElementById('todos--nav-item-add');
  addTodo.addEventListener('click', function(event) {
  	event.preventDefault();
    todos.navigate('add');
  });
  
  let listTodos = document.getElementById('todos--nav-item-list');
  listTodos.addEventListener('click', function(event) {
  	event.preventDefault();
    todos.navigate('list');
  });
  
  todos.navigate = function(page) {
  	if (typeof page !== 'string') {
    	page = 'add';
    }
    if (module) {
    	module.destroy();
    }
    module = todos[page];
    module.init(container);
    
    sessionStorage.setItem('currentPage', page);
  };
  
  todos.startup = function() {
  	let currentPage = sessionStorage.getItem('currentPage');
    todos.navigate(currentPage);
  }
}());