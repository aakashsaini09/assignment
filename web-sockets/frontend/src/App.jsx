import './App.css'
import {io} from 'socket.io-client'
import { BACKENDURL } from './Links'
function App() {
  const socket = io(`${BACKENDURL}`)
  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
