
new Vue({
  el: '#writecom',
  data: {
    titlevalue: '',
    bodyvalue: '',

  },
  methods: {
    addcomment: function() {
      if(this.titlevalue !== '' || this.bodyvalue !== '') {
        this.comments.push({"id": comments[comments.length - 1].id + 1, create_at": new Date().getTime(), "title":this.titlevalue, "body": this.bodyvalue });
        this.titlevalue = '';
        this.bodyvalue = '';
      },
    },
  },
})
