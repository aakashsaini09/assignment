import {WebSocket, WebSocketServer} from 'ws'


const wss = new WebSocketServer({port: 8080});
let senderSocket: null | WebSocket = null;
let reciverSocket: null | WebSocket = null;

wss.on('connection', function connection(ws){
    ws.on('error', console.error);
    ws.on('message', function message(data: any){
        const message = JSON.parse(data);
        if(message.type === 'identify-as-sender'){
            senderSocket = ws;
        }else if(message.type === 'identify-as-reciver'){
            reciverSocket = ws;
        }else if(message.type === 'create-offer'){
            reciverSocket?.send(JSON.stringify({type: 'offer', offer: message.offer}))
        }else if(message.type === 'create-answer'){
            senderSocket?.send(JSON.stringify({type: 'offer', offer: message.offer}))
        }
        // TAsk to complete
        // 1.) Create offer
        // 2.) Create Ans
        // 3.) add ice candidate
        console.log(message)
    })

    ws.send('something!!');
});