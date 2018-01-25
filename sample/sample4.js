var app4 = new Vue({
  el: '#app4',
  data: {
    todos: [
      { text: 'Enjoy JavaScript' },
      { text: 'Enjoy Vue' },
      { text: 'Enjoy something awesome' }
    ]
  }
})
app4.todos.push({ text: 'New item' })
