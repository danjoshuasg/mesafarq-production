const express = require('express')
const app = express()

app.use("/", (req,res) => {
    res.send("Server is runing.");
});

app.listen(5000, console.log("Server started in PORT 5000"));
