import { useState } from 'react'
import './App.css'
import Profile from './components/profile-home/Profile'
import Navbar from './components/nav-page/nav-section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Profile/>
      
    </>
  )
}

export default App
