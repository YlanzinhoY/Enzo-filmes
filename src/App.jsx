import './App.css'

import RotasApp from './rotas'

import  {ToastContainer}  from  'react-toastify' ; 
import  'react-toastify/dist/ReactToastify.css' ;

function App() {
  

  return (
    <div className="App">
      <ToastContainer autoClose={2000}/>
      <RotasApp/>
    </div>
  )
}

export default App
