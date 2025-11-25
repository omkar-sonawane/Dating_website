import React from 'react'
import Navbar from './Pages/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Mobile from './Pages/Mobile/Mobile'
import Profile from './Pages/Profile/Profile'
import Footer from './Pages/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Mobile />
      <Profile/>
      <Footer/>
    </div>
  )
}

export default App
