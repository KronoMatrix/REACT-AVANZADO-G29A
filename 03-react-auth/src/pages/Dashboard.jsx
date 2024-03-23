import { useState, useEffect } from 'react'
import { getMeUserServices } from '../services/userServices'

const Dashboard = () => {
  const [userData, setUserData] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getMeUserServices(token)

        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchUserData()
  }, [token])

  return (
    <>
      <h1>Dashboard</h1>
      {userData?.first_name && <p>Nombre: {userData.first_name}</p>}
      {userData?.last_name && <p>Apelido: {userData.last_name}</p>}
      {userData?.gender && <p>Género: {userData.gender}</p>}
      {userData?.email && <p>E-mail: {userData.email}</p>}
      {userData?.role && <p>Role: {userData.role}</p>}
    </>
  )
}

export default Dashboard
