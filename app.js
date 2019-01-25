const express = require('express')

const app = express()

const PORT = 3000
app.get("/", (request, response) => {
    response.send("<h1>Hello World Fabri y Juli!!!!</h1>")
})

app.listen(PORT, () =>{
    console.log('Server listening at local port: ' + PORT);
})