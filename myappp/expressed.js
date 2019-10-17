let arr = [
    "random quote that is needed 1",
    "random quote that is needed 2",
    "random quote that is needed 3",
    "random quote that is needed 4",
    "random quote that is needed 5",
    "random quote that is needed 6",
    "random quote that is needed 7",
    "random quote that is needed 8",
    "random quote that is needed 9",
    "random quote that is needed 10"
]

function randomize(){
   return arr[Math.floor(Math.random() * 10)]
   
}

const express = require('express')
const app = express()
const port = 3000

app.post('/', function(req, res){

 res.send(randomize)
 
});


app.listen(port, () => console.log(`expressed.js is LAUNCHING TO ZION, BEAUTIFUL BEAUTIFUL ZION ${port}!`))