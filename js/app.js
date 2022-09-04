// const mainContent = document.querySelector('.main__content');
// const btn = document.querySelector('.btn');
// const input = document.getElementsByTagName('input')[0];
// const items = [];
// let count = 0;

// function deleteItem(parent, id) {
//     let child = document.getElementById(id);
//     parent.removeChild(child);
// }

// btn.addEventListener('click', () => {
//     let div = document.createElement('div');
//     let divItemText = document.createElement('div');
//     let divItemBtn = document.createElement('div');
//     let buttonCompleted = document.createElement('button');
//     let buttonDelete = document.createElement('button');
//     div.className = 'main__content-item';
//     div.id = count;
//     count++;
//     divItemText.className = 'item__text';
//     divItemBtn.className = 'item__btn';

//     divItemText.innerHTML = input.value;

//     buttonCompleted.innerHTML = 'выполнить';
//     divItemBtn.append(buttonCompleted);
//     buttonDelete.innerHTML = 'удалить'
//     divItemBtn.append(buttonDelete);

//     div.append(divItemText)
//     div.append(divItemBtn)
//     items.push(div);
//     console.log(items);
//     buttonDelete.addEventListener('click', deleteItem(div, count));

//     mainContent.append(div);
//     input.value = ''
// })


const todo = {
    action(e) {
        const target = e.target;
        if (target.classList.contains('todo__action')) {
          const action = target.dataset.todoAction;
          const elemItem = target.closest('.todo__item');
          if (action === 'deleted' && elemItem.dataset.todoState === 'deleted') {
            elemItem.remove();
          } else {
            elemItem.dataset.todoState = action;
          }
          this.save();
        } else if (target.classList.contains('todo__add')) {
          this.add();
          this.save();
        }
      },
      add() {
        const elemText = document.querySelector('.todo__text');
        if (elemText.disabled || !elemText.value.length) {
          return;
        }
        document.querySelector('.todo__items').insertAdjacentHTML('beforeend', this.create(elemText.value));
        elemText.value = '';
      },
    create(text) {
        return `<li class="todo__item" data-todo-state="active">
          <span class="todo__task">${text}</span>
          <span class="todo__action todo__action_restore" data-todo-action="active"></span>
          <span class="todo__action todo__action_complete" data-todo-action="completed"></span>
          <span class="todo__action todo__action_delete" data-todo-action="deleted"></span></li>`;
      },
    init() {
        const formStorage = localStorage.getItem('todo');
        if (formStorage) {
            document.querySelector('.todo__items').innerHTML = formStorage;
        }
        document.querySelector('.todo__options').addEventListener('change', this.update);
        document.addEventListener('click', this.action.bind(this));
    },
    update() {
        const option = document.querySelector('.todo__options').value;
        document.querySelector('.todo__items').dataset.todoOption = option;
        document.querySelector('.todo__text').disabled = option !== 'active';
    },
    save() {
        localStorage.setItem('todo', document.querySelector('.todo__items').innerHTML)
    }
};


todo.init();


