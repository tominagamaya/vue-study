Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetable' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Rice' }
    ]
  }
})
