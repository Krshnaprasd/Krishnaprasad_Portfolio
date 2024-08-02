import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css'
import Portfolio from './Portfolio';

function App() {
  

  return (
    <>

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Portfolio />}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
