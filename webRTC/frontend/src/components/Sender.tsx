import { useEffect, useState } from "react"

const Sender = () => {
    const [socket, setsocket] = useState<WebSocket | null>(null)
    useEffect(() => {
      const socket = new WebSocket('ws://localhost:8080');
      socket.onopen = () =>{
        socket.send(JSON.stringify({type: 'sender'}))
      }
    }, [])
    async function startSendingVideo(){
        const pc = new RTCPeerConnection();
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        socket?.send(JSON.stringify({type: 'createOffer', sdp: pc.localDescription}))
    }
  return (
    <div>
      <button onClick={startSendingVideo}>Click to Connect...</button>
    </div>
  )
}

export default Sender
