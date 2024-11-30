import './App.css'
import {io} from 'socket.io-client'
import { BACKENDURL } from './Links'
import { useEffect, useMemo, useState } from 'react'
import {Button, Container, Stack, TextField, Typography} from '@mui/material'
function App() {
  const socket = useMemo(() => io('http://localhost:3000'), [])
  const [message, setmessage] = useState("")
  const [room, setroom] = useState("")
  const [socketId, setsocketId] = useState('')
  const [messages, setmessages] = useState([])
  useEffect(() => {
    socket.on('connect', () => {
      console.log("connected userId: ", socket.id)
      setsocketId(socket.id)
    })
    socket.on('connection', () => {
    })
    socket.on('receive-message', (data) => {
      console.log("data: ", data)
      setmessages((m) => [...m, data.message])
    })
    return () => {
      socket.disconnect();
    }
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('message', {message, room})
    setmessage('')
  }
  return (
    <>
      <Container>
        <Typography>
          Welcome to Socket.io
        </Typography><br />
        <Typography>
          Room Id: {socketId}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField value={message} onChange={(e) => {setmessage(e.target.value)}}/>
          <TextField value={room} onChange={(e) => {setroom(e.target.value)}}/>
          <Button type='submit' className='bg-blue-500'>Send Message</Button>
        </form>
        <Stack>
          {messages.map((m, i) => (
            <Typography key={i} >{m}</Typography>
          ))}
        </Stack>
      </Container>

    </>
  )
}

export default App
