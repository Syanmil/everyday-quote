var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World',
    quote: ''
  },
  methods: {
    getdata: ()=>{
      axios.get('http://localhost:3000/api/quote/random')
        .then(response =>{
          app.quote = response
        })
    }
  }
})
