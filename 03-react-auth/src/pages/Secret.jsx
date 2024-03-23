import { useAuthContext } from '../hooks/useAuthContext'

const Secret = () => {
  const { userPayload } = useAuthContext()

  return (
    <>
      <h1>Secret</h1>
      {userPayload?.role === 'ADMIN'
        ? <p>Ésta es una sección secreta solo para administradores</p>
        : <p>Ésta es una sección secreta solo para usuarios</p>}

      {userPayload?.role === 'ADMIN' && <h4>Bienvenido ADMIN</h4>}

      {userPayload?.role === 'CUSTOMER' && <h4>Bienvenido CUSTOMER</h4>}
    </>
  )
}

export default Secret
