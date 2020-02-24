// require express 
const express = require('express');
// initialize app
const app = express();

// initialize port to be use 
const PORT = process.env.PORT || 4000;
// connecting to the browsers 
app.get('/', (req, res) => {
    res.send('my first Nodejs Connection');
});
// adding an event listener to the app
app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`)
});