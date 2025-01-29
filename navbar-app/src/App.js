import React from 'react'
import Navbar from './Components/Navbar/Navbar'

function App() {

  const [theme, setTheme] = useState('light');
  
  return (
    <div className="container">
      <Navbar/>
    </div>
  )
}

export default App
