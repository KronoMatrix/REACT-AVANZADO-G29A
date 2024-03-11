import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import RoutesIndex from './Routes/Index'
import './App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
