
new Vue({
  el: '#comments-list',
  data() {
    return {
      comments: [],
    };
  },
  mounted() {
    fetch('https://5cbef81d06a6810014c66193.mockapi.io/api/comments/')
    .then(response => response.json())
    .then(data => this.comments = data);
  },

})
