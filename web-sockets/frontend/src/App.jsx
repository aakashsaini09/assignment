import './App.css'
import {io} from 'socket.io-client'
import { BACKENDURL } from './Links'
import { useEffect, useMemo, useState } from 'react'
import {Button, Container, TextField, Typography} from '@mui/material'
function App() {
  const socket = useMemo(() => io('http://localhost:3000'), [])
  const [message, setmessage] = useState("")
  useEffect(() => {
    socket.on('connection', () => {
      console.log("connected: ", socket.id)
    })
    return () => {
      socket.disconnect();
    }
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('message', message)
    setmessage('')
  }
  return (
    <>
      <Container>
        <Typography>
          Welcome to Socket.io
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField value={message} onChange={(e) => {setmessage(e.target.value)}}/>
          <Button type='submit'>Send Message</Button>
        </form>
      </Container>

    </>
  )
}

export default App
