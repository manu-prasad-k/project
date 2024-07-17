import React from 'react'
import AppNavbar from './Nav/AppNavbar'
import "./App.css"
import Home from './components/Home/Home'
import Pages from './components/CARDS/pages'
import Footer from './components/Footer/Footer'
import About from './components/About Us/About'







const App = () => {
  return (
    <div className='App'>



<AppNavbar/>
<Home/>
<About/>
<Pages/>
<Footer/>
    </div>
  )
}

export default App