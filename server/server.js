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

})),


app.get('/fb', (req, res) => 


fs.readFile('fb.html', function(error, data){
 if(error){
   res.send('Error 404')
 }else{
res.write(data)

 }

})),


app.get('/tt', (req, res) => 


fs.readFile('tt.html', function(error, data){
 if(error){
   res.send('Error 404')
 }else{
res.write(data)

 }

})),



app.get('/insta', (req, res) => 


fs.readFile('insta.html', function(error, data){
 if(error){
   res.send('Error 404')
 }else{
res.write(data)

 }

}));

app.listen(port, () => console.log('server is on'))