import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { historico } from './router/historico';
import { Router } from './router/Router'

function App() {
  return(
    <BrowserRouter history={historico}>
      <Router />
    </BrowserRouter>
  )
}

export default App;