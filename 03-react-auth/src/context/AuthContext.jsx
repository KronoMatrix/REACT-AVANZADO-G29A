import { createContext, useState, useEffect } from 'react'
// CONTEXT tiene que ver con el manejo de estados globales en REACT.

// Para usar Context, necesitamos seguir una serie de pasos.

// 1. Crear el contexto
const AuthContext = createContext()

// 2. Crear el Provider (Proveedor del Contexto)
// El provider es un componente que envuelve a los componentes que necesitan acceder a la información del contexto. El provider maneja donde se obtiene la información y como se comparte.

function AuthProvider ({ children }) {
  // Aquí va mi lógica
  
  return (
  // El provider recibe una prop llamada value, que es la información que queremos compartir.
    <AuthContext.Provider value={{  }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
