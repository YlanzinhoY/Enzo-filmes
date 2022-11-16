import React from 'react'

import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import  { toast  }  from  'react-toastify' 

import api from '../../services/Api'

import './filme.css'

function Filme() {
  const {id} = useParams()
  const [filme, setFilme] = useState({})
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()


  useEffect(() => {
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "aa4b0efa2616ee2802aa76693545c2b0",
          language: "pt-BR",
        }
      })
      .then((res) => {
        setFilme(res.data)
        setLoading(false)
      })
      .catch(() => {
        navigate("/not", {replace: true})
        return
      })
    }
    loadFilme()
  },[navigate, id])


  function salvarFilme(){
    const meusFilmes = localStorage.getItem("@enzoFilme")

    let filmesSalvos = JSON.parse(meusFilmes) || []

    const temFilme = filmesSalvos.some((value) => value.id === filme.id)

    if(temFilme){
      toast.warn("Filme já está adicionado na sua lista!")
    } else {
      filmesSalvos.push(filme)
      localStorage.setItem("@enzoFilme", JSON.stringify(filmesSalvos))
      toast.success('Filme adicionado com sucesso!')
    }
  }


  if(loading){
    return(
      <div className='loadingFilme'>
          <h2>Carregando detalhes...</h2>
      </div>
    )
  }
  return (
    <div className='filmesDetalhes'>
      <section className='detalhes'>
        <h2 className='title'>{filme.title}</h2>
        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}/>
          <h2 className='dataLancamento'>Data de lançamento: {filme.release_date}</h2>
          <h2 className='sinopse'>Sinopse<p>{filme.overview}</p></h2>
          <h3 className='nota'>Avaliação: {filme.vote_average.toFixed(1)} / 10</h3>
      </section>
      <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar nos meus filmes</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${filme.title} trailer`} target="_blank" rel='external'>Trailer</a>
                </button>
          </div>
    </div>
  )
}

export default Filme
