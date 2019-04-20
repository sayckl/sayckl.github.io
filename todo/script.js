const menu = document.querySelector('.menu-btn');
const aside = document.querySelector('aside');
const add = document.querySelector('.addbtn');
const list = document.getElementById('list');
let array = [{ id: 1, text: 'Finish to do aplication' }];
let index = array.length + 1;

function displayList() {
  array.forEach((item) => {
  const li = document.createElement('li');
  const closebtn = document.createElement('button');
  li.innerHTML = item.id + ". " + item.text;
  closebtn.className = 'close';
  closebtn.innerHTML = 'x';
  li.appendChild(closebtn);

  closebtn.onclick = () => {
    array = array.filter((entry) => entry.id !== item.id);
    list.innerHTML = '';
    displayList();
  }
  const ul = document.querySelector('ul');
  ul.appendChild(li);
});
};

menu.addEventListener('click', () => {
  menu.classList.toggle('menu-btn_active');
  aside.classList.toggle('show_aside');
});

add.addEventListener('click', () => {
const input = document.getElementById('input');
const { value } = input;
list.innerHTML = '';
if ( value === '') {
  alert("Write something!");
}else{
  array.push({ id: index, text: value });
  index++;
  input.value = '';
};
displayList();
console.log(array);
});

list.addEventListener('click', ({ target }) => {
  if (target.tagName === 'LI') {
    target.classList.toggle('checked');
  };
});

const az = document.querySelector('.az');
az.addEventListener('click', () => {
    array.sort((a, b) => {
      if (a.text > b.text) {
        return 1;
      }
      if (a.text < b.text) {
        return -1;
      }
      return 0;
    });
    list.innerHTML = '';
    displayList();
  });

const za = document.querySelector('.za');
za.addEventListener('click', () => {
    array.sort((a, b) => {
        if (a.text < b.text) {
          return 1;
        }
        if (a.text > b.text) {
          return -1;
        }
        return 0;
      });
      list.innerHTML = '';
      displayList();
  });

const asc = document.querySelector('.asc');
asc.addEventListener('click', () => {
  array.sort((a, b) => a.id - b.id);
  list.innerHTML = '';
  displayList();
});

const desc = document.querySelector('.desc');
desc.addEventListener('click', () => {
  array.sort((a, b) => b.id - a.id);
  list.innerHTML = '';
  displayList();
});

displayList();
