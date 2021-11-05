const express = require('express');
const app = express();
const port =  3100;

app.get('/', (req, res) => {
    res.send('<h1>RH Auto Scale Test</h1>')
})

app.listen(port, () => {
   console.log('demo app is up');
});