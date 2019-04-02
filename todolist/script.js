new Vue({
  el: '#toDoList',
  data: {
    inputText: '',
    items: [
      { text: "go to the gym", checked: false }
    ],

  },
  methods:  {
addToDo: function() {
    if(this.inputText !== '') {
      this.items.push({text:this.inputText, checked: false });
      this.inputText = '';

    }
  },
  deleteItem: function(index) {
  this.items.splice(index, 1);
},
check: function(item) {
  item.checked = !item.checked;
},
},
})
