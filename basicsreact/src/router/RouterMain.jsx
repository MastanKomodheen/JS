import React from 'react'
import { Routes ,Route} from 'react-router'
import App from '../App'
import Home from './componets/Home'
import Navbar from './Navbar'
import Footer from './Footer'
import Books from './componets/Books'

const RouterMain = () => {
  return (
    <>   
    <Navbar/>
     <Routes>
      <Route path='/'element={<App/>}/>
      <Route path='/home'element={<Home/>}/>
      <Route path='/books'element={<Books/>}/>
       <Route path='/books/:id'element={<Books/>}/>
      {/*<Route path='/home'element={<Home/>}/>
      <Route path='/home'element={<Home/>}/> */}

    </Routes>
    <Footer/>
    </>

  )
}

export default RouterMain