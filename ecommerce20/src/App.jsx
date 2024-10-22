import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import NoPage from './pages/NoPage'
import HomePage from './pages/HomePage'
import Searchbar from './components/SearchBar'
import ProductInfo from "./pages/ProductInfo";
import ScrollTop from './components/ScrollTop'
import CartPage from './pages/CartPage'
import AllProduct from './pages/AllProduct'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import  UserDashboard  from "./pages/UserDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard";
import AddProductPage from './pages/AddProductPage.jsx'
import UpdateProductPage from './pages/UpdateProductPage.jsx'
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast"
import { ProtectedRouteForUser } from './components/ProtectedRouteForUser.jsx'
import { ProtectedRouteForAdmin } from './components/ProtectedRouteForAdmin.jsx'
import CategoryPage from './pages/CategoryPage'


 function App() {
  return (
 <MyState>
<Router>
<ScrollTop />
  <Routes>

    <Route path='/' element= {<HomePage/>}/> 
    <Route path='/*' element= {<NoPage/>}/>  
    <Route path='/productinfo/:id' element={<ProductInfo />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/allproduct" element={<AllProduct />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/category/:categoryname" element={<CategoryPage />} />
    <Route path="/Userdashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          } />
          <Route path="/AdminDashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/Addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/Updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
}

export default App;