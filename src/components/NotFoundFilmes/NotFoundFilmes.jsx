import React from 'react'
import {useNavigate} from 'react-router-dom'



import './NotFound.css'

function NotFoundFilmes() {

    const navigate = useNavigate()

    const reloadPage =() =>{
        setTimeout(() => {
            return navigate("/", {replace: true})
        }, 3000)
    }

  return (
    <div className='content'>
        <h2>Filme não encontrado :(</h2>
        <span>Redirecionando para a home</span>
        <span>Carregando...</span>
            {reloadPage()}
    </div>
  )
}

export default NotFoundFilmes
