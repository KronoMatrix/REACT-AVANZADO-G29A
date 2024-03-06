import './App.css'
import Header from './components/Header/Header'
import { Home, Dashboard, Login, Secret, Signup } from '@/pages'

function App () {
  return (
    <>
      <h1>React Auth</h1>
      <Header />
      <Home />
      <Dashboard />
      <Login />
      <Secret />
      <Signup />
    </>
  )
}

export default App
