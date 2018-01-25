var app2 = new Vue({
  el: '#app2',
  data: {
    message: 'You load this page on' + new Date().toLocaleString()
  }
})
app2.message = 'some new message'
