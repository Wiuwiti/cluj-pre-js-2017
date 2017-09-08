(function() {
	let elements;
  
	const renderItem = function(item) {
  	return `<label>
    		<input id="${item.id}" class="todos--list-item" type="checkbox" ${item.completed ? 'checked' : ''}/> ${item.name}
      </label>`;
  };
  
	const render = function(container) {
  	let list = todos.service.list();
    container.innerHTML = `<ul>
    ${list.reduce((markup, todo) => markup + '<li>' + renderItem(todo) + '</li>', '')}
    </ul>`;
  };

  const onTodoChange = function(event) {
    let id = +this.id;
    todos.service.update(id, this.checked);
  };
  
  const setupEvents = function(container) {
    for (let i = 0; i < elements.length; i++) {
    	let element = elements[i];
      element.addEventListener('change', onTodoChange);
    }
  };
  
  const removeEvents = function() {
    for (let i = 0; i < elements.length; i++) {
    	let element = elements[i];
      element.removeEventListener('change', onTodoChange);
    }
  };
  
  todos.list = {
    init: function(container) {
    	render(container);
      
  		elements = container.querySelectorAll('.todos--list-item');
      
      setupEvents();
    },
    destroy: function() {
    	removeEvents();
      
      elements = undefined;
    }
  };
}());