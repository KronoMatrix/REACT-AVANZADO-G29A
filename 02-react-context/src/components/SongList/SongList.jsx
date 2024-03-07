import { useState, useEffect } from 'react'
import './songlist.css'


import canciones from '../assets/listaCanciones.json'

const SongList = () => {
    const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <section className='row-container'>
        {loading 
        ? <h1>Cargando ...</h1>
        : list.map((song)) => (
            <div key={song.id} className='row-song'>
                <h3>{song.tile}</h3>
                <p>{song.artis}</p>
            </div>
        )}
    </section>
  )
}

export default SongList
