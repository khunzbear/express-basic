const express = require('express');
const app = express();
const morgan = require('morgan');


const port = 3000;

app.use(morgan('combined'));

app.get("/", (req,res) => {

res.send(" Hello Express basic")

})

app.listen(port, () => {

    console.log("Listening to port" +port);
})