const express = require('express');
const bodyParser = require("body-parser");
require('dotenv').config()
const app = express();
//


//


//

//port stuff
//Made the fallback port different to test that I installed dotenv properly
const PORT = process.env.PORT || 5050;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/', (req, res) => {
    res.status(200);
    res.send("welcome to the homepage");
}) 


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});