import { useState } from 'react'
import './assets/css/reset.css'
import './assets/fonts/poppins/poppins.css'
import './assets/fonts/fontawesome-free-6.1.2-web/css/all.min.css'
import './App.css'
import Home from './components/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App


