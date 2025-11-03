import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Dashboard from './components/pages/Dashboard'
import Products from './components/pages/Products'
import Profile from './components/pages/Profile'
import Sales from './components/pages/Sales'
import Suppliers from './components/pages/Suppliers'
import RootLayout from './components/layout/RootLayout'

function App() {
  

  return (
    <>
      <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Login/>} />          
        <Route path="register" element={<Register/>} /> 
        <Route path="dashboard" element={<Dashboard/>} /> 
        <Route path="products" element={<Products/>} /> 
        <Route path="profile" element={<Profile/>} /> 
        <Route path="sales" element={<Sales/>} /> 
        <Route path="suppliers" element={<Suppliers/>} /> 
      </Route>
    </Routes>
    </>
  )
}

export default App
