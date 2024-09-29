
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBarHeader from './components/NavBarHeader'
import About from './pages/About'

function App() {

  return (
    <>
<NavBarHeader/>    
<Routes>
  <Route
  path='/'
  element={(

    <>
    <About/>
    </>
  )}
  
  />
</Routes>
    </>
  )
}

export default App
