import React from 'react'
import './App.css'
import { Topbar, Navbar, Header, Footer, Shop } from './components'
import coverImg2 from './assets/coverImg2.png'

const App = () => {
  return (
    <div className='App'>
      <Topbar />
      <Navbar />
      <Header />
      <div className='container gibson__cover'>
        <img className='fade-in-br' src={coverImg2} alt='cover' />
      </div>
      <Shop />
      <Footer />
    </div>
  )
}

export default App