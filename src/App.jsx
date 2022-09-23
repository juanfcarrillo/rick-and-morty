import './App.css'
import { NavBar } from './components'
import MainRouter from './router/MainRouter/MainRouter'

function App () {
  return (
    <MainRouter>
      <NavBar/>
    </MainRouter>
  )
}

export default App
