import { AuthProvider } from './context/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import RoutesIndex from './Routes/Index'
import './App.css'

function App () {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
