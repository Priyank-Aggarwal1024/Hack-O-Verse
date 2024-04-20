import { useState } from 'react'
import './styles/App.css'
import Chart from 'chart.js/auto';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Sidebar />

      </BrowserRouter>


    </>
  )
}

export default App
