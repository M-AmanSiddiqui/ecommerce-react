import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import NoPage from './pages/NoPage'
import HomePage from './pages/HomePage'
import Searchbar from './components/SearchBar'
import ProductInfo from './pages/Productinfo'

 function App() {
  return (
 <div>
<Router>
  <Routes>
    <Route path='/' element= {<HomePage/>}/> 
  
    <Route path='/*' element= {<NoPage/>}/>  

    <Route path='/productinfo' element={<ProductInfo />} />

      </Routes>
</Router>
 </div>
  )
}

export default App;