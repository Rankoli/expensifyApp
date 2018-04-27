const path = require('path');
const express = require('express');   //require is node way to import somthing
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
//tell app where are files live and tell it what port it should listen on

app.use(express.static(publicPath));

app.get('*', (req,res) =>{
res.sendFile(path.join(publicPath, 'index.html'));
}); // match all on mached routes

app.listen(port, () => {
console.log('server is up');
});