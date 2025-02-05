
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Navbaar from './component/Navbaar'
import Products from './component/Products'
// import Product from './component/Product'
import Register from './auth/Register'
import Login from './auth/Login'

    
  
function App() {

  return (
    <>
      <Navbaar></Navbaar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/auth/register' element={<Register></Register>}></Route>
        <Route path='/auth/login' element={<Login></Login>}></Route>
      </Routes>
    </>
  )
}

export default App
