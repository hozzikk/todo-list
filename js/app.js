const mainContent = document.querySelector('.main__content');
const btn = document.querySelector('.btn');
const input = document.getElementsByTagName('input')[0];
const items = [];
let count = 0;

function deleteItem(parent, id) {
    let child = document.getElementById(id);
    parent.removeChild(child);
}

btn.addEventListener('click', () => {
    let div = document.createElement('div');
    let divItemText = document.createElement('div');
    let divItemBtn = document.createElement('div');
    let buttonCompleted = document.createElement('button');
    let buttonDelete = document.createElement('button');
    div.className = 'main__content-item';
    div.id = count;
    count++;
    divItemText.className = 'item__text';
    divItemBtn.className = 'item__btn';

    divItemText.innerHTML = input.value;

    buttonCompleted.innerHTML = 'выполнить';
    divItemBtn.append(buttonCompleted);
    buttonDelete.innerHTML = 'удалить'
    divItemBtn.append(buttonDelete);

    div.append(divItemText)
    div.append(divItemBtn)
    items.push(div);
    console.log(items);
    buttonDelete.addEventListener('click', deleteItem(div, count));

    mainContent.append(div);
    input.value = ''
})





