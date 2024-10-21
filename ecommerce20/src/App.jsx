import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import NoPage from './pages/NoPage'
import HomePage from './pages/HomePage'
import Searchbar from './components/SearchBar'
import ProductInfo from './pages/Productinfo'
import ScrollTop from './components/ScrollTop'
import CartPage from './pages/CartPage'
import AllProduct from './pages/AllProduct'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import  UserDashboard  from "./pages/UserDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard";
 function App() {
  return (
 <div>
<Router>
<ScrollTop />
  <Routes>

    <Route path='/' element= {<HomePage/>}/> 
    <Route path='/*' element= {<NoPage/>}/>  
    <Route path='/productinfo' element={<ProductInfo />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/allproduct" element={<AllProduct />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/UserDashboard" element={<UserDashboard />} />
    <Route path="/AdminDashboard" element={<AdminDashboard />} />
    a

      </Routes>
</Router>
 </div>
  )
}

export default App;