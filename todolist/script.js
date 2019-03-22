new Vue({
  el: '#toDoList',
  data: {
    inputText: '',
    items: [
      { text: "go to the gym" }
    ],

  },
  methods:  {
addToDo: function() {
    if(this.inputText !== '') {
      this.items.push({text:this.inputText});
      this.inputText = '';

    }
  },
  deleteItem: function(index) {
  this.items.splice(index, 1);
},
/* check: function(index) {
var  item = this.items[index];
  item.checked = !item.checked;
}, */
},
})
