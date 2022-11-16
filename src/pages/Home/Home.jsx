import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Api from '../../services/Api'

// css

import './home.css'


const Home = () => {
  const [filmes,setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes(){
      const res = await Api.get("movie/now_playing", {
        params: {
          api_key: "aa4b0efa2616ee2802aa76693545c2b0",
          language: "pt-BR",
          page: 1
        }
      })
      setFilmes(res.data.results.slice(0, 10))
      setLoading(false)
    }

    loadFilmes()

  },[])

  if(loading){
    return(
      <div className='loading'>
            <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='lista-filmes'>
          {filmes.map(item => {
            return(
              <section key={item.id}>
                <h2>{item.title}</h2>
                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}/>
                <Link to={`/filme/${item.id}`}>Acessar</Link>
              </section>
            )
          })}
      </div>
        
    </div>
  )
}

export default Home
