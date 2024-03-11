import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RoutesIndex from './Routes/Index'
import Header from './components/Header/Header'

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
