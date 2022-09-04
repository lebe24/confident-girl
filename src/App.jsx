import { useState } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const style ={
  backgroundColor: 'h-full bg-[#0F103F] text-white',
}

function App() {

  return (
    <div className={style.backgroundColor}>
      <Header/>
      <Main/>
      {/* <Slide /> */}
      <Footer/>
    </div>
  )
}

export default App
