import { createContext, useState, useEffect } from 'react'
// CONTEXT tiene que ver con el manejo de estados globales en REACT.

// Para usar Context, necesitamos seguir una serie de pasos.

// 1. Crear el contexto
const AuthContext = createContext()

// 2. Crear el Provider (Proveedor del Contexto)
// El provider es un componente que envuelve a los componentes que necesitan acceder a la información del contexto. El provider maneja donde se obtiene la información y como se comparte.

function AuthProvider ({ children }) {
  const [list, setList] = useState([]) // Lista de canciones
  const [loading, setLoading] = useState(true) // ¿Esta cargando?
  const [selectedSong, setSelectedSong] = useState({}) // Canción seleccionada

  // Simulo la llamada a la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  return (
  // El provider recibe una prop llamada value, que es la información que queremos compartir.
    <AuthContext.Provider value={{ list, loading, selectedSong, setSelectedSong }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
