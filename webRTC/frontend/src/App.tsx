
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sender from './components/Sender'
import Reciver from './components/Reciever'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/sender' element={<Sender/>}/>
          <Route path='/receiver' element={<Reciver/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
