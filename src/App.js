import React from 'react'
import './App.css'
import { Topbar, Navbar, Header, Footer } from './components'
import coverImg2 from './assets/coverImg2.png'

const App = () => {
  return (
    <div className='App'>
      <Topbar />
      <Navbar />
      <Header />
      <div className='container gibson__cover'>
        <img src={coverImg2} alt='cover' />
      </div>
      <Footer />
    </div>
  )
}

export default App