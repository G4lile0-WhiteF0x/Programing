const http = require('http');
const express = require('express');
const fs = require('fs')
const app = express();


const port = 3000;



app.get('/', (req, res) => 


fs.readFile('index.html', function(error, data){
 if(error){
   res.send('Error 404')
 }else{
res.write(data)

 }

})




)

app.listen(port, () => console.log('server is on'))
