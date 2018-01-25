var app = new Vue({
  el: '#app',
  data: {
    a: 11093, b: 1, c: 14000, d: 1
  },
  computed: {
    sum: function(){
      return this.a * this.b + this.c * this.d
    },
    tax : function(){
      return Math.ceil(this.sum * 0.08)
    }
  },
  watch: {
    b: function(v) { if (v < 0) { this.b = 0} },
    d: function(v) { if (v < 0) { this.d = 0} },
  },
})
