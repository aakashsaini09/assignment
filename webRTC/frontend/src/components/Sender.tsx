import { useEffect, useState } from "react"

const Sender = () => {
    const [socket, setsocket] = useState<WebSocket | null>(null)
    useEffect(() => {
      const socket = new WebSocket('ws://localhost:8080');
      socket.onopen = () =>{
        socket.send(JSON.stringify({type: 'sender'}))
      }
      setsocket(socket)
    }, [])
    async function startSendingVideo(){
        if(!socket) return;
        const pc = new RTCPeerConnection();
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        pc.onicecandidate = async (event) => {
            console.log(event)
            if(event?.candidate){
                socket?.send(JSON.stringify({type: 'iceCandidate', candidate: event.candidate}))
            }
        }
        socket?.send(JSON.stringify({type: 'createOffer', sdp: pc.localDescription}))
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if(data.type === 'createAnswer'){
                pc.setRemoteDescription(data.sdp);
            }else if(data.type === 'iceCandidate'){
                pc.addIceCandidate(data.candidate);
            }
        }
    }
  return (
    <div>
      <button onClick={startSendingVideo}>Click to Connect...</button>
    </div>
  )
}

export default Sender
