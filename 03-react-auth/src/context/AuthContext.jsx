import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
// CONTEXT tiene que ver con el manejo de estados globales en REACT.

// Para usar Context, necesitamos seguir una serie de pasos.

// 1. Crear el contexto
const AuthContext = createContext()

// 2. Crear el Provider (Proveedor del Contexto)
// El provider es un componente que envuelve a los componentes que necesitan acceder a la información del contexto. El provider maneja donde se obtiene la información y como se comparte.

function AuthProvider ({ children }) {
  // Aquí va mi lógica
  const [isAuth, setIsAuth] = useState(false) // ¿Ésta autenticado?
  const [userPayload, setUserPayload] = useState(null) // Información del Payload del token

  const login = (token) => {
    localStorage.setItem('token', token)
    setIsAuth(true)
    const payload = jwtDecode(token)
    setUserPayload(payload)
  }
  const logout = () => {
    localStorage.removeItem('token') // Remuevo el token del localStorage
    setIsAuth(false)
    setUserPayload(null)
  }

  useEffect(() => {
    const token = localStorage.getItem('token') // Obtengo el token del localStorage
    if (token) { // si el token existe, entonces el usuario está autenticado.
      const payload = jwtDecode(token)
      setIsAuth(true)
      setUserPayload(payload)
    }
  }, [])

  return (
  // El provider recibe una prop llamada value, que es la información que queremos compartir.
    <AuthContext.Provider value={{ login, logout, isAuth, setIsAuth, userPayload }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
