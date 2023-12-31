const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));
const {Server} = require('socket.io');

const io = new Server(server, {
    cors: {
        origin: true,
        credentials: true
    }
});

io.on('connection', (socket) =>{
    console.log('user connected');
    socket.on('on-chat', data =>{
        io.emit('user-chat', data)
        console.log(data);
    });
});

