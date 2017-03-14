var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World',
    quote: '',
    author: 'Unknown',
  },
  methods: {
    getdata: ()=>{
      axios.get('/api/quote/random')
        .then(response =>{
          app.quote = response.data.quote
          app.author = response.data.author || 'Unknown'
        })
    }
  }
})
app.getdata()
