import express from 'express'
import { Server } from 'socket.io'
import { createServer } from 'http'
import cors from 'cors'
const port = 3000
const app = express()
app.use(cors())
const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true
    }
});

io.on("connection", (socket) => {
    console.log("User Connected");
    console.log("Id: ", socket.id);
})

app.get('/', (req, res) => {
    res.send("Hello World")
})





server.listen(port, () => {
    console.log(`Server is running on ${port}`)
})