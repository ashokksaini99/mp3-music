const express = require("express");
const path = require('path');
const app = express();

// EXPRESS SPECIFIC STUFF
app.use(express.static('public')); // For serving static files

//ENDPOINTS
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

// STARTING SERVER
app.listen(3000, (req, res) => {
    console.log("starting server...");
});