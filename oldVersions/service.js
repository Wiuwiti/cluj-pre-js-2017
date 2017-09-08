(function() {
    let list;
    try {
      list = JSON.parse(sessionStorage.getItem('todos'));
    } catch(e) {
      // whoopsee... something went terribly wrong!
    }
    
    if (!list) {
        list = [];
    }
    
      todos.service = {
        list: function() {
          return list;
      },
      save: function() {
        sessionStorage.setItem('todos', JSON.stringify(list));
      },
      add: function(name) {
          let todo = {
            // this is an unsafe way of generating IDs, but it will do for demo purposes
              id: Math.floor(Math.random() * 10000),
          name: name,
          completed: false
        };
          list.push(todo);
        this.save();
      },
      get: function(id) {
          for (let i = 0; i < list.length; i++) {
            let todo = list[i];
            if (id === todo.id) {
              return todo;
          }
        }
      },
      update: function(id, completed) {
          let item = this.get(id);
        if (!item) {
            return;
        }
        item.completed = completed;
        this.save();
      }
    };
  }());