import {WebSocket, WebSocketServer} from 'ws'


const wss = new WebSocketServer({port: 8080});
let senderSocket: null | WebSocket = null;
let reciverSocket: null | WebSocket = null;

wss.on('connection', function connection(ws){
    ws.on('error', console.error);
    ws.on('message', function message(data: any){
        const message = JSON.parse(data);
    })
    ws.send('something!!');
});