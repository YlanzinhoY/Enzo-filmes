import React, {useState, useEffect} from 'react'
import './meusFilmes.css'
import {Link} from 'react-router-dom'
import  { toast  }  from  'react-toastify' 

const MeusFilmes = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem("@enzoFilme")
        setFilmes(JSON.parse(minhaLista) || [])


    }, [])

    function excluirFilme(id){
       let idFilmes = filmes.filter((value) => {
            return(value.id !== id)
       })

       setFilmes(idFilmes)
       localStorage.setItem('@enzoFilme', JSON.stringify(idFilmes))
       toast.success('Filme removido com sucesso!')

    }
  return (
    <div className='listasContent'>
        <h2>Filmes Salvos</h2>
        {filmes.length === 0 && <span className='avisoSpan'>Você não posssui nenhum filme salvo :(</span>}
            {filmes.map((value) => {
                return(
                    <div className='lista' key={value.id}>
                        <div className='contentList'>
                            <h2>{value.title}</h2>
                            <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} alt={value.title} width="400px"/>
                            <div className='btnExcluir'>
                                <Link to={`/filme/${value.id}`}>Detalhes</Link>
                                <button onClick={() => excluirFilme(value.id)}>Excluir</button>
                            </div>
                        
                        </div>

                        
                    </div>
                )
            })}
    </div>
  )
}

export default MeusFilmes
