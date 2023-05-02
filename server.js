const express = require('express');
const cors = require('cors');
const router = require("./src/routes/upload.routes")
const server = express();

server.use(
    cors({
        origin:"http://localhost:3000/"
    })
)

server.use(express.json())

server.use(router)

const port = 8001

server.listen(port, ()=>{
    console.log("server listening on port ", port)
})